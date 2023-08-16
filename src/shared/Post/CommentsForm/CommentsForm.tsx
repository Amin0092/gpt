import React, {ChangeEvent} from 'react';
import styles from './commentsform.css';
import {useSelector} from "react-redux";
import {RootState, updateComment, useAppDispatch} from "../../../store/store";
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik';
import * as Yup from 'yup';

interface FormValues {
    comment: string;
}


//
// const CommentSchema = Yup.object().shape({
//     comment: Yup.string()
//         .min(2, 'Минимум 2 символа')
//         .max(500, 'Максимум 500 символов')
//         .required('Обязательное поле'),
// });

export function CommentsForm() {
    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useAppDispatch();
    //
    const handleSubmit = (values: FormValues, {setSubmitting}: FormikHelpers<FormValues>) => {
        console.log(values.comment);
        setSubmitting(false);
    };
    function handleChange(event : ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    return (
        <Formik
            initialValues={{comment: value}}
            // validationSchema={CommentSchema}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form className={styles.form}>
                    <Field
                        className={styles.input}
                        component="textarea"
                        name="comment"
                        placeholder="Введите комментарий"
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

