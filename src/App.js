import './App.css';
import { useState } from 'react';


function App() {
   const array = [
      {
         'lib': 'ReactJs',
         'link': 'https://fr.reactjs.org/'
      },
      {
         'lib': 'AngularJs',
         'link': 'https://angular.io/'
      },
      {
         'lib': 'VueJs',
         'link': 'https://vuejs.org/'
      }
   ];
   
   const [libraries, setLibraries] = useState(array);
   const [value, setValue] = useState(null);
   const handleOnSubmit = (e) => {
      e.preventDefault();
      setLibraries([...libraries, value]);
   }
   const handleOnChange = (e) => {
      setValue({...value, [e.target.name] : e.target.value})
   }

   return (
      <div className="App">
         <header className="App-header">
            <form onSubmit={handleOnSubmit}>
               <input type="text" name="lib" placeholder='library' onChange={handleOnChange}/>
               <input type="text" name="link" placeholder='link' onChange={handleOnChange}/>
               <button type='submit'>Add</button>
            </form>
            {libraries.map((item) => {
              return  <Library key={item.lib} {...item} />
            })}
         </header>
      </div>
   );
}

function Library(props) {
   return(
      <li><a href={props.link}>{props.lib}</a></li>
   )
}

export default App;
