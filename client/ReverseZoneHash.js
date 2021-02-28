const ZONE_HASHES = {
  [String(GetHashKey("AIRP"))]: "Los Santos International Airport",
  [String(GetHashKey("ALAMO"))]: "Alamo Sea",
  [String(GetHashKey("ALTA"))]: "Alta",
  [String(GetHashKey("ARMYB"))]: "Fort Zancudo",
  [String(GetHashKey("BANHAMC"))]: "Banham Canyon Dr",
  [String(GetHashKey("BANNING"))]: "Banning",
  [String(GetHashKey("BEACH"))]: "Vespucci Beach",
  [String(GetHashKey("BHAMCA"))]: "Banham Canyon",
  [String(GetHashKey("BRADP"))]: "Braddock Pass",
  [String(GetHashKey("BRADT"))]: "Braddock Tunnel",
  [String(GetHashKey("BURTON"))]: "Burton",
  [String(GetHashKey("CALAFB"))]: "Calafia Bridge",
  [String(GetHashKey("CANNY"))]: "Raton Canyon",
  [String(GetHashKey("CCREAK"))]: "Cassidy Creek",
  [String(GetHashKey("CHAMH"))]: "Chamberlain Hills",
  [String(GetHashKey("CHIL"))]: "Vinewood Hills",
  [String(GetHashKey("CHU"))]: "Chumash",
  [String(GetHashKey("CMSW"))]: "Chiliad Mountain State Wilderness",
  [String(GetHashKey("CYPRE"))]: "Cypress Flats",
  [String(GetHashKey("DAVIS"))]: "Davis",
  [String(GetHashKey("DELBE"))]: "Del Perro Beach",
  [String(GetHashKey("DELPE"))]: "Del Perro",
  [String(GetHashKey("DELSOL"))]: "La Puerta",
  [String(GetHashKey("DESRT"))]: "Grand Senora Desert",
  [String(GetHashKey("DOWNT"))]: "Downtown",
  [String(GetHashKey("DTVINE"))]: "Downtown Vinewood",
  [String(GetHashKey("EAST_V"))]: "East Vinewood",
  [String(GetHashKey("EBURO"))]: "El Burro Heights",
  [String(GetHashKey("ELGORL"))]: "El Gordo Lighthouse",
  [String(GetHashKey("ELYSIAN"))]: "Elysian Island",
  [String(GetHashKey("GALFISH"))]: "Galilee",
  [String(GetHashKey("GOLF"))]: "GWC and Golfing Society",
  [String(GetHashKey("GRAPES"))]: "Grapeseed",
  [String(GetHashKey("GREATC"))]: "Great Chaparral",
  [String(GetHashKey("HARMO"))]: "Harmony",
  [String(GetHashKey("HAWICK"))]: "Hawick",
  [String(GetHashKey("HORS"))]: "Vinewood Racetrack",
  [String(GetHashKey("HUMLAB"))]: "Humane Labs and Research",
  [String(GetHashKey("JAIL"))]: "Bolingbroke Penitentiary",
  [String(GetHashKey("KOREAT"))]: "Little Seoul",
  [String(GetHashKey("LACT"))]: "Land Act Reservoir",
  [String(GetHashKey("LAGO"))]: "Lago Zancudo",
  [String(GetHashKey("LDAM"))]: "Land Act Dam",
  [String(GetHashKey("LEGSQU"))]: "Legion Square",
  [String(GetHashKey("LMESA"))]: "La Mesa",
  [String(GetHashKey("LOSPUER"))]: "La Puerta",
  [String(GetHashKey("MIRR"))]: "Mirror Park",
  [String(GetHashKey("MORN"))]: "Morningwood",
  [String(GetHashKey("MOVIE"))]: "Richards Majestic",
  [String(GetHashKey("MTCHIL"))]: "Mount Chiliad",
  [String(GetHashKey("MTGORDO"))]: "Mount Gordo",
  [String(GetHashKey("MTJOSE"))]: "Mount Josiah",
  [String(GetHashKey("MURRI"))]: "Murrieta Heights",
  [String(GetHashKey("NCHU"))]: "North Chumash",
  [String(GetHashKey("NOOSE"))]: "N.O.O.S.E",
  [String(GetHashKey("OCEANA"))]: "Pacific Ocean",
  [String(GetHashKey("PALCOV"))]: "Paleto Cove",
  [String(GetHashKey("PALETO"))]: "Paleto Bay",
  [String(GetHashKey("PALFOR"))]: "Paleto Forest",
  [String(GetHashKey("PALHIGH"))]: "Palomino Highlands",
  [String(GetHashKey("PALMPOW"))]: "Palmer-Taylor Power Station",
  [String(GetHashKey("PBLUFF"))]: "Pacific Bluffs",
  [String(GetHashKey("PBOX"))]: "Pillbox Hill",
  [String(GetHashKey("PROCOB"))]: "Procopio Beach",
  [String(GetHashKey("RANCHO"))]: "Rancho",
  [String(GetHashKey("RGLEN"))]: "Richman Glen",
  [String(GetHashKey("RICHM"))]: "Richman",
  [String(GetHashKey("ROCKF"))]: "Rockford Hills",
  [String(GetHashKey("RTRAK"))]: "Redwood Lights Track",
  [String(GetHashKey("SANAND"))]: "San Andreas",
  [String(GetHashKey("SANCHIA"))]: "San Chianski Mountain Range",
  [String(GetHashKey("SANDY"))]: "Sandy Shores",
  [String(GetHashKey("SKID"))]: "Mission Row",
  [String(GetHashKey("SLAB"))]: "Stab City",
  [String(GetHashKey("STAD"))]: "Maze Bank Arena",
  [String(GetHashKey("STRAW"))]: "Strawberry",
  [String(GetHashKey("TATAMO"))]: "Tataviam Mountains",
  [String(GetHashKey("TERMINA"))]: "Terminal",
  [String(GetHashKey("TEXTI"))]: "Textile City",
  [String(GetHashKey("TONGVAH"))]: "Tongva Hills",
  [String(GetHashKey("TONGVAV"))]: "Tongva Valley",
  [String(GetHashKey("VCANA"))]: "Vespucci Canals",
  [String(GetHashKey("VESP"))]: "Vespucci",
  [String(GetHashKey("VINE"))]: "Vinewood",
  [String(GetHashKey("WINDF"))]: "Ron Alternates Wind Farm",
  [String(GetHashKey("WVINE"))]: "West Vinewood",
  [String(GetHashKey("ZANCUDO"))]: "Zancudo River",
  [String(GetHashKey("ZP_ORT"))]: "Port of South Los Santos",
  [String(GetHashKey("ZQ_UAR"))]: "Davis Quartz",
};

exports(
  "ReverseZoneHash",
  (ReverseZoneHash = (hash) => {
    if (typeof hash !== "string") {
      hash = String(hash);
    }

    const name = ZONE_HASHES[hash];
    if (name !== null) {
      return name;
    } else {
      return "Unknown zone";
    }
  })
);
