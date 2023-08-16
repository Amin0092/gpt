import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CommentsForm} from "../Post/CommentsForm";
import {RootState, updateComment, useAppDispatch} from "../../store/store";


export function CommentsFormContainer() {
    const value = useSelector<RootState, string>(state => state.commentText)
    const dispatch = useAppDispatch()

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value)
    }

    return (
       <CommentsForm
        // value={value}
        // onChange={handleChange}
        // onSubmit={handleSubmit}
       />
    )
}
