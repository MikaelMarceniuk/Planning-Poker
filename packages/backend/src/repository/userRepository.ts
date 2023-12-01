import { singleton } from "tsyringe"
import User from "../models/user"

@singleton()
class UserRepository {
  async getUserByProviderId(providerId: string) {
    return await User.find({ providersId: [providerId] })
  }

  async createUser(newUser: typeof User) {
    await User.create(newUser)
  }
}

export default UserRepository
