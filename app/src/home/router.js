import Router from "koa-router"
const router = new Router({ prefix: "/" })
router.get("/", (ctx, next) => {
  ctx.body = { message: "Well Come" }
})

export default router.routes()
