import express, { Express } from "express"
import { DataSource } from "typeorm"

class Server {
  app: Express

  constructor() {
    this.app = express()
  }

  async init() {
    await this.loadDatabase()

    this.app.get("/api", (req, res) => res.json({ msg: "Hello World!" }))

    this.app.listen(process.env.PORT, () =>
      console.log("Server is up and running!")
    )
  }

  private async loadDatabase() {
    const MongoDbSource = new DataSource({
      type: "mongodb",
      host: process.env.MONGODB_HOST,
      port: Number(process.env.MONGODB_PORT),
      database: process.env.MONGODB_DB,
    })

    try {
      await MongoDbSource.initialize()
      console.log("Connected to MongoDb")
    } catch (e) {
      throw new Error("Could not connect to database")
    }
  }
}

export default Server
