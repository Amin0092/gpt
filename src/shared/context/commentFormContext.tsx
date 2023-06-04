import React from "react";

type CommentFormContextType = {
    value: string,
    onChange: (value: string) => void
}

export const commentFormContext = React.createContext<CommentFormContextType>({
    value: '',
    onChange: () => {},
})