/// <reference path="../node_modules/@citizenfx/server/natives_server.d.ts" />
const fetch = require("node-fetch");

const url = "https://dev-caspertheghost.github.io/version.html";
let currentVersion = null;
let actualVersion = null;

async function checkForUpdate() {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/html",
      },
    });
    const json = await res.json();

    actualVersion = json["live_map"];

    if (actualVersion !== currentVersion) {
      console.info("LIVE_MAP: Please update your live_map addon");
    } else {
      console.info("LIVE_MAP: live_map is up to date!");
    }
  } catch (e) {
    console.error(e);
  }
}

function readPackage() {
  try {
    const pkg = LoadResourceFile(GetCurrentResourceName(), "package.json");

    currentVersion = JSON.parse(pkg)["version"];
  } catch (e) {
    console.error(JSON.stringify(e));
  }
}

// Get the version from "package.json"
readPackage();

// Check for an updated
checkForUpdate();
