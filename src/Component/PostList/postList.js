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



    return (
        <div className='postList'>
            <h2>posts go here <button onClick={loadem}>Load Post Data</button></h2>
             {/* {allPosts.map((post) => <Post postId={post.postId} title={post.title} subName={post.subName} votes={post.votes} image={post.image}/>)}  */}
             {allSubreddits.map((sub) => sub.posts.map((post) => <Post postId={post.postId} title={post.title} subName={post.subName} votes={post.votes} image={post.image} comments={post.comments}/>))}
        </div>
    )
}

export default PostList