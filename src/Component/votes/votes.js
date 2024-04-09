import React, { useState } from "react";
import './votes.css'

export default function Votes(props) {

    const [voteTrack, setVoteTrack] = useState(0)

    const onClickUpvote = () => {
        if (voteTrack === 0) {
            props.upvote()
            setVoteTrack(1)
            document.getElementById('voteCount').style.color = 'orange'
        } else if (voteTrack === 1) {
            props.downvote()
            setVoteTrack(0)
        } else if (voteTrack === -1) {
            setVoteTrack(1)
            props.upvote()
            props.upvote()
        }
    }

    const onClickDownvote = () => {
        if (voteTrack === 0) {
            props.downvote()
            setVoteTrack(-1)
        } else if (voteTrack === 1) {
            props.downvote()
            props.downvote()
            setVoteTrack(-1)
        } else if (voteTrack === -1) {
            setVoteTrack(0)
            props.upvote()
        }
    }


    return (
        <div className='votes'>
            <i class="fa-solid fa-arrow-up arrowUp" onClick={onClickUpvote} style={{ color : voteTrack === 1 ? 'orange' : 'white' }}></i>
            <br />
            <span className='voteNumber' id="voteCount" style={{ color: props.voteCount > 0 ? "#ffa500" : '#87cefa' }}>{props.voteCount}</span><br />
            <i class="fa-solid fa-arrow-down arrowDown" onClick={onClickDownvote} style={{color: voteTrack === -1 ? 'lightskyblue' : 'white'}}></i>
        </div>
    )
}
