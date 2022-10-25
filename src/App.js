import './App.css';
import React from './React';
import { useContext, useState } from 'react';
import {  Context } from './context';

// Login
function Login(){
   const {connect, user} = useContext(Context);
   const [value, setValue] = useState(null);
   const handleOnSubmit = (e) => {
      connect(e, value)
   }
   const handleOnChange = (e) => setValue(e.target.value);

   return (
      !user && (
         <>
            {/* <p>User not connected</p> */}
            <form onSubmit={handleOnSubmit}>
            
               <input type="text" placeholder='Username' onChange={handleOnChange} />&nbsp;
               <button>Login</button>
            </form>
         </>
      )
   );
}

function Home() {
   const {disconnect, user} = useContext(Context);
   
   return (
      !!user && (
         <>
            <p>App</p>
            <button onClick={disconnect}>Disconnect</button>
         </>
      )
   );
}


function App() {
   return (
      <div className="App">
         <header className="App-header">
            <Home />
            <Login />
         </header>
      </div>
   );
}


export default App;
