import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../shared/context/tokenContext";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export function useCommentsData(postId: string) {
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
                .catch(console.log)
        }
    }, [])
    return [commentsData]
}