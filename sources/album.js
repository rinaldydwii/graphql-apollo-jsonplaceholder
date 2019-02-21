const { RESTDataSource } = require('apollo-datasource-rest')
const { MAIN_API_URL, ALBUM_ROUTE, PHOTO_ROUTE } = require('../config/api')

class AlbumsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = MAIN_API_URL
    }
    async getAlbums(limit, page) {
        return await this.get(ALBUM_ROUTE, {
            _limit: limit || 20,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async getAlbum(id) {
        return await this.get(`${ALBUM_ROUTE}/${id}`)
    }
    async getAlbumPhotos(id, limit, page) {
        return await this.get(`${ALBUM_ROUTE}/${id}/${PHOTO_ROUTE}`, {
            _limit: limit || 8,
            _page: page || 1,
            _sort: "id",
            _order: "desc"
        })
    }
    async createAlbum(album) {
        return await this.post(ALBUM_ROUTE, album)
    }
    async updateAlbum(id, album) {
        return await this.put(`${ALBUM_ROUTE}/${id}`, album)
    }
    async deleteAlbum(id, album) {
        return await this.delete(`${ALBUM_ROUTE}/${id}`, album)
    }
}

module.exports = AlbumsAPI