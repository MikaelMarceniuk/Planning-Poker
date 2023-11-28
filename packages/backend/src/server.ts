import express from "express"
import { Server as OvernightServer } from "@overnightjs/core"
import { DataSource } from "typeorm"
import UserController from "./resources/user/controller"
import { container } from "tsyringe"
import MongoConn from "./db"
import UserRepository from "./repository/userRepository"

class Server extends OvernightServer {
  constructor() {
    super(true)
  }

  async init() {
    await this.loadDatabase()
    await this.loadMiddlewares()
    await this.loadControllers()
    await this.loadRepositories()

    this.app.get("/api", (req, res) => res.json({ msg: "Hello World!" }))

    this.app.listen(process.env.PORT, () =>
      console.log("Server is up and running!")
    )
  }

  private async loadDatabase() {
    container.resolve(MongoConn)
  }

  private loadMiddlewares() {
    this.app.use(express.json())
  }

  private loadControllers() {
    const userController = container.resolve(UserController)

    super.addControllers([userController])
  }

  private loadRepositories() {
    container.resolve(UserRepository)
  }
}

export default Server
