import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import BeerList from './BeerList';


interface Props {
    
}

interface State {
 
};

export default class About extends React.Component<Props, State> {

  state: State = {
   
  };

  
  render () {
    return (
      
      <div>
      <Link to={'/'}><h2>Beers</h2></Link>
            <h1>Auteur du TP</h1>
            <h2>LAFIA-MONWOO David</h2>
        </div>
      
        
    );
  }
}