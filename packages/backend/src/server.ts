import express, { Express } from "express"

class Server {
  app: Express

  constructor() {
    this.app = express()
  }

  init() {
    this.app.get("/api", (req, res) => res.json({ msg: "Hello World!" }))

    this.app.listen(process.env.PORT, () =>
      console.log("Server is up and running!")
    )
  }
}

export default Server
