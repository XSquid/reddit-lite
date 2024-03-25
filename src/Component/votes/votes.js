import React from "react";
import './votes.css'

export default function Votes(props) {

    return (
        <div className='votes'>
            <i class="fa-solid fa-arrow-up arrowUp" onClick={props.upvote}></i>
            <br />
            <span style={{color: props.voteCount > 0 ? "#ffa500" : '#87cefa'}}>{props.voteCount}</span><br />
            <i class="fa-solid fa-arrow-down arrowDown" onClick={props.downvote}></i>
        </div>
    )
}
