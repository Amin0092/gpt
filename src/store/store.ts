import {ActionCreator, AnyAction, Reducer} from "redux";
import {useToken} from "../hooks/useToken";
import {useUserData} from "../hooks/useUserData";

export type RootState = {
    commentText: string
    token: string
}
const UPDATE_COMMENT = 'UPDATE_COMMENT'
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text : string) => ({
    type: UPDATE_COMMENT,
    text,
})

const SET_TOKEN = 'SET_TOKEN'
type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string
}
export const setToken: ActionCreator<SetTokenAction> = (token : string) => ({
    type: SET_TOKEN,
    token,
})
const initialState: RootState = {
    commentText: 'hello skillbox',
    token: '',
}
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };

        default:
            return state
    }
}
