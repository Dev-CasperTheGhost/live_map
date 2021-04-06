const Koa = require("koa");
const koaBody = require("koa-body");
const Router = require("koa-router");
const WS = require("ws");
const http = require("http");

const app = new Koa();
const server = http.createServer(app.callback());
const router = new Router();
const wss = new WS.Server({ server });

const access = GetConvar("livemap_access_control", "*");

router.use(async (ctx, next) => {
  ctx.response.append("Access-Control-Allow-Origin", access);
  next();
});

const SocketController = require("LivemapSocketController")(access);
SocketController.hook(wss);

// TODO: fix this.
// require("./version");
require("LivemapEventsWrapper")(SocketController);

app
  .use(
    koaBody({
      patchKoa: true,
    })
  )
  .use(router.routes())
  .use(router.allowedMethods());

const port = GetConvarInt("socket_port", 30121);

server.listen(port, function listening() {
  console.log(`LIVE_MAP: Live map has started on port: ${port}`);
});

setInterval(SocketController.SendPlayerData, GetConvarInt("livemap_milliseconds", 500)); // Default = half a second.
