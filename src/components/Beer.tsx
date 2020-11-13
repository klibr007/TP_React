import * as React from 'react';


interface Props {
    id: number,
    name: string,
    liked: boolean
}

interface State {
 
};

export default class Beer extends React.Component<Props, State> {

  state: State = {
   
  };

  
  render () {
    return (
      
    <li>{this.props.name}</li>
    );
  }
}