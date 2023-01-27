import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import { tokenContext } from "../shared/context/tokenContext";

export function usePostData() {
    const [postData, setPostData] = useState({})
    const token = useContext(tokenContext)

    useEffect(() => {
        if (!token && token !== "undefined") {
            axios
                .get('https://oauth.reddit.com/best.json?sr_detail=true', {
                    headers: { Authorization: `bearer ${token}` }
                })
                .then((resp) => {
                    let postData = resp.data.data.children
                    postData = postData.map((item: any) =>
                        item = item.data = {
                            id: item.data.id,
                            author_fullname: item.data.author_fullname,
                            title: item.data.title,
                            sr_detail: item.data.sr_detail,
                            num_comments: item.data.num_comments,
                            ups: item.data.ups
                        }
                    ) 
                    setPostData(postData)
                })
                .catch(console.log);
        }
    }, [token])

    return [postData]
}
