export class Platform {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.videos = []
    }
    uploadVideo(video) {
        this.videos.push(video)
    }
}
