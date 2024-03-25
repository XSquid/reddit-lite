import { createSlice } from "@reduxjs/toolkit";


export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: []
    },
    reducers: {
        addSubreddit: (state, action) => { //when dispatched, adds whatever the action.payload is to the subreddit list array
            state.subreddits.push(action.payload)
        },
        removeSubreddit: (state, action) => {
            state.subreddits = state.subreddits.filter((subreddit) => subreddit.id !== action.payload)
        },
        loadData: (state, action) => {
            state.subreddits = action.payload
        }
    }
})

export const {addSubreddit, removeSubreddit, loadData} = subredditsSlice.actions
export const selectSubreddits = (state) => state.subreddits.subreddits
export default subredditsSlice.reducer;