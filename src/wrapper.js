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
    setStaticData(source, GetPlayerIdentifier(source));
  });

  onNet("livemap:AddPlayerData", (key, data) => {
    SocketController.AddPlayerData(GetPlayerIdentifier(source, 0), key, data);
  });

  onNet("livemap:UpdatePlayerData", (key, data) => {
    SocketController.UpdatePlayerData(GetPlayerIdentifier(source, 0), key, data);
  });

  onNet("livemap:RemovePlayerData", (key) => {
    SocketController.RemovePlayerData(GetPlayerIdentifier(source, 0), key);
  });

  onNet("livemap:RemovePlayer", () => {
    SocketController.RemovePlayer(GetPlayerIdentifier(source, 0));
  });

  onNet("playerDropped", () => {
    SocketController.RemovePlayer(GetPlayerIdentifier(source, 0));
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

module.exports = EventsWrapper;
