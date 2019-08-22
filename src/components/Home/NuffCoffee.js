import React from 'react';
import NuffCoffeeCup from './NuffCoffeeCup';

class NuffCoffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeecount: 0
    };
  }
  coffeeCounterPlus = () => {
    this.setState({
      coffeecount: this.state.coffeecount + 1
    })
  }
  coffeeCounterMinus = (childData) => {
    console.log('childData', childData);
    console.log(this.state.coffeecount, "this.state.coffeecount")
    this.setState({
      coffeecount: childData
    })
  }

  render() {
    return (
      <div className="coffeecupcontainer">
        <a href="#" onClick={this.coffeeCounterPlus}><NuffCoffeeCup coffeeCount={this.state.coffeecount} coffeeMinus={this.coffeeCounterMinus} /></a>
      </div>)
  }
}
export default NuffCoffee;