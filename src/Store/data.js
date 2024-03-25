import picture from './placeholder.jpg'

const subData = [
    {id: 0, name: '/pics'},
    {id: 1, name: '/classicwow'},
    {id: 2, name: '/videos'},
    {id: 3, name: '/funny'}
]

const postData = [
    {id: 0, title: 'post 1', subreddit: '/classicwow', votes: 111, image: picture},
    {id: 1, title: 'post 2', subreddit: '/videos', votes: -222, image: picture},
    {id: 2, title: 'post 3', subreddit: '/pics', votes: 333, image: picture},
]
export default subData;
export {postData};