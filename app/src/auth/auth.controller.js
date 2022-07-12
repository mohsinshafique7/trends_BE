import Boom from "boom"
import bcrypt from "bcrypt"
import UsersService from "../../services/users/users.service"
import TokenUtil from "../../utils/token.util"
export default class AuthController {
  static async Login(ctx, next) {
    const {
      request: {
        body: { password, userName },
      },
    } = ctx
    const data = { password, userName }

    if (!userName) throw Boom.notFound("User Name required")
    if (!password) throw Boom.notFound("Password not found")
    const user = await UsersService.getUserByUserName(data.userName)

    if (!user) throw Boom.notFound("User was not found")
    if (user.status === false) throw Boom.notFound("User is inactive")

    const result = await bcrypt.compare(password, user.password)
    if (!result) {
      throw Boom.notFound("Incorrect Password")
    }
    const token = TokenUtil.generateToken({
      userId: user.id,
      companyName: user.companyName,
    })
    const refreshToken = TokenUtil.generateRefreshToken({
      userId: user.id,
      companyName: user.companyName,
    })
    ctx.body = { token, refreshToken, user: user }
    await next()
  }
  static async GenrateRefreshToken(ctx, next) {
    const {
      request: {
        body: { refreshToken },
      },
    } = ctx

    if (!refreshToken) throw Boom.notFound("Refresh Token not found")
    const decode = TokenUtil.decode(refreshToken)

    if (decode) {
      const user = await UsersService.GetUserById(decode.userId)
      const newToken = TokenUtil.generateToken({
        userId: user.id,
        companyName: user.companyName,
      })
      const refToken = TokenUtil.generateRefreshToken({
        userId: user.id,
        companyName: user.companyName,
      })

      ctx.body = { token: newToken, refreshToken: refToken, user: user }
    } else {
      throw Boom.badRequest("Cannot Refresh Token")
    }
  }
}
