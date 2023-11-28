import path from "path"
import { singleton } from "tsyringe"
import { DataSource } from "typeorm"

@singleton()
class MongoConn {
  private instance: DataSource

  public async getInstance() {
    if (!this.instance) {
      const dbSource = new DataSource({
        type: "mongodb",
        host: process.env.MONGODB_HOST,
        port: Number(process.env.MONGODB_PORT),
        database: process.env.MONGODB_DB,
        entities: [path.resolve(__dirname, "..", "models", "*.js")],
      })

      try {
        await dbSource.initialize()
        console.log("Connected to MongoDb")
      } catch (e: any) {
        throw new Error("Could not connect to database: " + e.message)
      }

      this.instance = dbSource
    }

    return this.instance
  }
}

export default MongoConn
