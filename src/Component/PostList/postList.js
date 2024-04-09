import React, {useEffect} from "react";
import Post from "../Post/post";
import './postList.css'
import { useSelector, useDispatch } from "react-redux";
import { selectPost, loadFromFetch } from "../../Store/postSlice";


function PostList() {


    const allPosts = useSelector(selectPost)
    const dispatch = useDispatch();

    const fetchHandler = async () => { //fetch posts for selected subreddit from reddit API
        if (allPosts.subreddit) {
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
            } catch (e) {
                console.log(e.message);
                console.log(e.details);
            }
        }

    }

    const checkDisplay = () => { // Checks if a subreddit is selected, if not only shows "Select Subreddit", if one is selected shows the selected subreddit
        if (allPosts.posts.length === 0) {
            return (
                <h2>Select Subreddit</h2>
            )
        } else if (allPosts.posts.length > 0) {
            return (
                <h2>{allPosts.subreddit}</h2>
            )
        }
    }

    useEffect(() => { //Runs fetch handler whenever a new subreddit is selected, gets posts from reddit API using fetchHandler
            fetchHandler()
    }, [allPosts.subreddit])


    return (
        <div className='postList'>
            {checkDisplay()}
            {allPosts.posts.map((post) => <Post key={post.postId} postId={post.postId} title={post.title} subName={post.subName} votes={post.votes} image={post.image} comments={post.comments} link={post.link} selftext={post.selftext} />)}
        </div>
    )
}

export default PostList