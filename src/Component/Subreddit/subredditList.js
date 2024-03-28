import React from "react";
import { removeSubreddit } from "../../Store/subredditSlice";
import { useDispatch } from "react-redux";



export default function SubredditList(props) {

    const dispatch = useDispatch();
    const subId = props.subId
    const removeSub = (event) => {
        event.preventDefault();
        dispatch(removeSubreddit(subId))
    }

    return (
        <p subId={subId}>{props.subName}{props.subId}<button subId={subId} onClick={removeSub}><i class="fa-solid fa-x removeBtn"></i></button></p>
    )
}