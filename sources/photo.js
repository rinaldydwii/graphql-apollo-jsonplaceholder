const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, PHOTO_ROUTE } = require('../config/api')

class PhotosAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getPhotos(limit, page) {
        return await this.get(PHOTO_ROUTE, {
            _limit: limit || 8,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async getPhoto(id) {
        return await this.get(`${PHOTO_ROUTE}/${id}`)
    }
    async createPhoto(photo) {
        return await this.post(PHOTO_ROUTE, photo)
    }
    async updatePhoto(id, photo) {
        return await this.put(`${PHOTO_ROUTE}/${id}`, photo)
    }
    async deletePhoto(id, photo) {
        return await this.delete(`${PHOTO_ROUTE}/${id}`, photo)
    }
}

module.exports = PhotosAPI