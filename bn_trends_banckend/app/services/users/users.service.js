import db from "../../models"
export default class UsersService {
  static async getUserByUserName(userName) {
    return db.Users.findOne({ where: { userName: userName } })
  }
  static async createUser(data) {
    return db.Users.create(data)
  }
  static async getAllUsers() {
    return db.Users.findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    })
  }
  static async GetUserById(id) {
    return db.Users.findOne({
      where: { id: id },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    })
  }
  static async DeleteUser(id) {
    return db.Users.destroy({ where: { id: id } })
  }
}
