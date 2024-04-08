import React from "react";
import Post from "../Post/post";
import './postList.css'
import { useSelector, useDispatch } from "react-redux";
import { selectPost, loadFromFetch } from "../../Store/postSlice";




function PostList() {

    const allPosts = useSelector(selectPost)
    const dispatch = useDispatch();

    const fetchHandler = async () => {
        try {
            const response = await fetch(`https://www.reddit.com/r/${allPosts.subreddit}.json`);
            const posts = await response.json();
            if (!response.ok) {
                const error = new Error('An error has occured')
                error.details = posts;
                throw error;
            }
            dispatch(loadFromFetch(posts.data.children))
            console.log(posts)
        }  catch(e) {
            console.log(e.message);
            console.log(e.details);
        }
    }

    return (
        <div className='postList'>
            <h2>posts go here</h2>
            <button onClick={fetchHandler} >Click to load JSON</button>
            {allPosts.posts.map((post) => <Post key={post.postId} postId={post.postId} title={post.title} subName={post.subName} votes={post.votes} image={post.image} comments={post.comments} link={post.link} selftext={post.selftext}/>)}  
        </div>
    )
}

export default PostList