import './App.css';

const withHOC = (Component) => () => {
   const learn = "Learn React";
   return <Component text={learn}/>
}

function App({text}) {
   // useEffect(() => console.log(state.value), [state.value]);

   return (
      <div className="App">
         <header className="App-header">
         {text}
         </header>
      </div>
   );
}


export default withHOC(App);
