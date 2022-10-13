import { createContext, useCallback, useMemo, useReducer, useState } from "react";

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
    const [inputValue, setInputValue] = useState(null);
   const handleOnChange = (e) =>  {
      setInputValue(e.target.value);
      setTimeout(() =>  dispatch({type: "setEditing"}), 1000 );
   };
   const addItem = useCallback(() =>  {
      dispatch({type: "add", payload: {value: inputValue}})
      setInputValue(null);
   }, [inputValue]);
   const removeItem = (id) => {
      dispatch({type: "remove", payload: {id}})
   }
   const value = useMemo(() => {
      return {
         state,
         inputValue, 
         addItem,
         removeItem,
         dispatch,
         onChange: handleOnChange
      }
    }, [state, addItem, inputValue]);
    return (
      <Context.Provider value={value} >{children}</Context.Provider>
   );
}

export default Provider;