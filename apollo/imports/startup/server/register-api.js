import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

// hi

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [ testSchema, ResolutionsSchema ];

const testResolver = {
  Query: {
    hi() {
      return 'Hello James Truitt';
    }
  }
};

const resolvers = merge(testResolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });