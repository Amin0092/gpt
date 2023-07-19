import React from "react";
import {hot} from "react-hot-loader/root";
import './main.global.css';
import {CardsList} from "./shared/CardsList";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {UserContextProvider} from './shared/context/userContext';
import {PostContextProvider} from "./shared/context/postContext";
import {Provider} from "react-redux";
import {rootReducer} from "./store";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
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


