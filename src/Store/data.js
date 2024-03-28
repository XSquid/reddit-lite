import picture from './placeholder.jpg'



const randomFunc = () => {
    return Math.floor(Math.random() * 10000)
}

const subData = [
    {subId: randomFunc(), subName: '/pics', posts: []},
    {subId: randomFunc(), subName: '/classicwow', posts: []},
    {subId: randomFunc(), subName: '/videos', posts: []},
    {subId: randomFunc(), subName: '/funny', posts: []}
]

const postData = [
    {postId: randomFunc(), title: 'post 1', subName: '/classicwow', votes: 111, image: picture, comments: [{author: 'person 1', commentText: 'this is a test', votes: 0}]},
    {postId: randomFunc(), title: 'post 2', subName: '/videos', votes: -222, image: picture, comments: [{author: 'person 2', commentText: 'i r gay', votes: 10}]},
    {postId: randomFunc(), title: 'post 3', subName: '/pics', votes: 0, image: picture, comments: [{author: 'person 3', commentText: 'u r gay', votes: -10}, {author: 'person 1', commentText: 'this is a test', votes: 0}]},
]
export default subData;
export {postData};