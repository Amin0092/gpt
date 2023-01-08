import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import { tokenContext } from "../shared/context/tokenContext";

export function usePostData() {
    const [postData, setPostData] = useState({})
    const token = useContext(tokenContext)

    useEffect(() => {
        if (token && token !== undefined) {
            axios
                .get('https://oauth.reddit.com/best.json?sr_detail=true', {
                    headers: { Authorization: `bearer ${token}` }
                })
                .then((resp) => {
                    const postData = resp.data
                    setPostData(postData)
                })
                .catch(console.log);
        }
    }, [token])

    return [postData]
}
