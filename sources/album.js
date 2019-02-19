const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, ALBUM_ROUTE, PHOTO_ROUTE } = require('../config/api')

class AlbumsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getAlbums() {
        return this.get(ALBUM_ROUTE, {
            _limit: 20
        })
    }
    async getAlbum(id) {
        return this.get(`${ALBUM_ROUTE}/${id}`)
    }
    async getAlbumPhotos(id) {
        return this.get(`${ALBUM_ROUTE}/${id}/${PHOTO_ROUTE}`, {
            _limit: 10
        })
    }
}

module.exports = AlbumsAPI