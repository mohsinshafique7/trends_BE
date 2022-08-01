import Router from "koa-router"
import AuthController from "./auth.controller"
const router = new Router({ prefix: "/auth" })
router.post("/login", AuthController.Login)
router.post("/refresh-token", AuthController.GenrateRefreshToken)
export default router.routes()
