fx_version "bodacious"
game "gta5"

dependency 'yarn'
dependency 'webpack'

webpack_config 'webpack.config.js'

client_scripts {
    "client/client.js",
    "client/ReverseStreetHash.js",
    "client/ReverseZoneHash.js",
    "client/ReverseVehicleHash.js",
    "client/ReverseWeaponHash.js",
}

exports {
   "ReverseStreetHash",
   "ReverseZoneHash",
   "ReverseWeaponHash",
   "ReverseVehicleHash"
}

server_scripts {
    "dist/livemap.js",
    "server/version.js"
}
