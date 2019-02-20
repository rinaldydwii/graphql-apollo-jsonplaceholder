const resolvers = {
    Query: {
        users: async (_source, {limit, page}, {dataSources}) => {
            return dataSources.usersAPI.getUsers(limit, page);
        },
        user: async (_source, {id}, {dataSources}) => {
            return dataSources.usersAPI.getUser(id);
        },
        userPosts: async (_source, {id, limit, page}, {dataSources}) => {
            return dataSources.usersAPI.getUserPosts(id, limit, page);
        },
        userAlbums: async (_source, {id, limit, page}, {dataSources}) => {
            return dataSources.usersAPI.getUserAlbums(id, limit, page);
        },
        userTodos: async (_source, {id, limit, page}, {dataSources}) => {
            return dataSources.usersAPI.getUserTodos(id, limit, page);
        },
        posts: async (_source, {limit, page}, {dataSources}) => {
            return dataSources.postsAPI.getPosts(limit, page);
        },
        post: async (_source, {id}, {dataSources}) => {
            return dataSources.postsAPI.getPost(id);
        },
        postComments: async (_source, {id, limit, page}, {dataSources}) => {
            return dataSources.postsAPI.getPostComments(id, limit, page);
        },
        comments: async (_source, {limit, page}, {dataSources}) => {
            return dataSources.commentsAPI.getComments(limit, page);
        },
        comment: async (_source, {id}, {dataSources}) => {
            return dataSources.commentsAPI.getComment(id);
        },
        albums:  async (_source, {limit, page}, {dataSources}) => {
            return dataSources.albumsAPI.getAlbums(limit, page);
        },
        album: async (_source, {id}, {dataSources}) => {
            return dataSources.albumsAPI.getAlbum(id);
        },
        albumPhotos: async (_source, {id, limit, page}, {dataSources}) => {
            return dataSources.albumsAPI.getAlbumPhotos(id, limit, page);
        },
        photos: async (_source, {limit, page}, {dataSources}) => {
            return dataSources.photosAPI.getPhotos(limit, page);
        },
        photo: async (_source, {id}, {dataSources}) => {
            return dataSources.photosAPI.getPhoto(id);
        },
        todos: async (_source, {limit, page}, {dataSources}) => {
            return dataSources.todosAPI.getTodos(limit, page);
        },
        todo: async (_source, {id}, {dataSources}) => {
            return dataSources.todosAPI.getTodo(id);
        },
    },
    User: {
        posts: ({id}, _, {dataSources}) => {
            return dataSources.usersAPI.getUserPosts(id, 8);
        },
        albums: ({id}, _, {dataSources}) => {
            return dataSources.usersAPI.getUserAlbums(id, 8);
        },
        todos: ({id}, _, {dataSources}) => {
            return dataSources.usersAPI.getUserTodos(id, 8);
        }
    },
    Post: {
        comments: ({id}, _, {dataSources}) => {
            return dataSources.postsAPI.getPostComments(id, 8);
        }
    },
    Album: {
        photos: ({id}, _, {dataSources}) => {
            return dataSources.albumsAPI.getAlbumPhotos(id, 8);
        }
    },
    Mutation: {
        createUser: async (_, {user}, {dataSources}) => {
            return dataSources.usersAPI.createUser(user);
        },
        updateUser: async (_, {id, user}, {dataSources}) => {
            return dataSources.usersAPI.updateUser(id, user);
        },
        deleteUser: async (_, {id}, {dataSources}) => {
            return dataSources.usersAPI.deleteUser(id);
        },
        createPost: async (_, {post}, {dataSources}) => {
            return dataSources.postsAPI.createPost(post);
        },
        updatePost: async (_, {id, post}, {dataSources}) => {
            return dataSources.postsAPI.updatePost(id, post);
        },
        deletePost: async (_, {id}, {dataSources}) => {
            return dataSources.postsAPI.deletePost(id);
        },
        createComment: async (_, {comment}, {dataSources}) => {
            return dataSources.commentsAPI.createComment(comment);
        },
        updateComment: async (_, {id, comment}, {dataSources}) => {
            return dataSources.commentsAPI.updateComment(id, comment);
        },
        deleteComment: async (_, {id}, {dataSources}) => {
            return dataSources.commentsAPI.deleteComment(id);
        },
        createAlbum: async (_, {album}, {dataSources}) => {
            return dataSources.albumsAPI.createAlbum(album);
        },
        updateAlbum: async (_, {id, album}, {dataSources}) => {
            return dataSources.albumsAPI.updateAlbum(id, album);
        },
        deleteAlbum: async (_, {id}, {dataSources}) => {
            return dataSources.albumsAPI.deleteAlbum(id);
        },
        createPhoto: async (_, {photo}, {dataSources}) => {
            return dataSources.photosAPI.createPhoto(photo);
        },
        updatePhoto: async (_, {id, photo}, {dataSources}) => {
            return dataSources.photosAPI.updatePhoto(id, photo);
        },
        deletePhoto: async (_, {id}, {dataSources}) => {
            return dataSources.photosAPI.deletePhoto(id);
        },
        createTodo: async (_, {todo}, {dataSources}) => {
            return dataSources.todosAPI.createTodo(todo);
        },
        updateTodo: async (_, {id, todo}, {dataSources}) => {
            return dataSources.todosAPI.updateTodo(id, todo);
        },
        deleteTodo: async (_, {id}, {dataSources}) => {
            return dataSources.todosAPI.deleteTodo(id);
        }
    }
};

module.exports = resolvers;