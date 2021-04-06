const webpack = require("webpack");
const path = require("path");

function getEntry(isServer) {
  return isServer ? "./src/server.js" : "./client/client.js";
}

function getFilename(isServer) {
  return isServer ? "server.js" : "client.js";
}

function getOutputPath(isServer) {
  return isServer
    ? path.resolve(__dirname, "live_map", "server")
    : path.resolve(__dirname, "live_map", "client");
}

function getPlugins(isServer) {
  return isServer ? [new webpack.DefinePlugin({ "global.GENTLY": false })] : [];
}

const config = (isServer) => ({
  entry: getEntry(isServer),
  output: {
    filename: getFilename(isServer),
    path: getOutputPath(isServer),
  },
  resolve: {
    extensions: [".js"],
    alias: {
      LivemapSocketController: path.resolve(__dirname, "src", "sockets.js"),
      LivemapEventsWrapper: path.resolve(__dirname, "src", "wrapper.js"),
    },
  },
  optimization: {
    minimize: false,
  },
  target: isServer ? "node" : undefined,
  plugins: [
    new webpack.ContextReplacementPlugin(/any-promise|node-fetch/),
    ...getPlugins(isServer),
  ],
  mode: "production",
});

module.exports = [config(true), config(false)];
