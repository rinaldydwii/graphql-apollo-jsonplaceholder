const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, COMMENT_ROUTE } = require('../config/api')

class CommentsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getComments(limit, page) {
        return await this.get(COMMENT_ROUTE, {
            _limit: limit || 20,
            _page: page || 1
        })
    }
    async getComment(id) {
        return await this.get(`${COMMENT_ROUTE}/${id}`)
    }
    async createComment(comment) {
        return await this.post(COMMENT_ROUTE, comment)
    }
    async updateComment(id, comment) {
        return await this.put(`${COMMENT_ROUTE}/${id}`, comment)
    }
    async deleteComment(id, comment) {
        return await this.delete(`${COMMENT_ROUTE}/${id}`, comment)
    }
}

module.exports = CommentsAPI