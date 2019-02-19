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