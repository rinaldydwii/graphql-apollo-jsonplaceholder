const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, TODO_ROUTE } = require('../config/api')

class TodosAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getTodos() {
        return this.get(TODO_ROUTE, {
            _limit: 20
        })
    }
    async getTodo(id) {
        return this.get(`${TODO_ROUTE}/${id}`)
    }
    async createTodo(todo) {
        return this.post(TODO_ROUTE, todo)
    }
    async updateTodo(id, todo) {
        return this.put(`${TODO_ROUTE}/${id}`, todo)
    }
    async deleteTodo(id, todo) {
        return this.delete(`${TODO_ROUTE}/${id}`, todo)
    }
}

module.exports = TodosAPI