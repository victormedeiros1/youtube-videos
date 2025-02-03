import { Video } from './video.js'
import { Platform } from './platform.js'

const platform = new Platform('a', 'Krakam')
const video = new Video(
    '0',
    'Learning OO with YouTube Videos',
    'Using a project that simulate the platform YouTube'
)

console.log({ platform })
console.log({ video })
