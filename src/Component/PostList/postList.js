import React from "react";
import Post from "../Post/post";
import './postList.css'
import { useDispatch } from "react-redux";
import {loadPost, selectPost} from '../../Store/postSlice'
import { postData } from "../../Store/data";
import { useSelector } from "react-redux";


function PostList() {

    const allPosts = useSelector(selectPost);
    const dispatch = useDispatch();

    const loadem = (e) => {
        e.preventDefault();
        dispatch(loadPost(postData))
    }

    return (
        <div className='postList'>
            <h2>posts go here <button onClick={loadem}>Load Post Data</button></h2>
             {allPosts.map((post) => <Post id={post.id} title={post.title} subreddit={post.subreddit} votes={post.votes} image={post.image}/>)} 
        </div>
    )
}

export default PostList