import React, {useEffect, useRef, useState} from 'react';
import {Card} from './Card';
import styles from './cardslist.css';
import {useSelector} from "react-redux";
import {RootState, setPosts, useAppDispatch} from "../../store/store";
import axios from "axios";

async function loadPosts(token: string, nextAfter: string) {
    try {
        const response = await axios.get('https://oauth.reddit.com/rising/', {
            headers: {Authorization: `bearer ${token}`},
            params: {
                limit: 10,
                after: nextAfter,
            }
        });
        const {data: {data: {after, children}}} = response
        return [after, children];
    } catch (error) {
        throw error;
    }
}

export function CardsList() {
    const token = useSelector<RootState, string>(state => state.token);

    const posts = useSelector<RootState, any[]>(state => state.posts)
    const [nextAfter, setNextAfter] = useState('')
    const [errorLoading, setErrorLoading] = useState('');
    const [autoLoadCount, setAutoLoadCount] = useState(2);
    const [loading, setLoading] = useState(false);

    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()

    const loadMorePosts = () => {
        if (token && token !== "undefined" && !loading) {
            setLoading(true);
            loadPosts(token, nextAfter)
                .then(([after, children]) => {
                    setNextAfter(after);
                    // setPosts(prevChildren => prevChildren.concat(...children));
                    dispatch(setPosts(posts.concat(...children)))
                })
                .catch(error => {
                    setErrorLoading(String(error));
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    function handleLoad() {
        loadMorePosts()
        if (!loading) {
            setAutoLoadCount(2)
        }
    }

    useEffect(() => {
        if (!loading && token && token !== 'undefined') {
            if (autoLoadCount > 0) {
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        loadMorePosts();
                        setAutoLoadCount(prevCount => prevCount - 1);
                    }
                }, {
                    rootMargin: '50px'
                })

                if (bottomOfList.current) {
                    observer.observe(bottomOfList.current)
                }

                return () => {
                    if (bottomOfList.current) {
                        observer.unobserve(bottomOfList.current)
                    }
                }
            }
        }
    }, [autoLoadCount, loading, token]);


    return (
        <ul className={styles.cardsList}>

            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: "center"}}> Нет ни одного поста </div>
            )}

            {posts.length != 0 && (posts.map(post => (
                <Card key={post.data.id} cardContent={post.data}/>
            )))}

            <div onClick={handleLoad} role='button' aria-disabled={loading} ref={bottomOfList}
                 className={styles.loadMoreButton}>
                {loading ? 'Загрузка' : 'Загрузить еще'}
            </div>

            {errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    );
}

