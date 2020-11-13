import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './components/BeerList'
import { Route, Link } from 'react-router-dom';
import About from './components/About'

function App() {
  return (
  
    <div>

        <Route exact path="/" ><BeerList beers={[]}></BeerList></Route>
        <Route path="/about" component={About}></Route>
        
        
      
    </div>

    
  );
}
/*return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
}*/

export default App;
