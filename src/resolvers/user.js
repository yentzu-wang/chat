import mongoose from "mongoose"
import { UserInputError } from "apollo-server-express"
import { User } from "../models"

export default {
  Query: {
    users: (parent, args, context, info) => {
      return User.find({})
    },
    user: (parent, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }

      return User.findById(id)
    }
  },
  Mutation: {
    signUp: (parent, args, context, info) => {
      return User.create(args)
    }
  }
}
