const { ApolloServer } = require('apollo-server');

const typeDefs = require("./schemas")
const resolvers = require("./resolvers")

const UsersAPI = require("./sources/user")
const PostsAPI = require("./sources/post")
const CommentsAPI = require("./sources/comment")
const AlbumsAPI = require("./sources/album")
const PhotosAPI = require("./sources/photo")
const TodosAPI = require("./sources/todo")

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