import fs from "fs"
import _debugger from "debug"
import Koa from "koa"
import cors from "koa-cors"
import koaBody from "koa-body"
import logger from "koa-logger"
import convert from "koa-convert"
import cron from "cron"
import KoaStatic from "koa-static"
import { SERVER } from "./config/app.config"
import router from "./src/router"
import db from "./models"
import json from "koa-json"
// const CatchErrors = require("./middlewares/catch-errors.js")
import "core-js/stable"
import "regenerator-runtime/runtime"
const error = _debugger("koa2-starter:error")
const debug = _debugger("koa2-starter:debug")
const app = new Koa()

// const static_pages = new Koa()
// console.log("Dir", __dirname + "/buildFrontEnd/build")
// static_pages.use(serve(__dirname + "/buildFrontEnd/build")) //serve the build directory
// app.use(mount("/", static_pages))

db.sequelize.authenticate().then(() => {
  app
    .use(router.routes())
    .use(json())

    .use(KoaStatic(`${__dirname}/../public`))
    .use(convert(cors({ origin: true })))
    .use(logger())
    .use(async (ctx, next) => {
      try {
        await next()
      } catch (e) {
        let payload = e
        if (e.isBoom) {
          payload = e.output.payload
          payload.data = e.data
        }

        ctx.status = payload.statusCode || payload.status || 500
        ctx.body = payload
      }
    })
    .use(convert(koaBody({ jsonLimit: "30mb", multipart: true })))
    // .use(mount("/", static_pages))
    .listen(SERVER.port)

  fs.readdirSync(`${__dirname}/src`).forEach((mod) => {
    try {
      app.use(require(`${__dirname}/src/${mod}/router.js`).default) // eslint-disable-line
      debug(`loaded: '${mod}' module.`)
    } catch (e) {
      error(`Error, while loading ${mod}`, e)
    }
  })
})

// db.sequelize.sync().then(() => {
//   console.log("Drop and re-sync db.")
// })
