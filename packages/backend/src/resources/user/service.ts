import { injectable } from "tsyringe"
import User from "../../models/user"
import UserRepository from "../../repository/userRepository"

@injectable()
class UserService {
  constructor(private userRepo: UserRepository) {}

  async createUser(newUser: any) {
    const dbUser: User = {
      username: newUser.username,
      email: newUser.email,
      image: newUser.image,
      providers: [
        {
          provider: newUser.provider,
          providerAccountId: newUser.providerAccountId,
        },
      ],
    }

    await this.userRepo.createUser(dbUser)
  }
}

export default UserService
