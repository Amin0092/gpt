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


function AppComponent() {
    const [token] = useToken();
    const [posts] = usePostData()

    console.log(posts);
    
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardsList />
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppComponent />)


