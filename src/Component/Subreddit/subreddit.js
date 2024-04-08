import React, { useState, useEffect } from "react";
import './subreddit.css'
import { useSelector, useDispatch } from "react-redux";
import { addSubreddit, loadData, selectSubreddits } from "../../Store/subredditSlice";
import subData from "../../Store/data";
import SubredditList from "./subredditList";
import { loadPosts, selectPost } from "../../Store/postSlice";
import { postData } from "../../Store/data";

export default function Subreddit() {

    const postInfo = useSelector(selectPost)
    const subList = useSelector(selectSubreddits)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const onChange = (e) => {
        setSearch(e.target.value)
    } // update the search state with whatever is typed in the input

    const duplicateSubChecker = () => {
        if (!subList.some(ea => ea.subName === search) && search) {
            return true
        } else return false
    }

    const addSubtoList = (event) => {
        event.preventDefault();
        if (duplicateSubChecker()) { // need to add another conditional for duplicates
            dispatch(addSubreddit({subName: search }));
        }
    } //when add button is clicked, dispatches reducer to add the payload to store, which is then displayed under active subreddits

    // Load initial subreddits
    useEffect(() => {
        dispatch(loadData(subData));
      }, []);

      useEffect(() => {
        dispatch(loadPosts(postData))
      }, [postInfo.subreddit])

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