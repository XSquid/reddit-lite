import React from "react";
import './comments.css'

export default function Comments(props) {


    const renderAction = () => {
        if (props.showComment) {
            return (
                <div className='allComments'>
                    <button className='commentBtn' onClick={props.loadComment}><span className='comment-text'>Hide Comments </span><i class="fa-regular fa-comments comment-icon"></i></button>
                    <div className='commentBox'>
                        {props.comments?.map((comment) => <p className='commentLine' key={comment.author}><span className='author'>{comment.author}:</span> {comment.commentText}</p>)}
                    </div>
                </div>

            );
        }
        return (
            <div>
                <button className='commentBtn' onClick={props.fetchComments}><span className='comment-text'>Show Comments </span><i class="fa-regular fa-comments comment-icon"></i></button>
            </div>

        );
    };

    return (
        <div className='commentContainer'>
            {renderAction()}
        </div>
    )
}