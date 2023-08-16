import { Resolvers } from "../generated/graphql"
const resolvers: Resolvers = {
  Query: {
    getUser: async (_, { userId }) => {
      return {
        __typename: "PublicUser",
        fullname: "John Doe",
        email: "john@example.com",
        id: userId,
      }
    },
  },
}
export default resolvers
