import React from 'react';
// import React, {useState, useEffect, useDispatch} from 'react';
import NuffCoffeeCup from './NuffCoffeeCup';
// import { getCoffeetypes } from './../../actions/coffeeType.js'

// function GrabCoffee(){
//   console.log("joe")
// const [coffee, setCoffee] = useState('')

// const useFetching = actionArgs => {
//   useEffect( () => {
//     store.dispatch(action(actionArgs)); // does not work
//   })
// }
// useFetching(fetchSomething, useDispatch());


//   useEffect(() => {
//     const coffees = getCoffeetypes()
//     console.log(coffees)
//       return () => {
        
//       };
//     }, [coffee])
//     return <h1>{console.log(coffee)}</h1>
//   }

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
    this.setState({
      coffeecount: this.state.coffeecount + 1
    })
  }
  coffeeCounterMinus = () => {
    const coffeecount = this.state.coffeecount - 1
    this.setState({
      coffeecount: coffeecount
    })
  }
  
  render() {
    const date = new Date();
    // const day = date.getDay();
    const weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const day = weekday[date.getDay()]
    return (<div>
      <div className="counterText">{day}: {this.state.coffeecount} coffee shots</div>
      {this.state.coffeecount===0 && <div className="firstCoffee">GET YOUR FIRST SHOT OF THE DAY!</div> }
      <div className="coffeecupcontainer">
        <NuffCoffeeCup coffeeCount={this.state.coffeecount} coffeeMinus={this.coffeeCounterMinus} coffeePlus={this.coffeeCounterPlus}/>
      </div></div>)
  }
}
export default NuffCoffee;