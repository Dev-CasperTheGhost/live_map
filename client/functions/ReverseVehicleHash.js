/// <reference path="../../node_modules/@citizenfx/client/natives_universal.d.ts" />
const VEHICLE_HASHES = {
  [String(GetHashKey("adder"))]: "Adder",
  [String(GetHashKey("airbus"))]: "Airport Bus",
  [String(GetHashKey("airtug"))]: "Airtug",
  [String(GetHashKey("akuma"))]: "Akuma",
  [String(GetHashKey("alpha"))]: "Alpha",
  [String(GetHashKey("ambulance"))]: "Ambulance",
  [String(GetHashKey("annihilator"))]: "Annihilator",
  [String(GetHashKey("armytanker"))]: "Army Trailer",
  [String(GetHashKey("armytrailer"))]: "Army Trailer",
  [String(GetHashKey("armytrailer2"))]: "Army Trailer",
  [String(GetHashKey("asea"))]: "Asea",
  [String(GetHashKey("asea2"))]: "Asea",
  [String(GetHashKey("asterope"))]: "Asterope",
  [String(GetHashKey("bagger"))]: "Bagger",
  [String(GetHashKey("baletrailer"))]: "Baletrailer",
  [String(GetHashKey("baller"))]: "Baller",
  [String(GetHashKey("baller2"))]: "Baller",
  [String(GetHashKey("baller3"))]: "Baller LE",
  [String(GetHashKey("baller4"))]: "Baller LE LWB",
  [String(GetHashKey("baller5"))]: "Baller LE (Armored)",
  [String(GetHashKey("baller6"))]: "Baller LE LWB (Armored)",
  [String(GetHashKey("banshee"))]: "Banshee",
  [String(GetHashKey("banshee2"))]: "Banshee 900R",
  [String(GetHashKey("barracks"))]: "Barracks",
  [String(GetHashKey("barracks2"))]: "Barracks Semi",
  [String(GetHashKey("barracks3"))]: "Barracks",
  [String(GetHashKey("bati"))]: "Bati 801",
  [String(GetHashKey("bati2"))]: "Bati 801RR",
  [String(GetHashKey("benson"))]: "Benson",
  [String(GetHashKey("besra"))]: "Besra",
  [String(GetHashKey("bestiagts"))]: "Bestia GTS",
  [String(GetHashKey("bf400"))]: "BF400",
  [String(GetHashKey("bfinjection"))]: "Injection",
  [String(GetHashKey("biff"))]: "Biff",
  [String(GetHashKey("bifta"))]: "Bifta",
  [String(GetHashKey("bison"))]: "Bison",
  [String(GetHashKey("bison2"))]: "Bison",
  [String(GetHashKey("bison3"))]: "Bison",
  [String(GetHashKey("bjxl"))]: "BeeJay XL",
  [String(GetHashKey("blade"))]: "Blade",
  [String(GetHashKey("blazer"))]: "Blazer",
  [String(GetHashKey("blazer2"))]: "Blazer Lifeguard",
  [String(GetHashKey("blazer3"))]: "Hot Rod Blazer",
  [String(GetHashKey("blimp"))]: "Atomic Blimp",
  [String(GetHashKey("blimp2"))]: "Xero Blimp",
  [String(GetHashKey("blista"))]: "Blista",
  [String(GetHashKey("blista2"))]: "Blista Compact",
  [String(GetHashKey("blista3"))]: "Go Go Monkey Blista",
  [String(GetHashKey("bmx"))]: "BMX",
  [String(GetHashKey("boattrailer"))]: "Boat Trailer",
  [String(GetHashKey("bobcatxl"))]: "Bobcat XL",
  [String(GetHashKey("bodhi2"))]: "Bodhi",
  [String(GetHashKey("boxville"))]: "Boxville",
  [String(GetHashKey("boxville2"))]: "Boxville",
  [String(GetHashKey("boxville3"))]: "Boxville",
  [String(GetHashKey("boxville4"))]: "Boxville",
  [String(GetHashKey("brawler"))]: "Brawler",
  [String(GetHashKey("brickade"))]: "Brickade",
  [String(GetHashKey("brioso"))]: "Brioso R/A",
  [String(GetHashKey("btype"))]: "Roosevelt",
  [String(GetHashKey("btype2"))]: "Fränken Stange",
  [String(GetHashKey("btype3"))]: "Roosevelt Valor",
  [String(GetHashKey("buccaneer"))]: "Buccaneer",
  [String(GetHashKey("buccaneer2"))]: "Buccaneer Custom",
  [String(GetHashKey("buffalo"))]: "Buffalo",
  [String(GetHashKey("buffalo2"))]: "Buffalo S",
  [String(GetHashKey("buffalo3"))]: "Sprunk Buffalo",
  [String(GetHashKey("bulldozer"))]: "Dozer",
  [String(GetHashKey("bullet"))]: "Bullet",
  [String(GetHashKey("burrito"))]: "Burrito",
  [String(GetHashKey("burrito2"))]: "Burrito",
  [String(GetHashKey("burrito3"))]: "Burrito",
  [String(GetHashKey("burrito4"))]: "Burrito",
  [String(GetHashKey("burrito5"))]: "Burrito",
  [String(GetHashKey("bus"))]: "Bus",
  [String(GetHashKey("buzzard"))]: "Buzzard Attack Chopper",
  [String(GetHashKey("buzzard2"))]: "Buzzard",
  [String(GetHashKey("cablecar"))]: "Cable Car",
  [String(GetHashKey("caddy"))]: "Caddy",
  [String(GetHashKey("caddy2"))]: "Caddy",
  [String(GetHashKey("camper"))]: "Camper",
  [String(GetHashKey("carbonizzare"))]: "Carbonizzare",
  [String(GetHashKey("carbonrs"))]: "Carbon RS",
  [String(GetHashKey("cargobob"))]: "Cargobob",
  [String(GetHashKey("cargobob2"))]: "Cargobob",
  [String(GetHashKey("cargobob3"))]: "Cargobob",
  [String(GetHashKey("cargobob4"))]: "Cargobob",
  [String(GetHashKey("cargoplane"))]: "Cargo Plane",
  [String(GetHashKey("casco"))]: "Casco",
  [String(GetHashKey("cavalcade"))]: "Cavalcade",
  [String(GetHashKey("cavalcade2"))]: "Cavalcade",
  [String(GetHashKey("cheetah"))]: "Cheetah",
  [String(GetHashKey("chino"))]: "Chino",
  [String(GetHashKey("chino2"))]: "Chino Custom",
  [String(GetHashKey("cliffhanger"))]: "Cliffhanger",
  [String(GetHashKey("coach"))]: "Dashound",
  [String(GetHashKey("cog55"))]: "Cognoscenti 55",
  [String(GetHashKey("cog552"))]: "Cognoscenti 55 (Armored)",
  [String(GetHashKey("cogcabrio"))]: "Cognoscenti Cabrio",
  [String(GetHashKey("cognoscenti"))]: "Cognoscenti",
  [String(GetHashKey("cognoscenti2"))]: "Cognoscenti (Armored)",
  [String(GetHashKey("comet2"))]: "Comet",
  [String(GetHashKey("contender"))]: "Contender",
  [String(GetHashKey("coquette"))]: "Coquette",
  [String(GetHashKey("coquette2"))]: "Coquette Classic",
  [String(GetHashKey("coquette3"))]: "Coquette BlackFin",
  [String(GetHashKey("cruiser"))]: "Cruiser",
  [String(GetHashKey("crusader"))]: "Crusader",
  [String(GetHashKey("cuban800"))]: "Cuban 800",
  [String(GetHashKey("cutter"))]: "Cutter",
  [String(GetHashKey("daemon"))]: "Daemon",
  [String(GetHashKey("dilettante"))]: "Dilettante",
  [String(GetHashKey("dilettante2"))]: "Dilettante",
  [String(GetHashKey("dinghy"))]: "Dinghy",
  [String(GetHashKey("dinghy2"))]: "Dinghy",
  [String(GetHashKey("dinghy3"))]: "Dinghy",
  [String(GetHashKey("dinghy4"))]: "Dinghy",
  [String(GetHashKey("dloader"))]: "Duneloader",
  [String(GetHashKey("docktrailer"))]: "NULL",
  [String(GetHashKey("docktug"))]: "Docktug",
  [String(GetHashKey("dodo"))]: "Dodo",
  [String(GetHashKey("dominator"))]: "Dominator",
  [String(GetHashKey("dominator2"))]: "Pisswasser Dominator",
  [String(GetHashKey("double"))]: "Double-T",
  [String(GetHashKey("dubsta"))]: "Dubsta",
  [String(GetHashKey("dubsta2"))]: "Dubsta",
  [String(GetHashKey("dubsta3"))]: "Dubsta 6x6",
  [String(GetHashKey("dukes"))]: "Dukes",
  [String(GetHashKey("dukes2"))]: "Duke O'Death",
  [String(GetHashKey("dump"))]: "Dump",
  [String(GetHashKey("dune"))]: "Dune Buggy",
  [String(GetHashKey("dune2"))]: "Space Docker",
  [String(GetHashKey("duster"))]: "Duster",
  [String(GetHashKey("elegy2"))]: "Elegy RH8",
  [String(GetHashKey("emperor"))]: "Emperor",
  [String(GetHashKey("emperor2"))]: "Emperor",
  [String(GetHashKey("emperor3"))]: "Emperor",
  [String(GetHashKey("enduro"))]: "Enduro",
  [String(GetHashKey("entityxf"))]: "Entity XF",
  [String(GetHashKey("exemplar"))]: "Exemplar",
  [String(GetHashKey("f620"))]: "F620",
  [String(GetHashKey("faction"))]: "Faction",
  [String(GetHashKey("faction2"))]: "Faction Custom",
  [String(GetHashKey("faction3"))]: "Faction Custom Donk",
  [String(GetHashKey("faggio2"))]: "Faggio",
  [String(GetHashKey("fbi"))]: "FIB",
  [String(GetHashKey("fbi2"))]: "FIB",
  [String(GetHashKey("felon"))]: "Felon",
  [String(GetHashKey("felon2"))]: "Felon GT",
  [String(GetHashKey("feltzer2"))]: "Feltzer",
  [String(GetHashKey("feltzer3"))]: "Stirling GT",
  [String(GetHashKey("firetruk"))]: "Fire Truck",
  [String(GetHashKey("fixter"))]: "Fixter",
  [String(GetHashKey("flatbed"))]: "Flatbed",
  [String(GetHashKey("fmj"))]: "FMJ",
  [String(GetHashKey("forklift"))]: "Forklift",
  [String(GetHashKey("fq2"))]: "FQ 2",
  [String(GetHashKey("freight"))]: "Freight Train",
  [String(GetHashKey("freightcar"))]: "Freight Train",
  [String(GetHashKey("freightcont1"))]: "Freight Train",
  [String(GetHashKey("freightcont2"))]: "Freight Train",
  [String(GetHashKey("freightgrain"))]: "Freight Train",
  [String(GetHashKey("freighttrailer"))]: "NULL",
  [String(GetHashKey("frogger"))]: "Frogger",
  [String(GetHashKey("frogger2"))]: "Frogger",
  [String(GetHashKey("fugitive"))]: "Fugitive",
  [String(GetHashKey("furoregt"))]: "Furore GT",
  [String(GetHashKey("fusilade"))]: "Fusilade",
  [String(GetHashKey("futo"))]: "Futo",
  [String(GetHashKey("gargoyle"))]: "Gargoyle",
  [String(GetHashKey("gauntlet"))]: "Gauntlet",
  [String(GetHashKey("gauntlet2"))]: "Redwood Gauntlet",
  [String(GetHashKey("gburrito"))]: "Gang Burrito",
  [String(GetHashKey("gburrito2"))]: "Gang Burrito",
  [String(GetHashKey("glendale"))]: "Glendale",
  [String(GetHashKey("graintrailer"))]: "NULL",
  [String(GetHashKey("granger"))]: "Granger",
  [String(GetHashKey("gresley"))]: "Gresley",
  [String(GetHashKey("guardian"))]: "Guardian",
  [String(GetHashKey("habanero"))]: "Habanero",
  [String(GetHashKey("hakuchou"))]: "Hakuchou",
  [String(GetHashKey("handler"))]: "Dock Handler",
  [String(GetHashKey("hauler"))]: "Hauler",
  [String(GetHashKey("hexer"))]: "Hexer",
  [String(GetHashKey("hotknife"))]: "Hotknife",
  [String(GetHashKey("huntley"))]: "Huntley S",
  [String(GetHashKey("hydra"))]: "Hydra",
  [String(GetHashKey("infernus"))]: "Infernus",
  [String(GetHashKey("ingot"))]: "Ingot",
  [String(GetHashKey("innovation"))]: "Innovation",
  [String(GetHashKey("insurgent"))]: "Insurgent Pick-Up",
  [String(GetHashKey("insurgent2"))]: "Insurgent",
  [String(GetHashKey("intruder"))]: "Intruder",
  [String(GetHashKey("issi2"))]: "Issi",
  [String(GetHashKey("jackal"))]: "Jackal",
  [String(GetHashKey("jb700"))]: "JB 700",
  [String(GetHashKey("jester"))]: "Jester",
  [String(GetHashKey("jester2"))]: "Jester (Racecar)",
  [String(GetHashKey("jet"))]: "Jet",
  [String(GetHashKey("jetmax"))]: "Jetmax",
  [String(GetHashKey("journey"))]: "Journey",
  [String(GetHashKey("kalahari"))]: "Kalahari",
  [String(GetHashKey("khamelion"))]: "Khamelion",
  [String(GetHashKey("kuruma"))]: "Kuruma",
  [String(GetHashKey("kuruma2"))]: "Kuruma (Armored)",
  [String(GetHashKey("landstalker"))]: "Landstalker",
  [String(GetHashKey("lazer"))]: "P-996 LAZER",
  [String(GetHashKey("le7b"))]: "RE-7B",
  [String(GetHashKey("lectro"))]: "Lectro",
  [String(GetHashKey("lguard"))]: "Lifeguard",
  [String(GetHashKey("limo2"))]: "Turreted Limo",
  [String(GetHashKey("lurcher"))]: "Lurcher",
  [String(GetHashKey("luxor"))]: "Luxor",
  [String(GetHashKey("luxor2"))]: "Luxor Deluxe",
  [String(GetHashKey("lynx"))]: "Lynx",
  [String(GetHashKey("mamba"))]: "Mamba",
  [String(GetHashKey("mammatus"))]: "Mammatus",
  [String(GetHashKey("manana"))]: "Manana",
  [String(GetHashKey("marquis"))]: "Marquis",
  [String(GetHashKey("marshall"))]: "Marshall",
  [String(GetHashKey("massacro"))]: "Massacro",
  [String(GetHashKey("massacro2"))]: "Massacro (Racecar)",
  [String(GetHashKey("maverick"))]: "Maverick",
  [String(GetHashKey("mesa"))]: "Mesa",
  [String(GetHashKey("mesa2"))]: "Mesa",
  [String(GetHashKey("mesa3"))]: "Mesa",
  [String(GetHashKey("metrotrain"))]: "Freight Train",
  [String(GetHashKey("miljet"))]: "Miljet",
  [String(GetHashKey("minivan"))]: "Minivan",
  [String(GetHashKey("minivan2"))]: "Minivan Custom",
  [String(GetHashKey("mixer"))]: "Mixer",
  [String(GetHashKey("mixer2"))]: "Mixer",
  [String(GetHashKey("monroe"))]: "Monroe",
  [String(GetHashKey("monster"))]: "Liberator",
  [String(GetHashKey("moonbeam"))]: "Moonbeam",
  [String(GetHashKey("moonbeam2"))]: "Moonbeam Custom",
  [String(GetHashKey("mower"))]: "Lawn Mower",
  [String(GetHashKey("mule"))]: "Mule",
  [String(GetHashKey("mule2"))]: "Mule",
  [String(GetHashKey("mule3"))]: "Mule",
  [String(GetHashKey("nemesis"))]: "Nemesis",
  [String(GetHashKey("nightshade"))]: "Nightshade",
  [String(GetHashKey("nimbus"))]: "Nimbus",
  [String(GetHashKey("ninef"))]: "9F",
  [String(GetHashKey("ninef2"))]: "9F Cabrio",
  [String(GetHashKey("omnis"))]: "Omnis",
  [String(GetHashKey("oracle"))]: "Oracle XS",
  [String(GetHashKey("oracle2"))]: "Oracle",
  [String(GetHashKey("osiris"))]: "Osiris",
  [String(GetHashKey("packer"))]: "Packer",
  [String(GetHashKey("panto"))]: "Panto",
  [String(GetHashKey("paradise"))]: "Paradise",
  [String(GetHashKey("patriot"))]: "Patriot",
  [String(GetHashKey("pbus"))]: "Prison Bus",
  [String(GetHashKey("pcj"))]: "PCJ 600",
  [String(GetHashKey("penumbra"))]: "Penumbra",
  [String(GetHashKey("peyote"))]: "Peyote",
  [String(GetHashKey("pfister811"))]: "811",
  [String(GetHashKey("phantom"))]: "Phantom",
  [String(GetHashKey("phoenix"))]: "Phoenix",
  [String(GetHashKey("picador"))]: "Picador",
  [String(GetHashKey("pigalle"))]: "Pigalle",
  [String(GetHashKey("police"))]: "Police Cruiser",
  [String(GetHashKey("police2"))]: "Police Cruiser",
  [String(GetHashKey("police3"))]: "Police Cruiser",
  [String(GetHashKey("police4"))]: "Unmarked Cruiser",
  [String(GetHashKey("policeb"))]: "Police Bike",
  [String(GetHashKey("policeold1"))]: "Police Rancher",
  [String(GetHashKey("policeold2"))]: "Police Roadcruiser",
  [String(GetHashKey("policet"))]: "Police Transporter",
  [String(GetHashKey("polmav"))]: "Police Maverick",
  [String(GetHashKey("pony"))]: "Pony",
  [String(GetHashKey("pony2"))]: "Pony",
  [String(GetHashKey("pounder"))]: "Pounder",
  [String(GetHashKey("prairie"))]: "Prairie",
  [String(GetHashKey("pranger"))]: "Park Ranger",
  [String(GetHashKey("predator"))]: "Police Predator",
  [String(GetHashKey("premier"))]: "Premier",
  [String(GetHashKey("primo"))]: "Primo",
  [String(GetHashKey("primo2"))]: "Primo Custom",
  [String(GetHashKey("proptrailer"))]: "NULL",
  [String(GetHashKey("prototipo"))]: "X80 Proto",
  [String(GetHashKey("radi"))]: "Radius",
  [String(GetHashKey("raketrailer"))]: "Trailer",
  [String(GetHashKey("rallytruck"))]: "Dune",
  [String(GetHashKey("rancherxl"))]: "Rancher XL",
  [String(GetHashKey("rancherxl2"))]: "Rancher XL",
  [String(GetHashKey("rapidgt"))]: "Rapid GT",
  [String(GetHashKey("rapidgt2"))]: "Rapid GT",
  [String(GetHashKey("ratloader"))]: "Rat-Loader",
  [String(GetHashKey("ratloader2"))]: "Rat-Truck",
  [String(GetHashKey("reaper"))]: "Reaper",
  [String(GetHashKey("rebel"))]: "Rusty Rebel",
  [String(GetHashKey("rebel2"))]: "Rebel",
  [String(GetHashKey("regina"))]: "Regina",
  [String(GetHashKey("rentalbus"))]: "Rental Shuttle Bus",
  [String(GetHashKey("rhapsody"))]: "Rhapsody",
  [String(GetHashKey("rhino"))]: "Rhino Tank",
  [String(GetHashKey("riot"))]: "Police Riot",
  [String(GetHashKey("ripley"))]: "Ripley",
  [String(GetHashKey("rocoto"))]: "Rocoto",
  [String(GetHashKey("romero"))]: "Romero Hearse",
  [String(GetHashKey("rubble"))]: "Rubble",
  [String(GetHashKey("ruffian"))]: "Ruffian",
  [String(GetHashKey("ruiner"))]: "Ruiner",
  [String(GetHashKey("rumpo"))]: "Rumpo",
  [String(GetHashKey("rumpo2"))]: "Rumpo",
  [String(GetHashKey("rumpo3"))]: "Rumpo Custom",
  [String(GetHashKey("sabregt"))]: "Sabre Turbo",
  [String(GetHashKey("sabregt2"))]: "Sabre Turbo Custom",
  [String(GetHashKey("sadler"))]: "Sadler",
  [String(GetHashKey("sadler2"))]: "Sadler",
  [String(GetHashKey("sanchez"))]: "Sanchez (livery)",
  [String(GetHashKey("sanchez2"))]: "Sanchez",
  [String(GetHashKey("sandking"))]: "Sandking XL",
  [String(GetHashKey("sandking2"))]: "Sandking SWB",
  [String(GetHashKey("savage"))]: "Savage",
  [String(GetHashKey("schafter2"))]: "Schafter",
  [String(GetHashKey("schafter3"))]: "Schafter V12",
  [String(GetHashKey("schafter4"))]: "Schafter LWB",
  [String(GetHashKey("schafter5"))]: "Schafter V12 (Armored)",
  [String(GetHashKey("schafter6"))]: "Schafter LWB (Armored)",
  [String(GetHashKey("schwarzer"))]: "Schwartzer",
  [String(GetHashKey("schwarze"))]: "Schwartzer",
  [String(GetHashKey("scorcher"))]: "Scorcher",
  [String(GetHashKey("scrap"))]: "Scrap Truck",
  [String(GetHashKey("seashark"))]: "Seashark",
  [String(GetHashKey("seashark2"))]: "Seashark",
  [String(GetHashKey("seashark3"))]: "Seashark",
  [String(GetHashKey("seminole"))]: "Seminole",
  [String(GetHashKey("sentinel"))]: "Sentinel XS",
  [String(GetHashKey("sentinel2"))]: "Sentinel",
  [String(GetHashKey("serrano"))]: "Serrano",
  [String(GetHashKey("seven70"))]: "Seven-70",
  [String(GetHashKey("shamal"))]: "Shamal",
  [String(GetHashKey("sheava"))]: "ETR1",
  [String(GetHashKey("sheriff"))]: "Sheriff Cruiser",
  [String(GetHashKey("sheriff2"))]: "Sheriff SUV",
  [String(GetHashKey("skylift"))]: "Skylift",
  [String(GetHashKey("slamvan"))]: "Slamvan",
  [String(GetHashKey("slamvan2"))]: "Lost Slamvan",
  [String(GetHashKey("slamvan3"))]: "Slamvan Custom",
  [String(GetHashKey("sovereign"))]: "Sovereign",
  [String(GetHashKey("speeder"))]: "Speeder",
  [String(GetHashKey("speeder2"))]: "Speeder",
  [String(GetHashKey("speedo"))]: "Speedo",
  [String(GetHashKey("speedo2"))]: "Clown Van",
  [String(GetHashKey("squalo"))]: "Squalo",
  [String(GetHashKey("stalion"))]: "Stallion",
  [String(GetHashKey("stalion2"))]: "Burger Shot Stallion",
  [String(GetHashKey("stanier"))]: "Stanier",
  [String(GetHashKey("stinger"))]: "Stinger",
  [String(GetHashKey("stingergt"))]: "Stinger GT",
  [String(GetHashKey("stockade"))]: "Stockade",
  [String(GetHashKey("stockade3"))]: "Stockade",
  [String(GetHashKey("stratum"))]: "Stratum",
  [String(GetHashKey("stretch"))]: "Stretch",
  [String(GetHashKey("stunt"))]: "Mallard",
  [String(GetHashKey("submersible"))]: "Submersible",
  [String(GetHashKey("submersible2"))]: "Kraken",
  [String(GetHashKey("sultan"))]: "Sultan",
  [String(GetHashKey("sultanrs"))]: "Sultan RS",
  [String(GetHashKey("suntrap"))]: "Suntrap",
  [String(GetHashKey("superd"))]: "Super Diamond",
  [String(GetHashKey("supervolito"))]: "SuperVolito",
  [String(GetHashKey("supervolito2"))]: "SuperVolito Carbon",
  [String(GetHashKey("surano"))]: "Surano",
  [String(GetHashKey("surfer"))]: "Surfer",
  [String(GetHashKey("surfer2"))]: "Surfer",
  [String(GetHashKey("surge"))]: "Surge",
  [String(GetHashKey("swift"))]: "Swift",
  [String(GetHashKey("swift2"))]: "Swift Deluxe",
  [String(GetHashKey("t20"))]: "T20",
  [String(GetHashKey("taco"))]: "Taco Van",
  [String(GetHashKey("tailgater"))]: "Tailgater",
  [String(GetHashKey("tampa"))]: "Tampa",
  [String(GetHashKey("tampa2"))]: "Drift Tampa",
  [String(GetHashKey("tanker"))]: "Trailer",
  [String(GetHashKey("tanker2"))]: "NULL",
  [String(GetHashKey("tankercar"))]: "Freight Train",
  [String(GetHashKey("taxi"))]: "Taxi",
  [String(GetHashKey("technical"))]: "Technical",
  [String(GetHashKey("thrust"))]: "Thrust",
  [String(GetHashKey("tiptruck"))]: "Tipper",
  [String(GetHashKey("tiptruck2"))]: "Tipper",
  [String(GetHashKey("titan"))]: "Titan",
  [String(GetHashKey("tornado"))]: "Tornado",
  [String(GetHashKey("tornado2"))]: "Tornado",
  [String(GetHashKey("tornado3"))]: "Tornado",
  [String(GetHashKey("tornado4"))]: "Tornado",
  [String(GetHashKey("tornado5"))]: "Tornado Custom",
  [String(GetHashKey("toro"))]: "Toro",
  [String(GetHashKey("toro2"))]: "Toro",
  [String(GetHashKey("tourbus"))]: "Tourbus",
  [String(GetHashKey("towtruck"))]: "Towtruck",
  [String(GetHashKey("towtruck2"))]: "Towtruck",
  [String(GetHashKey("tr2"))]: "Trailer",
  [String(GetHashKey("tr3"))]: "Trailer",
  [String(GetHashKey("tr4"))]: "Trailer",
  [String(GetHashKey("tractor"))]: "Tractor",
  [String(GetHashKey("tractor2"))]: "Fieldmaster",
  [String(GetHashKey("tractor3"))]: "Fieldmaster",
  [String(GetHashKey("trailerlogs"))]: "Trailer",
  [String(GetHashKey("trailers"))]: "Trailer",
  [String(GetHashKey("trailers2"))]: "Trailer",
  [String(GetHashKey("trailers3"))]: "Trailer",
  [String(GetHashKey("trailersmall"))]: "Trailer",
  [String(GetHashKey("trash"))]: "Trashmaster",
  [String(GetHashKey("trash2"))]: "Trashmaster",
  [String(GetHashKey("trflat"))]: "Trailer",
  [String(GetHashKey("tribike"))]: "Whippet Race Bike",
  [String(GetHashKey("tribike2"))]: "Endurex Race Bike",
  [String(GetHashKey("tribike3"))]: "Tri-Cycles Race Bike",
  [String(GetHashKey("trophytruck"))]: "Trophy Truck",
  [String(GetHashKey("trophytruck2"))]: "Desert Raid",
  [String(GetHashKey("tropic"))]: "Tropic",
  [String(GetHashKey("tropic2"))]: "Tropic",
  [String(GetHashKey("tropos"))]: "Tropos Rallye",
  [String(GetHashKey("tug"))]: "Tug",
  [String(GetHashKey("turismor"))]: "Turismo R",
  [String(GetHashKey("tvtrailer"))]: "Trailer",
  [String(GetHashKey("tyrus"))]: "Tyrus",
  [String(GetHashKey("utillitruck"))]: "Utility Truck",
  [String(GetHashKey("utillitruck2"))]: "Utility Truck",
  [String(GetHashKey("utillitruck3"))]: "Utility Truck",
  [String(GetHashKey("vacca"))]: "Vacca",
  [String(GetHashKey("vader"))]: "Vader",
  [String(GetHashKey("valkyrie"))]: "Valkyrie",
  [String(GetHashKey("valkyrie2"))]: "Valkyrie MOD.0",
  [String(GetHashKey("velum"))]: "Velum",
  [String(GetHashKey("velum2"))]: "Velum 5-Seater",
  [String(GetHashKey("verlierer2"))]: "Verlierer",
  [String(GetHashKey("vestra"))]: "Vestra",
  [String(GetHashKey("vigero"))]: "Vigero",
  [String(GetHashKey("vindicator"))]: "Vindicator",
  [String(GetHashKey("virgo"))]: "Virgo",
  [String(GetHashKey("virgo2"))]: "Virgo Classic Custom",
  [String(GetHashKey("virgo3"))]: "Virgo Classic",
  [String(GetHashKey("volatus"))]: "Volatus",
  [String(GetHashKey("voltic"))]: "Voltic",
  [String(GetHashKey("voodoo"))]: "Voodoo Custom",
  [String(GetHashKey("voodoo2"))]: "Voodoo",
  [String(GetHashKey("warrener"))]: "Warrener",
  [String(GetHashKey("washington"))]: "Washington",
  [String(GetHashKey("windsor"))]: "Windsor",
  [String(GetHashKey("windsor2"))]: "Windsor Drop",
  [String(GetHashKey("xls"))]: "XLS",
  [String(GetHashKey("xls2"))]: "XLS (Armored)",
  [String(GetHashKey("youga"))]: "Youga",
  [String(GetHashKey("zentorno"))]: "Zentorno",
  [String(GetHashKey("zion"))]: "Zion",
  [String(GetHashKey("zion2"))]: "Zion Cabrio",
  [String(GetHashKey("ztype"))]: "Z-Type",
};

module.exports = (hash) => {
  if (typeof hash !== "string") {
    hash = String(hash);
  }

  const name = VEHICLE_HASHES[hash];

  if (!name) {
    return "Unkown vehicle";
  } else {
    return name;
  }
};
