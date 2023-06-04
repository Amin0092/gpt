import React, {useState} from "react";
import {hot} from "react-hot-loader/root";
import {useToken} from "./hooks/useToken";
import './main.global.css';
import {CardsList} from "./shared/CardsList";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {tokenContext} from './shared/context/tokenContext';
import {UserContextProvider} from './shared/context/userContext';
import {usePostData} from './hooks/usePostData';
import {PostContextProvider} from "./shared/context/postContext";
import {commentFormContext} from "./shared/context/commentFormContext";
import {CommentsForm} from "./shared/Post/CommentsForm";


function AppComponent() {
    const [commentValue, setCommentValue] = useState('')

    const [token] = useToken();
    const [posts] = usePostData()

    return (
        <commentFormContext.Provider value={{
            value: commentValue,
            onChange: setCommentValue
        }}>
            <tokenContext.Provider value={token}>
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
            </tokenContext.Provider>
        </commentFormContext.Provider>
    )
}

export const App = hot(() => <AppComponent/>)


