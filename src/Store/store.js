import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from './subredditSlice'
import postReducer from './postSlice'

export default configureStore({
    reducer:{
        subreddits: subredditsReducer,
        posts: postReducer
    }
})