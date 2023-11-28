import { Controller, Get, Post } from "@overnightjs/core"
import { Request, Response } from "express"
import { injectable } from "tsyringe"
import UserService from "./service"

@Controller("api/user")
@injectable()
class UserController {
  constructor(private userService: UserService) {}

  @Post()
  private async create(req: Request, res: Response) {
    await this.userService.createUser(req.body)

    res.statusCode = 201
    res.send()
  }
}

export default UserController
