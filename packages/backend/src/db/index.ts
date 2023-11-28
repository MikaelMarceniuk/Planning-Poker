import mongoose, { Mongoose } from "mongoose"
import { singleton } from "tsyringe"

@singleton()
class MongoConn {
  private instance: Mongoose

  public async getInstance() {
    if (!this.instance) {
      let dbSource: Mongoose

      try {
        console.log("Creating new instance")
        dbSource = await mongoose.connect(this.createConnString())
        console.log("Connected to MongoDb")
      } catch (e: any) {
        throw new Error("Could not connect to database: " + e.message)
      }

      this.instance = dbSource
    }

    return this.instance
  }

  public async loadConnection() {
    try {
      await mongoose.connect(this.createConnString())
      console.log("Connected to MongoDb")
    } catch (e: any) {
      throw new Error("Could not connect to database: " + e.message)
    }
  }

  private createConnString() {
    const host = process.env.MONGODB_HOST
    const port = Number(process.env.MONGODB_PORT)
    const database = process.env.MONGODB_DB

    return `mongodb://${host}:${port}/${database}`
  }
}

export default MongoConn
