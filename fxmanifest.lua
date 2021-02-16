fx_version "bodacious"
game "gta5"

dependency 'yarn'
dependency 'webpack'

webpack_config 'webpack.config.js'

client_scripts {
    "client/client.lua",
    "client/reverse_weapon_hashes.lua",
    "client/reverse_car_hashes.lua",
    "client/reverse_location_hashes.lua",
}

exports {
    "reverseWeaponHash",
    "reverseVehicleHash",
    "reverseStreetHash",
    "reverseZoneHash",
    "reverseAreaHash"
}

server_scripts {
    "dist/livemap.js",
    "server/version_check.lua"
}
