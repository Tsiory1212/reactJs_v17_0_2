import './App.css';
import React from './React';
import { useState } from 'react';
import {  Context } from './context';

// Login
function Login(){
   const [value, setValue] = useState(null);

   const handleOnSubmit = (e) => {
      e.preventDefaul();
      if (!value) {
         return false;
      }
      
   };
   const handleOnChange = (e) => {
      setValue(e.target.value)
   }
   return (
      <>
         <p>User not connected</p>
         <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Add username to connect' onChange={handleOnChange} />&nbsp;
            <button>Login</button>
         </form>
      </>
   );
}

function Home() {
   return  <p>App</p>;
}


function App() {
   return (
      <div className="App">
         <header className="App-header">
            <Context.Consumer>
               {(value) => {
                  return <Home/>
               }}
            </Context.Consumer>
         </header>
      </div>
   );
}


export default App;
