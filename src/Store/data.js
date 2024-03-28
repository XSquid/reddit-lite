import picture from './placeholder.jpg'



const subData = [
    {subId: 100, subName: '/pics', posts: []},
    {subId: 101, subName: '/classicwow', posts: []},
    {subId: 90, subName: '/videos', posts: []},
    {subId: 32, subName: '/funny', posts: []}
]

const postData = [
    {postId: 312, title: 'post 1', subName: '/classicwow', votes: 111, image: picture},
    {postId: 22, title: 'post 2', subName: '/videos', votes: -222, image: picture},
    {postId: 78213, title: 'post 3', subName: '/pics', votes: 0, image: picture},
]
export default subData;
export {postData};