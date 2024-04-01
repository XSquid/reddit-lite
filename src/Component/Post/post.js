import React, { useState } from "react";
import Comments from "../Comment/comments";
import './post.css'
import Votes from "../votes/votes";
import { useDispatch } from "react-redux";
import { votePostUp, votePostDown } from "../../Store/postSlice";


function Post({ postId, title, votes, image, subName, comments }) {


    const [showComment, setShowComment] = useState(false)
    const dispatch = useDispatch();
    const upvote = (e) => {
        e.preventDefault();
        dispatch(votePostUp(postId))
    }

    const downvote = (e) => {
        e.preventDefault();
        dispatch(votePostDown(postId))
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