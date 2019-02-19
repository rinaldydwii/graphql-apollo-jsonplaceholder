const { ApolloServer, gql } = require('apollo-server');
const UsersAPI = require("./sources/user")
const PostsAPI = require("./sources/post")
const CommentsAPI = require("./sources/comment")
const AlbumsAPI = require("./sources/album")
const PhotosAPI = require("./sources/photo")
const TodosAPI = require("./sources/todo")

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
        userPosts(id: ID): [Post]
        userAlbums(id: ID): [Post]
        userTodos(id: ID): [Todo]
        posts: [Post]
        post(id: ID): Post
        postComments(id: ID): [Comment]
        comments: [Comment]
        comment(id: ID): Comment
        albums: [Album]
        album(id: ID): Album
        albumPhotos(id: ID): [Photo]
        photos: [Photo]
        photo(id: ID): Photo
        todos: [Todo]
        todo(id: ID): Todo
    }
`;

const resolvers = {
    Query: {
        users: async (_source, _args, {dataSources}) => {
            return dataSources.usersAPI.getUsers();
        },
        user: async (_source, {id}, {dataSources}) => {
            return dataSources.usersAPI.getUser(id);
        },
        userPosts: async (_source, {id}, {dataSources}) => {
            return dataSources.usersAPI.getUserPosts(id);
        },
        userAlbums: async (_source, {id}, {dataSources}) => {
            return dataSources.usersAPI.getUserAlbums(id);
        },
        userTodos: async (_source, {id}, {dataSources}) => {
            return dataSources.usersAPI.getUserTodos(id);
        },
        posts: async (_source, _args, {dataSources}) => {
            return dataSources.postsAPI.getPosts();
        },
        post: async (_source, {id}, {dataSources}) => {
            return dataSources.postsAPI.getPost(id);
        },
        postComments: async (_source, {id}, {dataSources}) => {
            return dataSources.postsAPI.getPostComments(id);
        },
        comments: async (_source, _args, {dataSources}) => {
            return dataSources.commentsAPI.getComments();
        },
        comment: async (_source, {id}, {dataSources}) => {
            return dataSources.commentsAPI.getComment(id);
        },
        albums:  async (_source, _args, {dataSources}) => {
            return dataSources.albumsAPI.getAlbums();
        },
        album: async (_source, {id}, {dataSources}) => {
            return dataSources.albumsAPI.getAlbum(id);
        },
        albumPhotos: async (_source, {id}, {dataSources}) => {
            return dataSources.albumsAPI.getAlbumPhotos(id);
        },
        photos: async (_source, _args, {dataSources}) => {
            return dataSources.photosAPI.getPhotos();
        },
        photo: async (_source, {id}, {dataSources}) => {
            return dataSources.photosAPI.getPhoto(id);
        },
        todos: async (_source, _args, {dataSources}) => {
            return dataSources.todosAPI.getTodos();
        },
        todo: async (_source, {id}, {dataSources}) => {
            return dataSources.todosAPI.getTodo(id);
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersAPI: new UsersAPI(),
            postsAPI: new PostsAPI(),
            commentsAPI: new CommentsAPI(),
            albumsAPI: new AlbumsAPI(),
            photosAPI: new PhotosAPI(),
            todosAPI: new TodosAPI()
        }
    }
});

server.listen().then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});