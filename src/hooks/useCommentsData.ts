import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../shared/context/tokenContext";
import axios from "axios";

export function useCommentsData(postId : string) {
    const [commentsData, setCommentsData] = useState({})
    const token = useContext(tokenContext)
    useEffect(() => {
        if (!token && token !== 'undefined') {
            axios
                .get(`http://api.reddit.com/r/subreddit/comments/${postId}`, {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((resp) => {
                    console.log(resp)
                    setCommentsData(resp)
                })
        }
    }, [])
    return [commentsData]
}