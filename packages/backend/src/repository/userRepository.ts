import { singleton } from "tsyringe"
import MongoConn from "../db"
import User from "../models/user"

@singleton()
class UserRepository {
  constructor(private mongoConn: MongoConn) {}

  async createUser(newUser: User) {
    const mongoInstance = await this.mongoConn.getInstance()
    return await mongoInstance.getRepository(User).save(newUser)
  }
}

export default UserRepository
