const {
    ApolloServer,
    gql
} = require('apollo-server');
const axios = require("axios");

const MAIN_API_URL = "https://json-server-jsonplaceholder.herokuapp.com"

const typeDefs = gql `
    type Geo {
        lat: String
        lng: String
    }
    type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
    }
    type Company {
        name: String
        catchPhrase: String
        bs: String
    }
    type User {
        id: ID
        name: String
        username: String
        email: String
        phone: String
        website: String
        address: Address
        company: Company
    }
    type Query {
        users: [User]
    }
`;

const resolvers = {
    Query: {
        users: () => {
            return axios(`${MAIN_API_URL}/users`).then(res => res.data)
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});