import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import './main.global.css';
import {CardsList} from "./shared/CardsList";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {UserContextProvider} from './shared/context/userContext';

import {Provider} from "react-redux";
import {MyAction, rootReducer, RootState} from "./store/store";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {ThunkSaveToken} from "./hooks/useToken";
import {BrowserRouter, Redirect, Route, Switch,} from 'react-router-dom'
import {Post} from "./shared/Post";
import {Page404} from "./shared/Page404";


const appThunk: ThunkMiddleware<RootState, MyAction> = thunk
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(appThunk)
));


function AppComponent() {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    })

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
            {isMounted && (
                <BrowserRouter>
                    <UserContextProvider>
                        <Switch>
                            <Layout>
                                <Header/>
                                <Route path="/posts">
                                    {console.log('posts')}
                                    <Content>
                                        <CardsList/>
                                    </Content>
                                </Route>
                                <Route path="/posts/:id">
                                    {console.log('id')}
                                    <Post/>
                                </Route>
                                <Redirect from='auth' to='posts'/>
                                <Route path='*'>
                                    {console.log('no matches')}
                                    <Page404/>
                                </Route>
                                <Redirect from='/' to='/posts'/>
                            </Layout>
                        </Switch>
                    </UserContextProvider>
                </BrowserRouter>
            )}
        </Provider>
    )
}

export const App = hot(() =>
    <AppComponent/>
)


