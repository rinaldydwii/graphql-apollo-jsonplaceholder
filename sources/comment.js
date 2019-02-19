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
    async createComment(comment) {
        return this.post(COMMENT_ROUTE, comment)
    }
    async updateComment(id, comment) {
        return this.put(`${COMMENT_ROUTE}/${id}`, comment)
    }
    async deleteComment(id, comment) {
        return this.delete(`${COMMENT_ROUTE}/${id}`, comment)
    }
}

module.exports = CommentsAPI