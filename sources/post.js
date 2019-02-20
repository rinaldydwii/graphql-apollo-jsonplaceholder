const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, POST_ROUTE, COMMENT_ROUTE } = require('../config/api')

class PostsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getPosts(limit, page) {
        return await this.get(POST_ROUTE, {
            _limit: limit || 20,
            _page: page || 1
        })
    }
    async getPost(id) {
        return await this.get(`${POST_ROUTE}/${id}`)
    }
    async getPostComments(id, limit, page) {
        return await this.get(`${POST_ROUTE}/${id}/${COMMENT_ROUTE}`, {
            _limit: limit || 10,
            _page: page || 1
        })
    }
    async createPost(post) {
        return await this.post(POST_ROUTE, post)
    }
    async updatePost(id, post) {
        return await this.put(`${POST_ROUTE}/${id}`, post)
    }
    async deletePost(id, post) {
        return await this.delete(`${POST_ROUTE}/${id}`, post)
    }
}

module.exports = PostsAPI