import { createContext } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    return <Context.Provider value={{user: "Sandra"}}>{children}</Context.Provider>    
}

export default Provider;