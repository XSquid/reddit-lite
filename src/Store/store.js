import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from './subredditSlice'

export default configureStore({
    reducer:{
        subreddits: subredditsReducer
    }
})