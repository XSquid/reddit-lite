import React, { useState, useEffect } from "react";
import './subreddit.css'
import { useSelector, useDispatch } from "react-redux";
import { addSubreddit, loadData, selectSubreddits } from "../../Store/subredditSlice";
import subData from "../../Store/data";
import SubredditList from "./subredditList";

export default function Subreddit() {

    const subList = useSelector(selectSubreddits)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    } // update the search state with whatever is typed in the input. Forced to lowercase to make sure no duplicates between cases

    const duplicateSubChecker = () => { //Check if the search term is already in the subreddit list, and if the search term is not empty
        if (!subList.some(ea => ea.subName === search) && search) {
            return true
        } else return false
    }

    const addSubtoList = (event) => { //when add button is clicked, dispatches reducer to add the payload to store, which is then displayed under active subreddits
        event.preventDefault();
        if (duplicateSubChecker()) { 
            dispatch(addSubreddit({ subName: search }));
        }
    } 

    useEffect(() => {   // Load initial default subreddits
        dispatch(loadData(subData));
    }, []);

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
                {subList.map((ea) => <SubredditList subName={ea.subName} />)}
            </ul>

        </div>
    )
}