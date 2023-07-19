import axios from "axios";
import {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";

export function usePostData() {
    const [postData, setPostData] = useState<object[]>([])
    const token = useSelector<RootState, string>(state => state.token)
    useEffect(() => {
        if (!token && token !== "undefined") {
            axios
                .get('https://oauth.reddit.com/best.json?sr_detail=true', {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((resp) => {
                    let postData = resp.data.data.children

                    postData = postData.map((item: any) =>
                        item = item.data = {
                            id: item.data.id,
                            author: item.data.author_fullname,
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
