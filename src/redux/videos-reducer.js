import video1 from '../assets/video/video1.mp4';
/*import video2 from '../assets/video/video2.mov';
import video3 from '../assets/video/video3.mov';
import video4 from '../assets/video/video4.mov';*/

let initialState = {
    videos: [
        {
            id: 1,
            name: 'Александру Прохоренко',
            video: video1
        },
        /*{
            id: 2,
            name: 'Дороги тянутся, как дали',
            video: video2
        },
        {
            id: 3,
            name: 'Спасая тебя',
            video: video3
        },
        {
            id: 4,
            name: 'Трубецкому',
            video: video4
        }*/
    ],
}

const videosReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default videosReducer;