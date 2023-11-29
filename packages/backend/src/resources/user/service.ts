import { injectable } from "tsyringe"
import User from "../../models/user"
import UserRepository from "../../repository/userRepository"

@injectable()
class UserService {
  constructor(private userRepo: UserRepository) {}

  async getUserByProviderId(providerId: string) {
    const [dbUser] = await this.userRepo.getUserByProviderId(providerId)
    return dbUser
  }

  async createUser(newUser: any) {
    let dbUser = await this.userRepo.getUserByProviderId(
      newUser.providerAccountId
    )
    if (dbUser.length > 0) return

    let newDbUser = new User({
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
    await this.userRepo.createUser(newDbUser)
  }
}

export default UserService
