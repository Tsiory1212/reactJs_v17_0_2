import './App.css';
import ReactDOM from 'react-dom';

function Component(props){
   return (
      <>
         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn {props.name}
         </a>
      </>
   );
}


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Component name={'Angular'} />
			</header>
		</div>
	);
}

function Techno({lib, link}) {
   return(
      <a href={link}> {lib} </a>
   );
}
function Library({array}){
   return (
      array.map((item) =>{ 
         return (
            <Techno key={item.lib} {...item} />
         )}
      )
   );
}
 
 const array = [
   {
      'lib' : 'ReactJs',
      'link' : 'https://fr.reactjs.org/'
   },
   {
      'lib' : 'AngularJs',
      'link' : 'https://angular.io/'
   },
   {
      'lib' : 'VueJs',
      'link' : 'https://vuejs.org/'
   }
 ];

 ReactDOM.render(
   <Library array={array}/>,
   document.getElementById('rootTest')
 );

export default App;
