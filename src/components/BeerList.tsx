import * as React from 'react';
import { Link } from 'react-router-dom';
import Beer from './Beer'


interface Props {
    beers: string[]
}

interface State {
  beers: string[],
  currentBeer: string
};

export default class BeerList extends React.Component<Props, State> {
  state: State = {
    beers: this.props.beers,
    currentBeer: ""
  };

  

  deleteElement = (v: string) => {
    for (var _i = 0; _i <= this.props.beers.length; _i++) {
       if(this.props.beers[_i] === v){
         this.props.beers.splice(_i, 1)
       }
       this.setState({beers: this.props.beers})
    }
  }
  addElement = (v: string) => {
    this.props.beers.push(v);
    this.setState({beers: this.props.beers})
    
  }

  changeCurrentBeer = (text: string) => {
    this.setState({currentBeer: text})
  }

  

  render () {
    return (
      <div>
        <Link to={'/about'}><h2>About</h2></Link>
        <h1>Liste des bières</h1>
        <form>
      <input style={{marginLeft:5}} type="text" placeholder="Beer name"
      value={this.state.currentBeer}
      onChange={e => {
        this.setState({currentBeer: e.target.value})}}/>
      <button style={{marginLeft:5}} type="submit" onClick={e => {
          e.preventDefault();
          this.addElement(this.state.currentBeer);
          this.setState({currentBeer: ""});
        }}>Add Beers</button>
      </form>
        <div>
            <ul >{this.props.beers.map((value, index) => {
          return (<div style={{flexDirection:'row'}}><Beer id={index} name={value} liked={false}></Beer>
          <button onClick ={() => {this.deleteElement(value)}}>Delete</button>
          </div>)
        })}</ul>
        </div>
      </div>
    );
  }
}