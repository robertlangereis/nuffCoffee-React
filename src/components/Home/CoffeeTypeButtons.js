import React from 'react';
import NuffCoffeeCup from './NuffCoffeeCup';

function CoffeeTypeButtons(props){
    const coffeetypes = props.coffeetypes
    // props && console.log('coffeetypes', coffeetypes);
    // console.log(coffeetypes.map(coffee => coffee))
    // console.log(coffeetypes.filter(coffee => console.log(coffee.coffeeName)))

    return (<div>
      <div className="coffeemenu">
   {coffeetypes && coffeetypes.slice(0,6).map(coffee => <button className="coffee__btn">{coffee.coffeeName}</button>)}
        
        {/* <button className="menu__btn">About</button> */}
        {/* <button className="menu__btn">Count</button> */}
      </div>
    </div>)
  }
export default CoffeeTypeButtons;