import { createSlice } from "@reduxjs/toolkit";


export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: ['/pics', '/classicwow', '/videos', '/funny']
    },
    reducers: {
        addSubreddit: (state, action) => { //when dispatched, adds whatever the action.payload is to the subreddit list array
            state.subreddits.push(action.payload)
        },
        removeSubreddit: (state, action) => {
            state.subreddits.filter(action.payload)
        }
    }
})

export const {addSubreddit, removeSubreddit} = subredditsSlice.actions
export const selectSubreddits = (state) => state.subreddits.subreddits
export default subredditsSlice.reducer;