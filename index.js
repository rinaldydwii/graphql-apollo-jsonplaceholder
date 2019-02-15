const {
    ApolloServer,
    gql
} = require('apollo-server');
const axios = require("axios");
const MAIN_API_URL = "https://json-server-jsonplaceholder.herokuapp.com";

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
    type Post {
        userId: ID
        id: ID
        title: String
        body: String
    }
    type Comment {
        postId: ID
        id: ID
        name: String
        email: String
        body: String
    }
    type Album {
        userId: ID
        id: ID
        title: String
    }
    type Photo {
        albumId: ID
        id: ID
        title: String
        url: String
        thumbnailUrl: String
    }
    type Todo {
        userId: ID
        id: ID
        title: String
        completed: Boolean
    }
    type Query {
        users: [User]
        posts: [Post]
        comments: [Comment]
        albums: [Album]
        photos: [Photo]
        todos: [Todo]
    }
`;

const resolvers = {
    Query: {
        users: () => {
            return axios(`${MAIN_API_URL}/users`).then(res => res.data)
        },
        posts: () => {
            return axios(`${MAIN_API_URL}/posts`).then(res => res.data)
        },
        comments: () => {
            return axios(`${MAIN_API_URL}/comments`).then(res => res.data)
        },
        albums: () => {
            return axios(`${MAIN_API_URL}/albums`).then(res => res.data)
        },
        photos: () => {
            return axios(`${MAIN_API_URL}/photos`).then(res => res.data)
        },
        todos: () => {
            return axios(`${MAIN_API_URL}/todos`).then(res => res.data)
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