const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, USER_ROUTE, POST_ROUTE, ALBUM_ROUTE, TODO_ROUTE} = require('../config/api')

class UsersAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getUsers() {
        return this.get(USER_ROUTE, {
            _limit: 20
        })
    }
    async getUser(id) {
        return this.get(`${USER_ROUTE}/${id}`)
    }
    async getUserPosts(id) {
        return this.get(`${USER_ROUTE}/${id}/${POST_ROUTE}`, {
            _limit: 20
        })
    }
    async getUserAlbums(id) {
        return this.get(`${USER_ROUTE}/${id}/${ALBUM_ROUTE}`, {
            _limit: 20
        })
    }
    async getUserTodos(id) {
        return this.get(`${USER_ROUTE}/${id}/${TODO_ROUTE}`, {
            _limit: 20
        })
    }
    async createUser(user) {
        return this.post(USER_ROUTE, user)
    }
    async updateUser(id, user) {
        return this.put(`${USER_ROUTE}/${id}`, user)
    }
    async deleteUser(id, user) {
        return this.delete(`${USER_ROUTE}/${id}`, user)
    }
}

module.exports = UsersAPI