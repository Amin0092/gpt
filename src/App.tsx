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
import {MyAction, rootReducer, RootState, setToken} from "./store/store";
import {Action, applyMiddleware, createStore, Middleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";
import {ThunkSaveToken} from "./hooks/useToken";

const appThunk: ThunkMiddleware<RootState, MyAction> = thunk
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(appThunk)
));


function AppComponent() {
    useEffect(() => {
        const token = localStorage.getItem('token') || window.__token__
        store.dispatch(ThunkSaveToken())
        // @ts-ignore
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


