import React from "react";
import './votes.css'

export default function Votes(props) {

    let taskDone = false;
    const doneTask = () => {
        taskDone = (taskDone ? false : true)
    }

    const taskCheck = () => {
        if (taskDone) {
            return 'background-color: orange'
        } else return 'blue'
    }


    return (
        <div className='votes'>
           <i class="fa-solid fa-arrow-up arrowUp" onClick={props.upvote} style={{taskCheck}}><button onClick={doneTask}></button></i>
            <br />
            <span className='voteNumber' style={{color: props.voteCount > 0 ? "#ffa500" : '#87cefa'}}>{props.voteCount}</span><br />
            <i class="fa-solid fa-arrow-down arrowDown" onClick={props.downvote}><button></button></i>
        </div>
    )
}
