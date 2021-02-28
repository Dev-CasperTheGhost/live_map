fx_version "bodacious"
game "gta5"

dependency 'yarn'
dependency 'webpack'

webpack_config 'webpack.config.js'

client_scripts {
    "client/client.js",
    "client/functions/ReverseStreetHash.js",
    "client/functions/ReverseZoneHash.js",
    "client/functions/ReverseVehicleHash.js",
    "client/functions/ReverseWeaponHash.js",
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
