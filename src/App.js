import './App.css';
import { useRef, useEffect, useContext } from 'react';
import {Context} from "./Context";

function Form() {
   const inputRef = useRef();
   const {state, dispatch, onChange, inputValue} = useContext(Context);
   const handleOnChange = (e) =>  {
      onChange(e.target.value);
      setTimeout(() =>  dispatch({type: "setEditing"}), 1000 );
   };
   const handleOnSubmit = (e) => {
      e.preventDefault();
      if (!inputValue) {
         return false;
      }
      addItem();
      onChange(null) ;
   }

   const addItem = () =>  {
      dispatch({type: "add", payload: {value: inputValue}})
      inputRef.current.value = null;
   }
   


   return (
      <>
         <form onSubmit={handleOnSubmit}>
            <input ref={inputRef} type="text" onChange={handleOnChange} /> <button type="submit">Add</button>
         </form>
         <br/>
      </>

   );
}

function Todos() {
   const {state, dispatch} = useContext(Context);

   const removeItem = (id) => {
      dispatch({type: "remove", payload: {id}})
   }
   return(
      <ul>
         {state.items.map((item, index) => {
            return <li key={index} onClick={() => removeItem(item.id)}>{item.text}</li>
         })}
      </ul>
   );
}

function App() {
   // useEffect(() => console.log(state.value), [state.value]);

   return (
      <div className="App">
         <header className="App-header">
            <Form/>
            <Todos />
         </header>
      </div>
   );
}


export default App;
