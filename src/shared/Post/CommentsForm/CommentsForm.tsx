import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentsform.css';

type CommentsFormProps = {
    value: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onSubmit: (event: FormEvent) => void
}
export function CommentsForm({value, onChange, onSubmit} : CommentsFormProps) {

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea className={styles.input} value={value} onChange={onChange}/>
            <button type='submit' className={styles.button}>Комментировать</button>
        </form>
    )
}
