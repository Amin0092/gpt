import React from 'react';
import styles from './textcontent.css';
import { Text, EColor } from '../../../Text/Text';

interface ITextContentProps {
    author?: string,
    created?: number,
    author_icon?: string,
    title?: string
}

export function TextContent({ author, created, author_icon, title }: ITextContentProps) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    {author_icon
                        ? <img
                            src={author_icon} alt="" className={styles.avatar} />
                        : <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU"
                            alt="" className={styles.avatar} />}

                    <a href="#user-url" className={styles.username}><Text color={EColor.orange} size={16}>{author || 'Дмитрий Гришин'}</Text></a>
                </div>
                    <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано </span>
                        <Text size={16}>{created || '4 часа назад'}</Text>
                    </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    <Text size={16}>{title || `Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель
                    организационной деятельности`}</Text>
                </a>
            </h2>
        </div>
    );
}
