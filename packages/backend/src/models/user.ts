import mongoose from "mongoose"
import ProviderSchema from "./provider"

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  image: String,
  providersId: [String],
  providers: [ProviderSchema],
})

const User = mongoose.model("User", userSchema)

export default User
