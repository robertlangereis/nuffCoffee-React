import * as React from 'react';
import Button from '@material-ui/core/Button';
import NuffCoffee from './NuffCoffee';

export default class Home extends React.Component {

  render() {
    
    return<div className="home"> 
      
      <h1>nuffCoffee</h1>
      <NuffCoffee/>
      <div className="menu"><Button>About</Button>
      <Button>Home</Button>
      <Button>History</Button></div>
      </div>}
}