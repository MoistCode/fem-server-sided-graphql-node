/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, context, ) {
      return context.models.Pet.findMany();
    },
    shoes(_, { input }) {
      return [{brand: 'nike', size: 12}, {brand: 'adidas', size: 14}].filter(shoe => input.brand === shoe.brand);
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
