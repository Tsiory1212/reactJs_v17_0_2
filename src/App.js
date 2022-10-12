import './App.css';
import { useRef, useEffect, useReducer } from 'react';

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
      dispatch({type: "add"})
      inputRef.current.value = null;
   }

   const removeItem = (id) => {
      dispatch({type: "remove", payload: {id}})
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
