import  React, {ChangeEvent, FormEvent, useContext} from 'react';
import styles from './commentsform.css';
import {commentFormContext} from "../../context/commentFormContext";


export function CommentsForm() {
    const {value, onChange} = useContext(commentFormContext)
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={value} onChange={handleChange}/>
            <button type='submit' className={styles.button}>Комментировать</button>
        </form>
    )
}
