import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../shared/context/tokenContext";
import axios from "axios";

export function useCommentsData(postId: string) {
    const [commentsData, setCommentsData] = useState([])
    const token = useContext(tokenContext)
    useEffect(() => {
        if (token && token !== 'undefined') {
            axios
                .get(`https://oauth.reddit.com/comments/${postId}`, {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((resp) => {
                    let commentsData = resp.data[1].data.children
                    setCommentsData(commentsData)
                })
                .catch(console.log)
        }
    }, [])
    return [commentsData]
}