const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, USER_ROUTE, POST_ROUTE, ALBUM_ROUTE, TODO_ROUTE} = require('../config/api')

class UsersAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getUsers(limit, page) {
        return await this.get(USER_ROUTE, {
            _limit: limit || 20,
            _page: page || 1
        })
    }
    async getUser(id) {
        return await this.get(`${USER_ROUTE}/${id}`)
    }
    async getUserPosts(id, limit, page) {
        return await this.get(`${USER_ROUTE}/${id}/${POST_ROUTE}`, {
            _limit: limit || 20,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async getUserAlbums(id, limit, page) {
        return await this.get(`${USER_ROUTE}/${id}/${ALBUM_ROUTE}`, {
            _limit: limit || 20,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async getUserTodos(id, limit, page) {
        return await this.get(`${USER_ROUTE}/${id}/${TODO_ROUTE}`, {
            _limit: limit || 20,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async createUser(user) {
        return await this.post(USER_ROUTE, user)
    }
    async updateUser(id, user) {
        return await this.put(`${USER_ROUTE}/${id}`, user)
    }
    async deleteUser(id, user) {
        return await this.delete(`${USER_ROUTE}/${id}`, user)
    }
}

module.exports = UsersAPI