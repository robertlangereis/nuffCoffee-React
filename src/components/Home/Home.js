import * as React from 'react';
import NuffCoffee from './NuffCoffee';

export default class Home extends React.Component {

  render() {
    
    return<div className="home"> 
      
      <h1 className="logo">nuffCoffee</h1>
      <NuffCoffee/>
      <div className="menu"><button>About</button>
      <button>Home</button>
      <button>History</button></div>
      </div>}
}