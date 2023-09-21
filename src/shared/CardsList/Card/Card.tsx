import React from 'react';
import styles from './card.css';
import {Menu} from './Menu';
import {Preview} from './Preview';
import {TextContent} from './TextContent';
import {Controls} from './Controls';


interface ICardProps {
    cardContent?: {
        author?: string,
        id?: string,
        title?: string,
        preview: {
            images: [{
                source: {
                    url: string
                }
            }]
        }
    }
}

export function Card({cardContent}: ICardProps) {
    return (
        <li className={styles.card} id={cardContent?.id}>
            <TextContent id={cardContent?.id} author={cardContent?.author}
                         title={cardContent?.title}
            />
            <Preview/>
            <Menu/>
            <Controls/>
        </li>
    )
}