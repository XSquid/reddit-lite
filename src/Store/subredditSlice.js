import { createSlice } from "@reduxjs/toolkit";

/* initialState: {
    subreddits: [
        name: '/r/pics',
        id: 4213,
        posts: [
            {
                title: 'example',
                id: 2134213,
                votes: 213,
                subreddit: '/r/pics',
                image: 'picture'
            }
        ]
    ]
} */

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: []
    },
    reducers: {
        addSubreddit: (state, action) => {
            const {subName, subId} = action.payload;
            state.subreddits[subId] = {
                subId: subId,
                subName: subName,
                posts: []
            }
        },
        loadPostToSubreddit: (state, action) => {
            for (const [key, value] of Object.entries(state.subreddits)) { // for each key/value pair subreddit: 
                if (key) {
                    action.payload.forEach((el) => {if (el.subName === value.subName) { // for each post data object, if the post.subName name is equal to a loaded subreddit
                        if (!value.posts.some((post) => post.postId === el.postId)) { //check if there is a duplicate post by checking if the post ID is already in store
                            value.posts.push(el) // add post data to subreddit post array
                        }
                        
                    }})
                }
            }

        },
        removeSubreddit: (state, action) => {
            state.subreddits = state.subreddits.filter((subreddit) => subreddit.subId !== action.payload)
        },
        voteUp: (state, action) => {
            state.subreddits.forEach((sub) => {if (sub.subName === action.payload[1]) {
                sub.posts.forEach((post) => {if (post.postId === action.payload[0]) {
                    post.votes += 1
                }})
            }})
            
        },
        voteDown: (state, action) => {
            state.subreddits.forEach((sub) => {if (sub.subName === action.payload[1]) {
                sub.posts.forEach((post) => {if (post.postId === action.payload[0]) {
                    post.votes -= 1
                }})
            }})
        },
        loadData: (state, action) => {
            state.subreddits = action.payload
        }
    }/* ,
    extraReducers: (builder) => {
        builder
        .addCase('posts/loadPost', (state, action) => {
            for (const [key, value] of Object.entries(state.subreddits)) {
                if (key) {
                    action.payload.forEach((el) => {if (el.subName === value.subName) {
                        value.posts.push(el)
                    }})
                }
            }
        })
    } */

})

export const {addSubreddit, removeSubreddit, loadData, loadPostToSubreddit, voteUp, voteDown} = subredditsSlice.actions
export const selectSubreddits = (state) => state.subreddits.subreddits
export default subredditsSlice.reducer;

