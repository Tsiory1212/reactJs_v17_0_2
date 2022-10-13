import './App.css';
import { useRef, useEffect, useContext } from 'react';
import {Context} from "./Context";

function Form() {
   const inputRef = useRef();
   const {onChange, inputValue, addItem} = useContext(Context);

   const handleOnSubmit = (e) => {
      e.preventDefault();
      if (!inputValue) {
         return false;
      }
      addItem();
      inputRef.current.value = null;
   }



   return (
      <>
         <form onSubmit={handleOnSubmit}>
            <input ref={inputRef} type="text" onChange={onChange} /> <button type="submit">Add</button>
         </form>
         <br/>
      </>

   );
}

function Todos() {
   const {state, removeItem} = useContext(Context);


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
