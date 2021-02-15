const WS = require("ws");

const SocketController = (access) => {
  const hook = (wss) => {
    wss.broadcast = (data) => {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WS.OPEN) {
          client.send(data);
        }
      });
    };
    wss.on("connection", function connection(ws, req) {
      if (access !== "*") {
        // We don't want to accept all requests
        if (req.headers.origin !== access) {
          ws.close();
          console.warn(
            "LIVE_MAP: Someone tried connecting from an invalid origin: %s",
            req.headers.origin
          );
        }
      }
    });
    websocketServer = wss;
  };

  let playerData = {};
  let websocketServer = null;

  const makeSurePlayerExists = (id) => {
    if (playerData[id] === undefined) {
      playerData[id] = {};
    }
  };

  const SendPlayerData = () => {
    if (websocketServer == null) return;

    let payload = [];
    for (let identifier in playerData) {
      payload.push(playerData[identifier]);
    }
    websocketServer.broadcast(
      JSON.stringify({
        type: "playerData",
        payload: payload,
      })
    );
  };

  const checkInputs = (identifier, key, data) => {
    if (!identifier) {
      console.debug("LIVE_MAP: Empty identifier: ", identifier);
      return false;
    }
    if (!key) {
      return false;
    }
    if (!data) {
      return false;
    }

    return true;
  };

  // The old, internal events... I can now just call them so... Make them functions!
  const AddPlayerData = (identifier, key, data) => {
    UpdatePlayerData(identifier, key, data); // It'll get added in here anyways...
  };
  const UpdatePlayerData = (identifier, key, data) => {
    if (!checkInputs(identifier, key, data)) {
      return;
    }
    makeSurePlayerExists(identifier);

    playerData[identifier][key] = data;
  };
  const RemovePlayerData = (identifier, key) => {
    if (!checkInputs(identifier, key, "s")) {
      return;
    }
    makeSurePlayerExists(identifier);

    if (playerData[identifier][key] !== undefined) {
      delete playerData[identifier][key];
    }
  };
  const RemovePlayer = (identifier) => {
    if (!identifier) {
      console.warn("LIVE_MAP: Cannot remove player with no identifier");
      return;
    }

    delete playerData[identifier];
    websocketServer.broadcast(
      JSON.stringify({
        type: "playerLeft",
        payload: identifier,
      })
    );
  };

  return {
    hook,
    SendPlayerData,
    AddPlayerData,
    UpdatePlayerData,
    RemovePlayerData,
    RemovePlayer,
  };
};

module.exports = SocketController;
