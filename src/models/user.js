import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    email: String,
    suername: String,
    name: String,
    createAt: String,
    password: String
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)
