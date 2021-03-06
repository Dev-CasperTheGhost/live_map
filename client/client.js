/// <reference path="../node_modules/@citizenfx/client/natives_universal.d.ts" />

const POLICE_VEHICLES = [
  GetHashKey("police"),
  GetHashKey("police2"),
  GetHashKey("police3"),
  GetHashKey("police4"),
  GetHashKey("policeold2"),
  GetHashKey("policeold1"),
  GetHashKey("policet"),
  GetHashKey("policeb"),
  GetHashKey("riot"),
  GetHashKey("sheriff"),
  GetHashKey("sheriff2"),
  GetHashKey("pranger"),
];

const DEFAULT_STATE = {
  pos: { x: 0, y: 0, z: 0 },
  Vehicle: "On foot",
  Weapon: "Unarmed",
  icon: 6, // Player blip id
  "License Plate": "NULL",
  Location: "State of San Andreas", // Player location
};
const temp = {
  vehicleId: null,
  streetName: null,
  zone: null,
  area: null,
  weapon: null,
  icon: 6,
};

let beenUpdated = [];
let firstSpawn = true;

function updateData(key, value) {
  beenUpdated.push(key);
  DEFAULT_STATE[key] = value;
}

function UpdateVehicle() {
  const vehicleId = GetVehiclePedIsIn(PlayerPedId(), false);

  if (temp["vehicleId"] !== vehicleId && vehicleId !== 0) {
    const vehicleHash = GetHashKey(GetDisplayNameFromVehicleModel(GetEntityModel(vehicleId)));
    const vehicleName = exports[GetCurrentResourceName()].ReverseVehicleHash(vehicleHash);

    updateData("Vehicle", vehicleName);
    temp["vehicleId"] = vehicleId;
  }

  let plate = GetVehicleNumberPlateText(vehicleId).trim();
  if (plate.toLowerCase() === "five m") {
    plate += " (Spawned In)";
  }

  if (DEFAULT_STATE["License Plate"] !== plate) {
    updateData("License plate", plate);
  }

  if (temp["icon"] !== vehicleId) {
    const vehicleModel = GetEntityModel(temp["vehicleId"]);

    if (POLICE_VEHICLES.includes(vehicleModel)) {
      updateData("icon", 5);
      return (temp["icon"] = 5);
    } else if (vehicleModel === GetHashKey("ambulance")) {
      updateData("icon", 3);
      return (temp["icon"] = 3);
    } else if (vehicleModel === GetHashKey("firetruk")) {
      updateData("icon", 4);
      return (temp["icon"] = 4);
    } else {
      updateData("icon", 6);
      return (temp["icon"] = 6);
    }
  }
}

onNet("playerSpawned", () => {
  if (firstSpawn) {
    emitNet("livemap:playerSpawned");

    for (const key in DEFAULT_STATE) {
      emitNet("livemap:AddPlayerData", key, DEFAULT_STATE[key]);
    }

    firstSpawn = false;
  }
});

setImmediate(() => {
  setInterval(() => {
    Wait(10);

    if (NetworkIsPlayerActive(PlayerId())) {
      //? UPDATE_LOCATION
      const [x, y, z] = GetEntityCoords(PlayerPedId());
      const { x: x1, y: y1, z: z1 } = DEFAULT_STATE.pos;

      const distanceBetweenVectors = Vdist(x, y, z, x1, y1, z1);

      if (distanceBetweenVectors >= 5) {
        updateData("pos", { x, y, z });

        const [hash] = GetStreetNameAtCoord(x, y, z);
        const streetName = exports[GetCurrentResourceName()].ReverseStreetHash(hash);

        const zone = exports[GetCurrentResourceName()].ReverseZoneHash(
          GetHashKey(GetNameOfZone(x, y, z))
        );

        if (temp["streetName"] !== streetName || temp["zone"] !== zone) {
          const locationString = `${streetName}, ${zone}`;

          updateData("Location", locationString);
          temp["streetName"] = streetName;
          temp["zone"] = zone;
        }
      }

      //? UPDATE_WEAPONS
      const [found, weapon] = GetCurrentPedWeapon(PlayerPedId(), true);
      if (found && temp["weapon"] !== weapon) {
        const weaponName = exports[GetCurrentResourceName()].ReverseWeaponHash(weapon);

        updateData("Weapon", weaponName);

        temp["weapon"] = weaponName;
      } else {
        updateData("Weapon", DEFAULT_STATE["Weapon"]);
      }

      //? UPDATE_VEHICLE
      if (IsPedInAnyVehicle(PlayerPedId())) {
        UpdateVehicle();
      } else if (DEFAULT_STATE["License Plate"] !== null || DEFAULT_STATE.Vehicle !== null) {
        DEFAULT_STATE["License Plate"] = null;
        DEFAULT_STATE["Vehicle"] = null;
        temp["vehicleId"] = null;

        emitNet("livemap:RemovePlayerData", "License Plate");
        emitNet("livemap:RemovePlayerData", "Vehicle");
      } else {
        updateData("Vehicle", DEFAULT_STATE["Vehicle"]);
      }

      //? UPDATE_SOCKET_DATA
      beenUpdated.forEach((item) => {
        emitNet("livemap:UpdatePlayerData", item, DEFAULT_STATE[item]);
        beenUpdated = beenUpdated.filter((i) => item !== i);
      });
    }
  }, 500);
});
