import Boom from "boom"
import bcrypt from "bcrypt"
import UsersService from "../../services/users/users.service"
export default class UsersController {
  static async CreateUser(ctx, next) {
    console.log(ctx.request.body)
    const {
      request: {
        body: { name, userName, companyName, password, status, isAdmin },
      },
    } = ctx
    if (!name) throw Boom.notFound(" Name required")
    if (!userName) throw Boom.notFound("User Name required")
    if (!companyName) throw Boom.notFound("Company Name required")
    if (!password) throw Boom.notFound("Password required")
    if (!status) throw Boom.notFound("Status required")
    if (!isAdmin) throw Boom.notFound("isAdmin required")

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    const data = {
      name,
      userName,
      companyName,
      password: hashedPassword,
      status,
      isAdmin,
    }
    const user = await UsersService.createUser(data)
    ctx.body = {
      name: user.name,
      userName: user.userName,
      companyName: user.companyName,
      status: user.status,
      isAdmin: user.isAdmin,
    }
    await next()
  }
  static async GetAllUsers(ctx, next) {
    const users = await UsersService.getAllUsers()
    ctx.body = {
      users,
    }
    await next()
  }
  static async GetUserById(ctx, next) {
    const { id } = ctx.params
    const user = await UsersService.GetUserById(id)
    ctx.body = {
      user,
    }
    await next()
  }
  static async DeleteUser(ctx, next) {
    const { id } = ctx.params
    const user = await UsersService.DeleteUser(id)
    ctx.body = {
      user,
    }
    await next()
  }
}
