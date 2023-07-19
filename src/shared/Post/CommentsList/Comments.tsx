import React, {useEffect, useRef, useState} from 'react';
import {useCommentsData} from "../../../hooks/useCommentsData";
import {EColor, Text} from "../../Text";
import {Break} from "../../Break";
import styles from "./comments.css";
import {ResponseForm} from "../ResponseForm";

interface ICommentProps {
    data: {
        id: string,
        parentId: string,
        body: string,
        author: string,
    }
}

function Comment({data}: ICommentProps) {
    const ref = useRef<HTMLDivElement>(null)
    let hideButton = 'Ответить'
    const [isResponseOpen, setIsResponseOpen] = useState(false)

    if (isResponseOpen) hideButton = '';

    useEffect(() => {
            function handleClick(event: MouseEvent) {
                if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                    setIsResponseOpen(false)
                }
            }

            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }
        },
        [])

    return (
        <div className={styles.commentBlock}>

            <div className={styles.userBlock}>
                <svg className={styles.userIcon} width="18" height="18" viewBox="0 0 50 50" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z"
                        fill="#D9D9D9"/>
                </svg>
                <Text size={14} color={EColor.orange}>{data.author}</Text>
            </div>
            <Break size={4} top={true}/>
            <Text size={14}>{data.body}</Text>
            <Break size={8} top={true}/>
            <div ref={ref}>
                <button className={styles.responseButton} onClick={() => {
                    setIsResponseOpen(true)
                }}><Text size={14} color={EColor.gray99}>{hideButton}</Text></button>
                {isResponseOpen && (
                    <ResponseForm author={data.author}/>
                    // <ResponseFormUncontrolled author={data.author}/>
            )}
        </div>
</div>
)
}

interface ICommentsListProps {
    id?: string
}

export function Comments({id}: ICommentsListProps) {
    let commentsData
    if (!id) return null
    commentsData = useCommentsData(id)
    commentsData = commentsData[0].map((item: any) => {
        item = {
            id: item.data.id,
            parentId: item.data.parent_id,
            body: item.data.body,
            author: item.data.author,
        }
        return item
    })
    const CommentsList = commentsData.map((item: any) => {
        return (
            <Comment data={item}/>
        )
    })
    return (
        <ul className={styles.container}>
            {CommentsList}
        </ul>
    )
}





