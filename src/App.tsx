import React, {useEffect} from "react";
import {hot} from "react-hot-loader/root";
import './main.global.css';
import {CardsList} from "./shared/CardsList";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {UserContextProvider} from './shared/context/userContext';
import {PostContextProvider} from "./shared/context/postContext";
import {Provider} from "react-redux";
import {rootReducer, RootState, setToken} from "./store/store";
import {Action, applyMiddleware, createStore, Middleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from "redux-thunk";


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));
export const timeout = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch({type: 'start'})
    setTimeout(() => {
        dispatch({type: 'finish'})
    }, 3000)
}

function AppComponent() {
    useEffect(() => {
        const token = localStorage.getItem('token') || window.__token__
        store.dispatch(setToken(token))
        // @ts-ignore
        store.dispatch(timeout())
        if (token) {
            localStorage.setItem('token', token)
        }
    }, [])
    return (
        <Provider store={store}>
            <UserContextProvider>
                <PostContextProvider>
                    <Layout>
                        <Header/>
                        <Content>
                            <CardsList/>
                        </Content>
                    </Layout>
                </PostContextProvider>
            </UserContextProvider>
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)


