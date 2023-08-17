import React, {ChangeEvent} from 'react';
import styles from './commentsform.css';
import {useSelector} from "react-redux";
import {RootState, updateComment, useAppDispatch} from "../../../store/store";
import {Formik, Form, Field, ErrorMessage, FormikHelpers, FormikErrors} from 'formik';
import * as Yup from 'yup';

interface FormValues {
    comment: string;
}


export function CommentsForm() {
    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useAppDispatch();

    const handleSubmit = (values: FormValues, {setSubmitting}: FormikHelpers<FormValues>) => {
        setSubmitting(false);
        alert('Форма отправлена')
    };

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function validateValue() {
        const errors: FormikErrors<FormValues> = {};

        if (value.length <= 3) {
            errors.comment = 'Введите больше 3 символов'
        }
        return errors
    }

    return (
        <Formik
            initialValues={{comment: value}}
            validate={validateValue}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form className={styles.form}>
                    <Field
                        className={styles.input}
                        component="textarea"
                        name="comment"
                        placeholder="Введите комментарий"
                        value={value}
                        onChange={handleChange}
                    />
                    <ErrorMessage name="comment" component="div" className={styles.error}/>
                    <button type="submit" className={styles.button} disabled={isSubmitting}>
                        Комментировать
                    </button>
                </Form>
            )}
        </Formik>
    );
}

// export function CommentsForm() {
//     const value = useSelector<RootState, string>(state => state.commentText)
//     const dispatch = useAppDispatch()
//
//     function handleSubmit(event: FormEvent) {
//         event.preventDefault()
//         console.log(value)
//     }
//
//     function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
//         dispatch(updateComment(event.target.value))
//     }
//
//     return (
//         <form className={styles.form} onSubmit={handleSubmit}>
//             <textarea className={styles.input} value={value} onChange={handleChange}/>
//             <button type='submit' className={styles.button}>Комментировать</button>
//         </form>
//     )
// }
