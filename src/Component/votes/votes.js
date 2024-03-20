import React from "react";
import './votes.css'

export default function Votes() {
    return (
        <div className='votes'>
            <i class="fa-solid fa-arrow-up arrowUp"></i>
            <br />
            <span>####</span><br />
            <i class="fa-solid fa-arrow-down arrowDown"></i>
        </div>
    )
}