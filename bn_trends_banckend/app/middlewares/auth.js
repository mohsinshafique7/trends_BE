import TokenUtil from "../utils/token.util"
import UserService from "../services/users/users.service"
import {
  TOKEN_NOT_VALID,
  TOKEN_NOT_PROVIDED,
  PERMISSION_DENIED,
} from "../utils/custom.errors"

export default async function Auth(ctx, next) {
  const token = ctx.headers.authorization

  if (!token) {
    ctx.status = 401
    ctx.body = TOKEN_NOT_PROVIDED
    return ctx
  }

  const decoded = TokenUtil.decode(token)

  if (!decoded) {
    console.log("Not Decoded")
  }
  if (!decoded.userId) {
    ctx.status = 401
    ctx.body = TOKEN_NOT_VALID
    return ctx
  }

  const user = await UserService.GetUserById(decoded.userId)
  if (!user) {
    ctx.status = 403
    ctx.body = TOKEN_NOT_VALID
    return ctx
  }
  if (user.status === "inactive") {
    ctx.status = 403
    ctx.body = PERMISSION_DENIED
    return ctx
  }
  ctx.state.user = user
  await next()
}
