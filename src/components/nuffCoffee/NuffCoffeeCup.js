import React from 'react';
import Coffeestart from '../images/coffeestart.svg'
import Coffee1shot from '../images/coffee1shot.svg'
import Coffee2shot from '../images/coffee2shots.svg'
import Coffee3shot from '../images/coffee3shots.svg'
import Coffee4shot from '../images/coffee4shots.svg'
import Coffee5shot from '../images/coffee5shots.svg'

const NuffCoffeeCup = ({coffeePlus, coffeeCount, coffeeMinus}) => {
  
  return (<div>
    <div onClick={coffeePlus} className="coffeecupcontainer">
      {coffeeCount <= 0 && <img className="coffeecup" src={Coffeestart} alt="nuffcoffeecup" />}
      {coffeeCount === 1 && <img className="coffeecup" src={Coffee1shot} alt="nuffcoffeecup-1shot" />}
      {coffeeCount === 2 && <img className="coffeecup" src={Coffee2shot} alt="nuffcoffeecup-2shot" />}
      {coffeeCount === 3 && <img className="coffeecup" src={Coffee3shot} alt="nuffcoffeecup-3shot" />}
      {coffeeCount === 4 && <img className="coffeecup" src={Coffee4shot} alt="nuffcoffeecup-4shot" />}
      {coffeeCount === 5 && <img className="coffeecup" src={Coffee5shot} alt="nuffcoffeecup-5shot" />}
      {/* {coffeecount===6 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-6shot"/>}
                {coffeecount===7 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-7shot"/>}
                {coffeecount===8 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-8shot"/>}
                {coffeecount>8 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-8shot"/>} */}
    </div>
    {coffeeCount > 0 && <div className="buttoncontainer"><button className="minusButton" onClick={coffeeMinus}>Scratch that one!</button></div>}
   </div>
   )
  }

export default NuffCoffeeCup;