import {useState, useEffect} from "react"
import {useSelector} from "react-redux";
import {RootState, setToken} from "../store/store";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

export const ThunkSaveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (!window.__token__) return;
    const token = window.__token__
    dispatch(setToken(token))
}
