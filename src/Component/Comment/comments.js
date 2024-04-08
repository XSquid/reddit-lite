import React from "react";
import './comments.css'

export default function Comments(props) {

    const renderAction = () => {
        if (props.showComment) {
            return (
                <div className='commentBox'>
                    <button className='comment-btn' onClick={props.loadComment}><span className='comment-text'>Hide Comments </span><i class="fa-regular fa-comments comment-icon"></i></button>
                    {props.comments?.map((el) => <p className='comment-line'>{el.author}: {el.commentText}</p>)}
                </div>

            );
        }
        return (
            <div>
                <button className='comment-btn' onClick={props.fetchComments}><span className='comment-text'>Show Comments </span><i class="fa-regular fa-comments comment-icon"></i></button>
            </div>

        );
    };

    return (
        <div className='commentContainer'>
            {renderAction()}
        </div>
    )
}