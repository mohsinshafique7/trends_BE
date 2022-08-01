// const Router = require("koa-router")
import Router from "koa-router"
import GoogleTrendsController from "./googleTrends.controller"
import Auth from "../../middlewares/auth"
const router = new Router({ prefix: "/gtrends" })
router.post("/byregion", Auth, GoogleTrendsController.GetIntrestByRegion)

export default router.routes()
