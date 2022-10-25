import './App.css';
import React from './React';
import { useState } from 'react';
import {  Context } from './context';

// Login
function Login({connect}){
   const [value, setValue] = useState(null);
   const handleOnSubmit = (e) => {
       connect(e, value)
   }
   const handleOnChange = (e) => setValue(e.target.value);

   return (
      <>
         <p>User not connected</p>
         <form onSubmit={handleOnSubmit}>
          
            <input type="text" placeholder='Username' onChange={handleOnChange} />&nbsp;
            <button>Login</button>
         </form>
      </>
   );
}

function Home({disconnect}) {
   return (
      <>
         <p>App</p>
         <button onClick={disconnect}>Disconnect</button>
      </>
   );
}


function App() {
   return (
      <div className="App">
         <header className="App-header">
            <Context.Consumer>
               {(value) => {
                 return !!value.user ? <Home {...value}/> : <Login {...value}/>;
               }}
            </Context.Consumer>
         </header>
      </div>
   );
}


export default App;
