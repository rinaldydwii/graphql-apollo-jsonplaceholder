const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, POST_ROUTE, COMMENT_ROUTE } = require('../config/api')

class PostsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getPosts() {
        return this.get(POST_ROUTE, {
            _limit: 20
        })
    }
    async getPost(id) {
        return this.get(`${POST_ROUTE}/${id}`)
    }
    async getPostComments(id) {
        return this.get(`${POST_ROUTE}/${id}/${COMMENT_ROUTE}`, {
            _limit: 10
        })
    }
    async createPost(post) {
        return this.post(POST_ROUTE, post)
    }
    async updatePost(id, post) {
        return this.put(`${POST_ROUTE}/${id}`, post)
    }
    async deletePost(id, post) {
        return this.delete(`${POST_ROUTE}/${id}`, post)
    }
}

module.exports = PostsAPI