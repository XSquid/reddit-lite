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
        voteUp: (state, action) => {
            state.posts[action.payload].votes += 1
            
        },
        voteDown: (state, action) => {
            state.posts[action.payload].votes -= 1
        }
    }
})

export const {loadPost, voteUp, voteDown} = postSlice.actions;
export const selectPost = (state) => state.posts.posts;
export default postSlice.reducer
