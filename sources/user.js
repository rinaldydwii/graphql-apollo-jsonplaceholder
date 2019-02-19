const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, USER_ROUTE } = require('../config/api')

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
        return this.get(`${USER_ROUTE}/${id}`, {
            _limit: 20
        })
    }
}

module.exports = UsersAPI