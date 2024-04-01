import React from "react";
import Post from "../Post/post";
import './postList.css'
import { useDispatch } from "react-redux";
import { postData } from "../../Store/data";
import { useSelector } from "react-redux";
import { selectSubreddits, loadPostToSubreddit } from "../../Store/subredditSlice";



function PostList() {

    const allSubreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();

    const loadem = (e) => {
        e.preventDefault();
        dispatch(loadPostToSubreddit(postData))
    }

    let displaythis

    const fetchHandler = async () => {
        try {
            const response = await fetch("https://www.reddit.com/r/classicwow.json");
            const posts = await response.json();
            if (!response.ok) {
                const error = new Error('An error has occured')
                error.details = posts;
                throw error;
            }
            console.log(posts)
            displaythis = posts.data.children[2].data.title
        }  catch(e) {
            console.log(e.message);
            console.log(e.details);
        }
    }


    return (
        <div className='postList'>
            <h2>posts go here <button onClick={loadem}>Load Post Data</button></h2>
            <button onClick={fetchHandler} >Click to load JSON</button>
            <p>{displaythis}</p>
            
            {/* {allPosts.map((post) => <Post postId={post.postId} title={post.title} subName={post.subName} votes={post.votes} image={post.image}/>)}  */}
            {allSubreddits.map((sub) => sub.posts.map((post) => <Post postId={post.postId} title={post.title} subName={post.subName} votes={post.votes} image={post.image} comments={post.comments} />))}
        </div>
    )
}

export default PostList