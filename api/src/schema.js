const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Shoe {
    brand: String!
    size: Int!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String
  }

  input PetInput {
    name: String
    type: String
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(id: ID!): Pet
  }
`;

module.exports = typeDefs
