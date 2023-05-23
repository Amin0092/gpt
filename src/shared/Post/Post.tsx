import React, {useRef} from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import {Text} from '../Text';
import {useEffect} from 'react';
import {useCommentsData} from "../../hooks/useCommentsData";

interface IPost {
    title?: string,
    img?: string,
    onClose?: () => void;
    id?: string
}

export function Post({title, img, id, onClose}: IPost) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
            function handleClick(event: MouseEvent) {
                if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                    onClose?.()
                }
            }

            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }
        },
        [])
    let commentsData
    if (id && typeof id == "string")  commentsData = useCommentsData(id)


    const node = document.querySelector('#modal_root')
    if (!node) return null
    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
            <div className={styles.content}>
                <img className={styles.post_img}
                     src={img || "https://cdn.dribbble.com/userupload/3249725/file/original-2050fea979f4c3d04313e2be81236275.jpg?compress=1&crop=49x375-1242x1270&resize=400x300&vertical=top"}
                     alt=""/>
                <Text size={16}
                      As='p'>{title || 'Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'}</Text>
                <Text size={16}
                      As='p'>{title || 'Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'}</Text>
                <Text size={16}
                      As='p'>{title || 'Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'}</Text>
            </div>
            <div className={styles.commentsBlock}>

            </div>
        </div>
    ), node);
} 
