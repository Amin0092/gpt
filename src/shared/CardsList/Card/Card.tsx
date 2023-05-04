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
        sr_detail?: {
            banner_img?: string,
            community_icon?: string,
            header_img?: string,
            created?: number
        }
    }
}

export function   Card({cardContent}: ICardProps) {
    return (
        <li className={styles.card} id={cardContent?.id} key={cardContent?.id}>
            <TextContent created={cardContent?.sr_detail?.created} id={cardContent?.id} author={cardContent?.author}
                         img={cardContent?.sr_detail?.banner_img} title={cardContent?.title}
                         author_icon={cardContent?.sr_detail?.header_img}/>
            <Preview img={cardContent?.sr_detail?.banner_img}/>
            <Menu />
            <Controls/>
        </li>
    )
}