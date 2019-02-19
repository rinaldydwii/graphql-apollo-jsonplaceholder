const {
    ApolloServer,
    gql
} = require('apollo-server');
const axios = require("axios");
const UsersAPI = require("./sources/user")

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
        user(id: ID): User
        posts: [Post]
        postsByUserId(userId: ID): [Post]
        post(id: ID): Post
        comments: [Comment]
        commentsByPostId(postId: ID): [Comment]
        comment(id: ID): Comment
        albums: [Album]
        albumsByUserId(userId: ID): [Album]
        album(id: ID): Album
        photos: [Photo]
        photosByAlbumId(albumId: ID): [Photo]
        photo(id: ID): Photo
        todos: [Todo]
        todosByUserId(userId: ID): [Todo]
        todo(id: ID): Todo
    }
`;

const resolvers = {
    Query: {
        users: async (_source, _args, {dataSources}) => {
            return dataSources.usersAPI.getUsers();
        },
        user: (_source, {id}, {dataSources}) => {
            return dataSources.usersAPI.getUser(id);
        },
        // posts: () => {
        //     return axios.get(`${MAIN_API_URL}${POST_ROUTE}`).then(res => res.data)
        // },
        // postsByUserId: (_, {userId}) => {
        //     return axios.get(`${MAIN_API_URL}${USER_ROUTE}/${userId}/${POST_ROUTE}`).then(res => res.data)
        // },
        // post: (_, {id}) => {
        //     return axios.get(`${MAIN_API_URL}${POST_ROUTE}/${id}`).then(res => res.data)
        // },
        // comments: () => {
        //     return axios.get(`${MAIN_API_URL}${COMMENT_ROUTE}`).then(res => res.data)
        // },
        // commentsByPostId: (_, {postId}) => {
        //     return axios.get(`${MAIN_API_URL}${POST_ROUTE}/${postId}/${COMMENT_ROUTE}`).then(res => res.data)
        // },
        // comment: (_, {id}) => {
        //     return axios.get(`${MAIN_API_URL}${COMMENT_ROUTE}/${id}`).then(res => res.data)
        // },
        // albums: () => {
        //     return axios.get(`${MAIN_API_URL}${ALBUM_ROUTE}`).then(res => res.data)
        // },
        // albumsByUserId: (_, {userId}) => {
        //     return axios.get(`${MAIN_API_URL}${USER_ROUTE}/${userId}/${ALBUM_ROUTE}`).then(res => res.data)
        // },
        // album: (_, {id}) => {
        //     return axios.get(`${MAIN_API_URL}${ALBUM_ROUTE}/${id}`).then(res => res.data)
        // },
        // photos: () => {
        //     return axios.get(`${MAIN_API_URL}${PHOTO_ROUTE}`).then(res => res.data)
        // },
        // photosByAlbumId: (_, {albumId}) => {
        //     return axios.get(`${MAIN_API_URL}${ALBUM_ROUTE}/${albumId}/${PHOTO_ROUTE}`).then(res => res.data)
        // },
        // photo: (_, {id}) => {
        //     return axios.get(`${MAIN_API_URL}${PHOTO_ROUTE}/${id}`).then(res => res.data)
        // },
        // todos: () => {
        //     return axios.get(`${MAIN_API_URL}${TODO_ROUTE}`).then(res => res.data)
        // },
        // todosByUserId: (_, {userId}) => {
        //     return axios.get(`${MAIN_API_URL}${USER_ROUTE}/${userId}/${TODO_ROUTE}`).then(res => res.data)
        // },
        // todo: (_, {id}) => {
        //     return axios.get(`${MAIN_API_URL}${TODO_ROUTE}/${id}`).then(res => res.data)
        // },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        }
    }
});

server.listen().then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});