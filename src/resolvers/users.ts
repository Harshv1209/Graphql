import { Resolvers } from "../generated/graphql"
const resolvers: Resolvers = {
  Query: {
    user: async () => {
      return {
        name: "John Doe",
        email: "john@example.com",
        age: 18,
      }
    },
  },
}
export default resolvers
