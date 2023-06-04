import React from 'react';
import {Card} from './Card';
import styles from './cardslist.css';
import {useContext} from 'react';
import {postContext} from '../context/postContext';


export function CardsList() {
    const postData = useContext(postContext)

    const CardItem = postData.map((item) => {
        return (
            <Card cardContent={item}/>
        )
    })
    return (
        <ul className={styles.cardsList}>
            {postData.length !== 0
                ? CardItem
                : <Card/>
            }
        </ul>
    );
}
