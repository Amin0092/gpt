import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import styles from './responseform.css';

interface IResponseFormProps {
    author: string
}

export function ResponseForm({author}: IResponseFormProps) {
    const [responseValue, setResponseValue] = useState(author + ' ')

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setResponseValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={responseValue} onChange={handleChange}/>
            <button type="submit" className={styles.button}></button>
        </form>
    );
}

export function ResponseFormUncontrolled({author} : IResponseFormProps) {
    const ref = useRef<HTMLTextAreaElement>(null)

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} defaultValue={author + ' '} ref={ref}/>
            <button type="submit" className={styles.button}></button>
        </form>
    )
}