import Router from "koa-router"
import UsersController from "./users.controller"
import Auth from "../../middlewares/auth"
const router = new Router({ prefix: "/users" })
router.post("/create", Auth, UsersController.CreateUser)

router.get("/", Auth, UsersController.GetAllUsers)
router.get("/:id", Auth, UsersController.GetUserById)
router.delete("/:id", Auth, UsersController.GetUserById)

export default router.routes()
