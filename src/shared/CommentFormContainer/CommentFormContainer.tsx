import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CommentsForm} from "../Post/CommentsForm";
import {RootState, updateComment} from "../../store";


export function CommentsFormContainer() {
    const value = useSelector<RootState, string>(state => state.commentText)
    const dispatch = useDispatch()

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value)
    }

    return (
       <CommentsForm
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
       />
    )
}
