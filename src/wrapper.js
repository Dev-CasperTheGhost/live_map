const EventsWrapper = (SocketController) => {
  const setStaticData = (source, id) => {
    SocketController.AddPlayerData(id, "identifier", id);
    SocketController.AddPlayerData(id, "name", GetPlayerName(source));
  };

  onNet("onResourceStart", (name) => {
    if (name.toLowerCase() === GetCurrentResourceName().toLowerCase()) {
      if (GetNumPlayerIndices() !== 0) {
        console.info("LIVE_MAP: Players on the server... Initializing them");
        for (let i = 0; i < GetNumPlayerIndices(); i++) {
          const id = GetPlayerIdentifier(GetPlayerFromIndex(i), 0);
          setStaticData(GetPlayerFromIndex(i), id);
        }
      }
    }
  });

  onNet("livemap:playerSpawned", () => {
    const ids = getAllIdentifersJSON(source);

    setStaticData(source, ids["steam"]);
  });

  onNet("livemap:AddPlayerData", (key, data) => {
    const ids = getAllIdentifersJSON(source);

    SocketController.AddPlayerData(ids["steam"], key, data);
  });

  onNet("livemap:UpdatePlayerData", (key, data) => {
    const ids = getAllIdentifersJSON(source);

    SocketController.UpdatePlayerData(ids["steam"], key, data);
  });

  onNet("livemap:RemovePlayerData", (key) => {
    const ids = getAllIdentifersJSON(source);

    SocketController.RemovePlayerData(ids["steam"], key);
  });

  onNet("livemap:RemovePlayer", () => {
    const ids = getAllIdentifersJSON(source);

    SocketController.RemovePlayer(ids["steam"]);
  });

  onNet("playerDropped", () => {
    const ids = getAllIdentifersJSON(source);

    SocketController.RemovePlayer(ids["steam"]);
  });

  // Internal events for server-side scripts. See https://github.com/TGRHavoc/live_map/issues/45
  on("livemap:internal_AddPlayerData", (id, key, data) => {
    SocketController.AddPlayerData(id, key, data);
  });

  on("livemap:internal_UpdatePlayerData", (id, key, data) => {
    SocketController.UpdatePlayerData(id, key, data);
  });

  on("livemap:internal_RemovePlayerData", (id, key) => {
    SocketController.RemovePlayerData(id, key);
  });

  on("livemap:internal_RemovePlayer", (id) => {
    SocketController.RemovePlayer(id);
  });

  return {};
};

// Thanks to DaRealSh0T
function getAllIdentifersJSON(playerSrc) {
  const json = {};
  for (let i = 0; i < GetNumPlayerIdentifiers(playerSrc); i++) {
    let str = GetPlayerIdentifier(playerSrc, i);
    let split = str.split(":");
    json[split[0]] = str;
  }
  return json;
}

module.exports = EventsWrapper;
