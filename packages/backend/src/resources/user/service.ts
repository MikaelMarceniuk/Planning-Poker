import { injectable } from "tsyringe"
import User from "../../models/user"
import UserRepository from "../../repository/userRepository"

@injectable()
class UserService {
  constructor(private userRepo: UserRepository) {}

  async getUserByProviderId(providerId: string) {
    return await this.userRepo.getUserByProviderId(providerId)
  }

  async createUser(newUser: any) {
    const dbUser = new User({
      username: newUser.username,
      email: newUser.email,
      image: newUser.image,
      providersId: [newUser.providerAccountId],
      providers: [
        {
          provider: newUser.provider,
          providerAccountId: newUser.providerAccountId,
        },
      ],
    })

    // @ts-ignore
    await this.userRepo.createUser(dbUser)
  }
}

export default UserService
