import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
    items: [],
    value: null,
    editing: false,
 };
const reducer = (state = initialState, action) => {
    switch (action.type) {
       case "change":
          return {
             ...state,
             value: action.payload.value,
             editing: true,
          };
       case "setEditing":
          return {
             ...state,
             editing: false
          };
       case "add":
          return {
             ...state, 
             items: [...state.items, {id: new Date().getTime(), text: state.value}],
             value: null
          };
       case "remove":
          return {
             ...state,
             items: state.items.filter((item) => item.id !== action.payload.id),
          };
       default:
          return state;
    }
 }
 
 const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{state, dispatch}} >{children}</Context.Provider>
}

export default Provider;