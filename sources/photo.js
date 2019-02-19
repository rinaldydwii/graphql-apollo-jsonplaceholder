const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, PHOTO_ROUTE } = require('../config/api')

class PhotosAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getPhotos() {
        return this.get(PHOTO_ROUTE, {
            _limit: 20
        })
    }
    async getPhoto(id) {
        return this.get(`${PHOTO_ROUTE}/${id}`)
    }
}

module.exports = PhotosAPI