export class Video {
    constructor(id, title, description) {
        this.id = id
        this.title = title
        this.description = description
        this.likes = 0
        this.comments = []
        this.sharelink = ''
    }
    addLike() {
        this.likes += 1
    }
    removeLike() {
        this.likes -= 1
    }
}
