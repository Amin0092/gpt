import {ActionCreator, Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction
} from "./me/action";
import {meReducer, MeState} from "./me/reducer";
import {store} from "../App";
import {useDispatch} from "react-redux";

export type RootState = {
    commentText: string
    token: string
    me: MeState
}
const UPDATE_COMMENT = 'UPDATE_COMMENT'
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
})

const SET_TOKEN = 'SET_TOKEN'
type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
})
const initialState: RootState = {
    commentText: 'hello skillbox',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}
export type MyAction = UpdateCommentAction
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
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
        case  ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }

        default:
            return state
    }
}
export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch