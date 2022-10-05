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

function TimeToDate({isVisible}) {
   const [date, setDate] = useState(`${new Date()}`);
   const update = () => {
      setDate(`${new Date()}`);
   }

   return (
      <>
         <p>{ isVisible && date }</p>
         <button onClick={update}>Update</button>
      </>
   )
}

function Clock(props){
   return (
      <>
         <p>Date : {`${props.date}`}</p>
         <p>Soratra : {`${props.soratra}`}</p>
      </>
   )
}

function ClockToString(props){
   return (
      <p>Il est {`${props.dateAnim.toLocaleTimeString()}`}</p>
   )
}
function UpdateClockEachSec(){
      reactDom.render(
         <ClockToString dateAnim={new Date()} />,
      document.getElementById('rootTest')
   );
}

function Component(props){
   const [date, setDate] = useState(new Date());
   const [soratra, setSoratra] = useState('1');
   const [isVisible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!isVisible)
   }
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
            <Clock date={date} soratra={soratra}/>
            <button onClick={() => setDate(new Date()) }>Show Date</button>
            <br></br>
            <button onClick={() => setSoratra('2') }>Miova</button>
         </p>
         <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
            Learn {props.name}
         </a>

         <br></br>
         <br></br>
         <br></br>

         <TimeToDate isVisible={isVisible} tsiory />
         <br></br>
         <br></br>
         {isVisible ? <button onClick={toggleVisibility}>Hidden</button> : <button onClick={toggleVisibility}>Show</button>}
         <br></br>
         <br></br>

         
      </>
   );
}

setInterval(UpdateClockEachSec, 1000);

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
