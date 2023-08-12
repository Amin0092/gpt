import { useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export function useCommentsData(postId: string) {
    const [commentsData, setCommentsData] = useState([])
    const token = useSelector<RootState, string>(state => state.token)
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