const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, COMMENT_ROUTE } = require('../config/api')

class CommentsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getComments() {
        return this.get(COMMENT_ROUTE, {
            _limit: 20
        })
    }
    async getComment(id) {
        return this.get(`${COMMENT_ROUTE}/${id}`)
    }
}

module.exports = CommentsAPI