import mongoose from "mongoose"

const ProviderSchema = new mongoose.Schema({
  providerAccountId: String,
  provider: String,
})

export default ProviderSchema
