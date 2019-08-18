import { ApolloServer } from "apollo-server-express"
import express from "express"
import mongoose from "mongoose"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"
import {
  APP_PORT,
  IN_PROD,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} from "./config"

mongoose
  .connect(
    `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Mongodb connected")
  })

const app = express()

app.disable("x-powered-by")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !IN_PROD
})

server.applyMiddleware({ app })

app.listen({ port: APP_PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`
  )
)
