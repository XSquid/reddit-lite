import React, { useState } from "react";
import Comments from "../Comment/comments";
import './post.css'
import Votes from "../votes/votes";
import { useDispatch } from "react-redux";
import { votePostUp, votePostDown, fetchComments } from "../../Store/postSlice";


function Post({ postId, title, votes, image, subName, comments, link, selftext }) {


    const [showComment, setShowComment] = useState(false)
    const dispatch = useDispatch();
    const upvote = () => { //changes the vote count in store for post by +1
        dispatch(votePostUp(postId))
    }

    const downvote = () => { //changes the vote count in store for post by -1
        dispatch(votePostDown(postId))
    }

    const loadComment = (e) => { //If comments are shown, will hide - If hidden, will show
        e.preventDefault();
        setShowComment(!showComment)
    }

    function youtube_parser(image) { //regex for pulling out youtube ID from what is collected in the API call
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = image.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }


    const commentFetcher = async () => { //fetch comments from reddit API for selected post. Only fetches top 5 comments
        try {
            const response = await fetch('https://www.reddit.com' + link + '.json')
            const postData = await response.json()
            if (!response.ok) {
                const error = new Error('An error has occured')
                error.details = postData;
                throw error;
            }
            console.log(postData)
            dispatch(fetchComments(postData));
            setShowComment(true)
        } catch (e) {
            console.log(e.message);
            console.log(e.details);
        }
    }

    const mediaQuery = () => { //Testing what type of content is being returned from API, if youtube video and image or comments, display content. If not (gallery, other video types) do not display anything
        if (image.includes('youtu')) {
            return (
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube_parser}?si=miz1HUV-7Grm_Wzf`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )
        }
        if (image.includes('.jpeg') || image.includes('.jpg') || image.includes('.png')) {
            return (
                <img src={image} alt='' />
            )
        }
        if (image.includes('comment')) {
            return (
                <div className='postContent'>
                    <p>{selftext}</p>
                </div>

            )
        }
        else return false
    }

    if (!mediaQuery()) { //Removing any type of content that doesnt match the types in mediaQuery
        return
    }

    return (
        <div className='post' id={postId}>
            <div className='post-banner'><span className='banner-subreddit'>{subName}</span><span className='banner-title'>{title}</span></div>
            <div className='indPost'>
                <div>
                    <Votes voteCount={votes} upvote={upvote} downvote={downvote} />
                </div>
                <div className='mediaContainer'>
                    {mediaQuery()}
                    <Comments loadComment={loadComment} comments={comments} showComment={showComment} fetchComments={commentFetcher} />
                </div>

            </div>
        </div>
    )
}

export default Post