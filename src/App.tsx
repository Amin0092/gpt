import React from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { usePostData } from './hooks/usePostData';
import { PostContextProvider } from "./shared/context/postContext";


function AppComponent() {
    const [token] = useToken();
    const [posts] = usePostData()


    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardsList />
                        </Content>
                    </Layout>
                </PostContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppComponent />)


