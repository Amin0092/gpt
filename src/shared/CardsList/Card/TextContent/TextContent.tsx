import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU"
                        alt="" className={styles.avatar}/>
                    <a href="#user-url" className={styles.username}>Дмитрий
                        Гришин</a>
                </div>
                <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано</span>
            4 часа назад
            </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель
                    организационной деятельности
                </a>
            </h2>
        </div>
    );
}
