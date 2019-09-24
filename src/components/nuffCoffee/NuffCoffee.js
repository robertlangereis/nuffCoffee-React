import React, { useState } from 'react'
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

function NuffCoffee(props) {
    
  const [coffeecount, setCoffeecount] = useState(0);
    
    // this.coffeeCounterPlus = this.coffeeCounterPlus.bind(this);
    // this.coffeeCounterMinus = this.coffeeCounterMinus.bind(this);
    
    
    // this.state = {
    //   coffeecount: 0
    // };
  
    
    const coffeeCounterPlus = () => setCoffeecount(prevcount => + prevcount + 1) 
    
    const coffeeCounterMinus = () => setCoffeecount(prevcount => prevcount - 1)
  
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
      <div className="counterText">{day}: {coffeecount} coffee shots</div>
      {coffeecount===0 && <div className="firstCoffee">GET YOUR FIRST SHOT OF THE DAY!</div> }
      <div className="coffeecupcontainer">
        <NuffCoffeeCup coffeeCount={coffeecount} coffeeMinus={coffeeCounterMinus} coffeePlus={coffeeCounterPlus}/>
      </div></div>)
  }

export default NuffCoffee;