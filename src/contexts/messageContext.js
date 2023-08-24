import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const MessageContext = createContext();

export function MessageProvider(props) {
    const [message, setMessage] = useState("");
    console.log({message});

    const clearMessage = useCallback(() =>
            setMessage(""),
        []
    );

    const api = useMemo(() => ({
        message, setMessage, clearMessage
    }), [message, setMessage, clearMessage]);

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext);