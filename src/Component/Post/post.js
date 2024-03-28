import React, { useState } from "react";
import Comments from "../Comment/comments";
import './post.css'
import Votes from "../votes/votes";
import { voteUp, voteDown } from "../../Store/subredditSlice";
import { useDispatch } from "react-redux";


function Post({ postId, title, votes, image, subName, comments }) {


    const [showComment, setShowComment] = useState(false)
    const dispatch = useDispatch();
    const voteSubmit = [postId, subName]
    const upvote = (e) => {
        e.preventDefault();
        dispatch(voteUp(voteSubmit))
    }

    const downvote = (e) => {
        e.preventDefault();
        dispatch(voteDown(voteSubmit))
    }

    const loadComment = (e) => {
        e.preventDefault();
        setShowComment(!showComment)
    }

    return (
        <div className='post' id={postId}>
            <div className='post-banner'><span className='banner-subreddit'>{subName}</span><span className='banner-title'>{title} id: {postId}</span></div>
            <div className='indPost'>
                <div>
                    <Votes voteCount={votes} upvote={upvote} downvote={downvote} />
                </div>
                <div>
                    <img src={image} alt='' />
                    <Comments loadComment={loadComment} comments={comments} showComment={showComment}/>
                </div>

            </div>

        </div>
    )
}

export default Post