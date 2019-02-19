const { gql } = require('apollo-server');

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
    user(id: ID!): User
    userPosts(id: ID!): [Post]
    userAlbums(id: ID!): [Album]
    userTodos(id: ID!): [Todo]
    posts: [Post]
    post(id: ID!): Post
    postComments(id: ID!): [Comment]
    comments: [Comment]
    comment(id: ID!): Comment
    albums: [Album]
    album(id: ID!): Album
    albumPhotos(id: ID!): [Photo]
    photos: [Photo]
    photo(id: ID!): Photo
    todos: [Todo]
    todo(id: ID!): Todo
}

input GeoInput {
    lat: String
    lng: String
}
input AddressInput {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: GeoInput
}
input CompanyInput {
    name: String
    catchPhrase: String
    bs: String
}
input UserInput {
    name: String
    username: String
    email: String
    phone: String
    website: String
    address: AddressInput
    company: CompanyInput
}
input PostInput {
    userId: ID
    title: String
    body: String
}
input CommentInput {
    postId: ID
    name: String
    email: String
    body: String
}
input AlbumInput {
    userId: ID
    title: String
}
input PhotoInput {
    albumId: ID
    title: String
    url: String
    thumbnailUrl: String
}
input TodoInput {
    userId: ID
    title: String
    completed: Boolean
}
type Mutation {
    createUser(user: UserInput!): User
    updateUser(id: ID!, user: UserInput!): User
    deleteUser(id: ID): User 
    createPost(post: PostInput!): Post
    updatePost(id: ID!, post: PostInput!): Post
    deletePost(id: ID): Post 
    createComment(comment: CommentInput!): Comment
    updateComment(id: ID!, comment: CommentInput!): Comment
    deleteComment(id: ID): Comment 
    createAlbum(album: AlbumInput!): Album
    updateAlbum(id: ID!, album: AlbumInput!): Album
    deleteAlbum(id: ID): Album 
    createPhoto(photo: PhotoInput!): Photo
    updatePhoto(id: ID!, photo: PhotoInput!): Photo
    deletePhoto(id: ID): Photo 
    createTodo(todo: TodoInput!): Todo
    updateTodo(id: ID!, todo: TodoInput!): Todo
    deleteTodo(id: ID): Todo 
}
`;

module.exports = typeDefs;