import mongoose from "mongoose"
import Joi from "joi"
import { UserInputError } from "apollo-server-express"
import { User } from "../models"
import { SignUp } from "../schemas"

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
    signUp: async (parent, args, context, info) => {
      await Joi.validate(args, SignUp, { abortEarly: false })

      return User.create(args)
    }
  }
}
