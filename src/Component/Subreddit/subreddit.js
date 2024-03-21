import React, { useState } from "react";
import './subreddit.css'
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits } from "../../Store/subredditSlice";
import { addSubreddit, removeSubreddit } from "../../Store/subredditSlice";


export default function Subreddit() {

    const subredditList = useSelector(selectSubreddits)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const onChange = (e) =>{
        setSearch(e.target.value)
    } // update the search state with whatever is typed in the input

    const addSubtoList = (event) => {
        event.preventDefault();
        dispatch(addSubreddit(search));
    } //when add button is clicked, dispatches reducer to add the payload to store, which is then displayed under active subreddits

    const removeSub = (event) => {
        event.preventDefault();
        dispatch(removeSubreddit(event.target.value)) //figuring out how to remove a subreddit from store, 2 options: 
    } // 1. add an ID to each subreddit that is hidden, then filter out the ID (previous codecademy thigns have done this, will have to look up how to do)
    // 2. set a variable equal to the innerHTML of the paragraph/span etc in question, then filter that using the reducer.

    return (
        <div className='subreddits'>
            <h2>subreddits</h2>
            <form>
                <input placeholder='search' value={search} onChange={onChange}></input>
                <p>Search Results:</p>
                <p>{search}<button onClick={addSubtoList} ><i class="fa-solid fa-plus addBtn"></i></button></p>
            </form>

            <h3>Active Subreddits:</h3>
            <ul>
                {subredditList.map((ea) => <p>{ea}<button onClick={removeSub}><i class="fa-solid fa-x removeBtn"></i></button></p>)}
            </ul>
        </div>
    )
}