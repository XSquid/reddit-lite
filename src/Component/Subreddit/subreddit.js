import React from "react";
import './subreddit.css'
import { useSelector } from "react-redux";
import { selectSubreddits } from "../../Store/subredditSlice";

export default function Subreddit() {

    const subredditList = useSelector(selectSubreddits)


    return(
        <div className='subreddits'>
            <h2>subreddits</h2>
            <input placeholder='search'></input>
            <h3>Active Subreddits:</h3>
            <ul>
                {subredditList.map((ea) => <li>{ea}</li>)}
            </ul>
        </div>
    )
}