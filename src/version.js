/// <reference path="../node_modules/@citizenfx/server/natives_server.d.ts" />
const axios = require("axios").default;

async function checkForUpdate() {
  await axios({
    url: "https://dev-caspertheghost.github.io/version.html",
    method: "GET",
    headers: {
      "Content-Type": "text/html",
    },
  })
    .then((json) => {
      const actualVersion = json.data.live_map;
      const pkg = LoadResourceFile(GetCurrentResourceName(), "version.json");

      const v = JSON.parse(pkg);
      if (actualVersion !== v.version) {
        console.warn("LIVE_MAP: Please update your live_map addon");
      } else {
        console.info("LIVE_MAP: live_map is up to date!");
      }
    })
    .catch(console.error);
}

// Check for an update
checkForUpdate();

// check every 24 hours
setInterval(() => checkForUpdate(), 24 * 1000 * 60 * 60);
