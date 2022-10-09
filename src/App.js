import './App.css';
import { useState, useRef, useEffect, useReducer } from 'react';

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
         return {};
      case "remove":
         return {};
      default:
         return state;
   }
}

function App() {
   const inputRef = useRef();
   const [state, dispatch] = useReducer(reducer, initialState);
   
   useEffect(() => console.log(state.value), [state.value]);

   const handleOnChange = (e) =>  { 
      dispatch({type: "change", payload: {value: e.target.value } });
      setTimeout(() =>  dispatch({type: "setEditing"}), 1000 );
   };
   const handleOnSubmit = (e) => {
      e.preventDefault();
      if (!state.value) {
         return false;
      }
      addItem();
   }

   const addItem = () =>  {
      // setItems([...items, {id: (new Date()).getTime(), text: value}]);
      // setValue(null);
      
      inputRef.current.value = null;
   }

   const removeItem = (id) => {
      // const filtered = state.items.filter((item) => item.id !== id)
      // setItems(filtered);
   }


   return (
      <div className="App">
         <header className="App-header">
            <form onSubmit={handleOnSubmit}>
               <input ref={inputRef} type="text" onChange={handleOnChange} /> <button type="submit">Add</button>
               <br/>
               <ul>
                  {state.items.map((item, index) => {
                     return <li key={index} onClick={() => removeItem(item.id)}>{item.text}</li>
                  })}
               </ul>
            </form>
         </header>
      </div>
   );
}


export default App;
