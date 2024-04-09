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
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
        },
        loadPosts: (state, action) => {
            state.posts = [];
            action.payload.forEach((postData) => {
                if (postData.subName === state.subreddit) {
                    state.posts.push(postData)
                }
            })
        },
        loadFromFetch: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                state.posts.push({
                    title: action.payload[i].data.title,
                    postId: action.payload[i].data.id,
                    image: action.payload[i].data.url,
                    votes: action.payload[i].data.score,
                    link: action.payload[i].data.permalink,
                    selftext: action.payload[i].data.selftext
                })
            }
        },
        fetchComments: (state, action) => {

            state.posts.forEach((post) => {
                if (post.postId === action.payload[0].data.children[0].data.id) {
                    post.comments = []
                    let i = 0;
                    let j = 0;
                    while (j < 5) {
                        if ((action.payload[1].data.children[i].data.author.includes('AutoModerator')) || (action.payload[1].data.children[i].data.body.includes('[gif](giphy|'))) {
                            i++
                        } else {
                            post.comments.push({ author: action.payload[1].data.children[i].data.author, commentText: action.payload[1].data.children[i].data.body })
                            i++
                            j++
                        }
                    }
                }
            }
            )
        }

    }
})


export const { votePostUp, votePostDown, setSubreddit, loadPosts, loadFromFetch, fetchComments } = postSlice.actions;
export const selectPost = (state) => state.posts
export default postSlice.reducer
