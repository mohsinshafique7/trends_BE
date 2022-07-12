import jwt from "jsonwebtoken"

export const TOKEN_CONFIG = {
  KEY: "P2y=uf.Keq!/+/RNW7Lu8v?#OOTB",
  expires: "4h",
  alg: "HS256",
}

export default class TokenUtil {
  static generateToken(data) {
    return jwt.sign(data, TOKEN_CONFIG.KEY, {
      expiresIn: "4h",
      algorithm: TOKEN_CONFIG.alg,
    })
  }
  static generateRefreshToken(data) {
    return jwt.sign(data, TOKEN_CONFIG.KEY, {
      algorithm: TOKEN_CONFIG.alg,
    })
  }

  static decode(payload) {
    try {
      return jwt.verify(payload, TOKEN_CONFIG.KEY)
    } catch (e) {
      return e
    }
  }
}
