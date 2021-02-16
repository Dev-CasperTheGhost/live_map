local url = "https://dev-caspertheghost.github.io/version.html"
local current_version = nil

local rawData = LoadResourceFile(GetCurrentResourceName(), "package.json")

rawData = json.decode(rawData)
current_version = rawData["version"]

function checkForUpdate()
    PerformHttpRequest(url, function(err, data, headers)
        local parsed = json.decode(data)

        if (parsed["live_map"] ~= current_version) then
            print("LIVE_MAP: Please updated your live_map addon!")
        end

    end, "GET", "", {
        ["Content-Type"] = "text/html"
    })
end

checkForUpdate()
