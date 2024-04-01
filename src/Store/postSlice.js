import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    error: false,
    subreddit: '',
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadPost: (state, action) => {
            state.posts = action.payload;
        },
        votePostUp: (state, action) => {
            state.posts.forEach((post) => {
                if (post.postId === action.payload) {
                    post.votes += 1
                }
            })
            
        },
        votePostDown: (state, action) => {
            state.posts.forEach((post) => {
                if (post.postId === action.payload) {
                    post.votes -= 1
                }
            })
        },
        setSubreddit : (state, action) => {
            state.subreddit = action.payload;
        },
        loadPosts: (state, action) => {
            state.posts = [];
            action.payload.forEach((postData) => {
                if (postData.subName === state.subreddit) {
                    state.posts.push(postData)
                }
            })
        }
    }
})

export const {loadPost, votePostUp, votePostDown, setSubreddit, loadPosts} = postSlice.actions;
export const selectPost = (state) => state.posts
export default postSlice.reducer
