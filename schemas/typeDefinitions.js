const { gql } = require('apollo-server');

const typeDefs = gql `
type Comment {
    postId: ID
    id: ID
    name: String
    email: String
    body: String
}
type Post {
    userId: ID
    id: ID
    title: String
    body: String
}
type Photo {
    albumId: ID
    id: ID
    title: String
    url: String
    thumbnailUrl: String
}
type Album {
    userId: ID
    id: ID
    title: String
}
type Todo {
    userId: ID
    id: ID
    title: String
    completed: Boolean
}
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
    users(limit: Int, page: Int): [User]
    user(id: ID!): User
    userPosts(id: ID!, limit: Int, page: Int): [Post]
    userAlbums(id: ID!, limit: Int, page: Int): [Album]
    userTodos(id: ID!, limit: Int, page: Int): [Todo]
    posts(limit: Int, page: Int): [Post]
    post(id: ID!): Post
    postComments(id: ID!, limit: Int, page: Int): [Comment]
    comments(limit: Int, page: Int): [Comment]
    comment(id: ID!): Comment
    albums(limit: Int, page: Int): [Album]
    album(id: ID!): Album
    albumPhotos(id: ID!, limit: Int, page: Int): [Photo]
    photos(limit: Int, page: Int): [Photo]
    photo(id: ID!): Photo
    todos(limit: Int, page: Int): [Todo]
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