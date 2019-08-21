import React from 'react';
import Button from '@material-ui/core/Button';

// import { Link } from 'react-router-dom'
import NuffCoffeeCup from './NuffCoffeeCup';

class NuffCoffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeecount: 0
    };
  }
  coffeeCounterPlus = () => {
    console.log(this.state.coffeecount)
    this.setState ({
      coffeecount: this.state.coffeecount+1
    }) 
  }
  coffeeCounterMinus = () => {
    console.log(this.state.coffeecount)
    this.setState ({
      coffeecount: this.state.coffeecount-1
    }) 
  }

  render() {
    return(
            <div className="coffeecupcontainer">
              <a onClick={this.coffeeCounterPlus}><NuffCoffeeCup coffee={this.state.coffeecount}/></a>
              <Button className="minusButton" onClick={this.coffeeCounterMinus}>Scratch that last one!</Button>
            </div>)
  }
}
export default NuffCoffee;