import React from 'react';
import NuffCoffeeCup from './NuffCoffeeCup';

class NuffCoffee extends React.Component {
  constructor(props) {
    
    super(props);
    this.coffeeCounterPlus = this.coffeeCounterPlus.bind(this);
    this.coffeeCounterMinus = this.coffeeCounterMinus.bind(this);
    this.state = {
      coffeecount: 0
    };
  }
  coffeeCounterPlus = () => {
    console.log("joe");
    this.setState({
      coffeecount: this.state.coffeecount + 1
    })
  }
  coffeeCounterMinus = () => {
    // console.log('childData', childData);
    // console.log('CALC', (this.state.coffeecount - childData));
    console.log(this.state.coffeecount, "minus step 1")
    const coffeecount = this.state.coffeecount - 1
    console.log('coffeecount', coffeecount);
    this.setState({
      coffeecount: coffeecount
    })
    console.log(this.state.coffeecount, "minus step 2")
  }
  
  render() {
    console.log(this.state.coffeecount, "this.state.coffeecount")
    return (
      <div className="coffeecupcontainer">
        <NuffCoffeeCup coffeeCount={this.state.coffeecount} coffeeMinus={this.coffeeCounterMinus} coffeePlus={this.coffeeCounterPlus}/>
      </div>)
  }
}
export default NuffCoffee;