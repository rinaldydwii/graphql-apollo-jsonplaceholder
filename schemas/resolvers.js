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