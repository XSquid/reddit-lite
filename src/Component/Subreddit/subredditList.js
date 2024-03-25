import React from "react";
import { removeSubreddit } from "../../Store/subredditSlice";
import { useDispatch } from "react-redux";



export default function SubredditList(props) {

    const dispatch = useDispatch();
    const id = props.id
    const removeSub = (event) => {
        event.preventDefault();
        dispatch(removeSubreddit(id))
    }

    return (
        <p id={id}>{props.name}<button id={id} onClick={removeSub}><i class="fa-solid fa-x removeBtn"></i></button></p>
    )
}