import React from "react";
import Comments from "../Comment/comments";
import './post.css'
import Votes from "../votes/votes";
import { voteUp, voteDown } from "../../Store/postSlice";
import { useDispatch } from "react-redux";

function Post({id, title, votes, image, subreddit}) {

    const dispatch = useDispatch();

    const upvote = (e) => {
        e.preventDefault();
        dispatch(voteUp(id))
    }

    const downvote = (e) => {
        e.preventDefault();
        dispatch(voteDown(id))
    }

    return (
        <div className='post' id={id}>
            <div className='post-banner'><span className='banner-subreddit'>{subreddit}</span><span className='banner-title'>{title}</span></div>
            <div className='indPost'>
                <div>
                    <Votes voteCount={votes} upvote={upvote} downvote={downvote}/>
                </div>
                <div>
                    <img src={image} alt='' />
                    <Comments />
                </div>

            </div>

        </div>
    )
}

export default Post