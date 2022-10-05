import reactSvg from './logo.svg';
import avatar from './avatar.png';
import { useState, useEffect } from 'react';

import './App.css';
import reactDom from 'react-dom';

const lib = {
	react: {
		name: "React",
		link: "https://reactjs.org",
      logo : reactSvg
	},
	angluar: {
      name: "Angular",
      link: "https://Angular.io",
      logo: avatar
   }
}

function Clock(props){
   return (
      <p>{`${props.date}`}</p>
   )
}
function Clock02(props){
   return (
      <p>Il est {`${props.dateAnim.toLocaleTimeString()}`}</p>
   )
}
function TestVal(){
      reactDom.render(
         <Clock02 dateAnim={new Date()} />,
      document.getElementById('rootTest')
   );
}

function Component(props){
   const [date, setDate] = useState(new Date());
   
   // useEffect est comme la fontion componentDidMount() dans le cycle de vie d'un composant
   useEffect(() => {
      setInterval(() => {
         setDate(new Date());
      }, 1000);
   }, [])

   // const dateAnim = new Date();
   return (
      <>
         <img src={props.logo} className={props.name} alt={props.name}  />
         <p> 
            <Clock date={date} />
            <button onClick={() => setDate(new Date()) }>Show Date</button>
         </p>
         <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
            Learn {props.name}
         </a>


      </>
   );
}

setInterval(TestVal, 1000);


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Component {...lib.angluar} />
			</header>
		</div>
	);
}

export default App;
