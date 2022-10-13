import { createContext, useMemo, useReducer, useState } from "react";

export const Context = createContext();

const initialState = {
    items: [],
    editing: false,
 };
const reducer = (state = initialState, action) => {
    switch (action.type) {
       case "setEditing":
          return {
             ...state,
             editing: false
          };
       case "add":
          return {
             ...state, 
             items: [...state.items, {id: new Date().getTime(), text: action.payload.value}],
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
    const [inputValue, setInputState] = useState(null);
    const handleOnChange = (value) => setInputState(value);
    const value = useMemo(() => {
      return {
         state,
         inputValue, 
         dispatch,
         onChange: handleOnChange
      }
    }, [state, inputValue]);
    return (
      <Context.Provider value={value} >{children}</Context.Provider>
   );
}

export default Provider;