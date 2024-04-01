import React from "react";
import { removeSubreddit } from "../../Store/subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSubreddit } from "../../Store/postSlice";
import { selectPost } from "../../Store/postSlice";




export default function SubredditList(props) {

    const dispatch = useDispatch();

    const postInfo = useSelector(selectPost)
    const subName = props.subName
    const removeSub = (event) => {
        event.preventDefault();
        dispatch(removeSubreddit(subName))
    }

    const selectSubreddit = (event) => {
        event.preventDefault();
        dispatch(setSubreddit(subName))
    }

    return (
        <p onClick={selectSubreddit} className={subName === postInfo.subreddit ? 'selectedSubreddit' : 'unselectedSubreddit'}>{props.subName}<button onClick={removeSub}><i class="fa-solid fa-x removeBtn"></i></button></p>
    )
}