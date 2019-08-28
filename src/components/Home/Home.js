import * as React from 'react';
import NuffCoffee from './NuffCoffee';

export default class Home extends React.Component {

  render() {
    
    return(
    <div className="home">   
      <h1 className="logo">nuffCoffee</h1>
      <NuffCoffee/>
      <div className="menu">
        <button className="menu__btn">Home</button>
        <button className="menu__btn">About</button>
        <button className="menu__btn">Count</button>
      </div>
    </div>)}
}