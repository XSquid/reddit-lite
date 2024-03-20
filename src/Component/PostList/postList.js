import React from "react";
import Post from "../Post/post";
import './postList.css'

function PostList() {
    return (
        <div className='postList'>
            <h2>posts go here</h2>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostList