const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, TODO_ROUTE } = require('../config/api')

class TodosAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getTodos(limit, page) {
        return await this.get(TODO_ROUTE, {
            _limit: limit || 20,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async getTodo(id) {
        return await this.get(`${TODO_ROUTE}/${id}`)
    }
    async createTodo(todo) {
        return await this.post(TODO_ROUTE, todo)
    }
    async updateTodo(id, todo) {
        return await this.put(`${TODO_ROUTE}/${id}`, todo)
    }
    async deleteTodo(id, todo) {
        return await this.delete(`${TODO_ROUTE}/${id}`, todo)
    }
}

module.exports = TodosAPI