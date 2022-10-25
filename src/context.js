import { createContext, useMemo, useState } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const disconnect = () => {
        setUser(null)
    };
    const connect = (e, value) => {
        e.preventDefault();
        if (!value) {
           return false;
        }
        setUser(value)
    }

    const value = useMemo(() => {
        return {
            user,
            setUser,
            disconnect,
            connect
        }
    }, 
    [user]);

    return <Context.Provider value={value}>{children}</Context.Provider>    
}

export default Provider;