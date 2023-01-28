import React from 'react';
import { usePostData } from '../../hooks/usePostData';

type TPostContextData = object

export const postContext = React.createContext<object[]>([])

export function PostContextProvider({ children }: { children: React.ReactNode }) {
    const [postData] = usePostData()
    
    return (
        <postContext.Provider value={postData}>
            {children}
        </postContext.Provider>
    )
}