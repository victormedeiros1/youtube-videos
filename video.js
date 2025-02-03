class Video {
    constructor(id, title, description, likes = 0, comments, sharelink) {
        this.id = id
        this.title = title
        this.description = description
        this.likes = likes
        this.comments = comments
        this.sharelink = sharelink
    }
    addLike() {
        this.likes += 1
    }
    removeLike() {
        this.likes -= 1
    }
}

const video = new Video(
    0,
    'Learning OOP with JavaScript',
    "In this video I'll OOP using JavaScript language."
)
