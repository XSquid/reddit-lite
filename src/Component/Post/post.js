import React from "react";
import Comments from "../Comment/comments";
import './post.css'
import picture from './placeholder.jpg'
import Votes from "../votes/votes";

function Post() {
    return (
        <div className='post'>
            <h3>Post title</h3>
            <div className='indPost'>
                <div>
                    <Votes />
                </div>
                <div>
                    <img src={picture} alt='' />
                    <Comments />
                </div>

            </div>

        </div>
    )
}

export default Post