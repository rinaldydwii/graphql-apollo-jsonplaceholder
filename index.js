const {
    ApolloServer,
    gql
} = require('apollo-server');
const axios = require("axios");
const MAIN_API_URL = "https://json-server-jsonplaceholder.herokuapp.com/";
const USER_ROUTE = "users";
const POST_ROUTE = "posts";
const COMMENT_ROUTE = "comments";
const ALBUM_ROUTE = "albums";
const PHOTO_ROUTE = "photos";
const TODO_ROUTE = "todos";

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
        postsByUserId(userId: ID): [Post]
        comments: [Comment]
        commentsByPostId(postId: ID): [Comment]
        albums: [Album]
        albumsByUserId(userId: ID): [Album]
        photos: [Photo]
        photosByAlbumId(albumId: ID): [Photo]
        todos: [Todo]
        todosByUserId(userId: ID): [Todo]
    }
`;

const resolvers = {
    Query: {
        users: () => {
            return axios(`${MAIN_API_URL}${USER_ROUTE}`).then(res => res.data)
        },
        posts: () => {
            return axios(`${MAIN_API_URL}${POST_ROUTE}`).then(res => res.data)
        },
        postsByUserId: (_, {userId}) => {
            return axios(`${MAIN_API_URL}${USER_ROUTE}/${userId}/${POST_ROUTE}`).then(res => res.data)
        },
        comments: () => {
            return axios(`${MAIN_API_URL}${COMMENT_ROUTE}`).then(res => res.data)
        },
        commentsByPostId: (_, {postId}) => {
            return axios(`${MAIN_API_URL}${POST_ROUTE}/${postId}/${COMMENT_ROUTE}`).then(res => res.data)
        },
        albums: () => {
            return axios(`${MAIN_API_URL}${ALBUM_ROUTE}`).then(res => res.data)
        },
        albumsByUserId: (_, {userId}) => {
            return axios(`${MAIN_API_URL}${USER_ROUTE}/${userId}/${ALBUM_ROUTE}`).then(res => res.data)
        },
        photos: () => {
            return axios(`${MAIN_API_URL}${PHOTO_ROUTE}`).then(res => res.data)
        },
        photosByAlbumId: (_, {albumId}) => {
            return axios(`${MAIN_API_URL}${ALBUM_ROUTE}/${albumId}/${PHOTO_ROUTE}`).then(res => res.data)
        },
        todos: () => {
            return axios(`${MAIN_API_URL}${TODO_ROUTE}`).then(res => res.data)
        },
        todosByUserId: (_, {userId}) => {
            return axios(`${MAIN_API_URL}${USER_ROUTE}/${userId}/${TODO_ROUTE}`).then(res => res.data)
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