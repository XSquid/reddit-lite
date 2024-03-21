import { createSlice } from "@reduxjs/toolkit";


export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: ['/pics', '/classicwow', '/videos', '/funny']
    },
    reducers: {
        addSubreddit: (state, action) => {
            const {name} = action.payload
            state.subreddits.push(name)
        }
    }
})

export const {addSubreddit} = subredditsSlice.actions
export const selectSubreddits = (state) => state.subreddits.subreddits
export default subredditsSlice.reducer;