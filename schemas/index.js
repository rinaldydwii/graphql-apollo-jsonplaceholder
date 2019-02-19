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
    userAlbums(id: ID!): [Post]
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
type Mutation {
    createUser(user: UserInput): User
}
`;

module.exports = typeDefs;