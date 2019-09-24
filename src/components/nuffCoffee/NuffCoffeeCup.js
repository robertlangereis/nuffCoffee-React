import React from 'react';
// import React, { useEffect, useState, useSelector, useDispatch } from 'react';
import Coffeestart from '../images/coffeestart.svg'
import Coffee1shot from '../images/coffee1shot.svg'
import Coffee2shot from '../images/coffee2shots.svg'
import Coffee3shot from '../images/coffee3shots.svg'
import Coffee4shot from '../images/coffee4shots.svg'
import Coffee5shot from '../images/coffee5shots.svg'
// import GET_COFFEETYPES from '../../reducers/coffeetypes'

// function Setup(){
//   const [coffees] = useState(props.coffees);
//   const dispatch = useDispatch();

//   const Coffee = (props) => {

//     useEffect(() => {
  // if(props.coffetypes === null) this.props.getCoffeetypes()
//     }, [props.coffetypes])
//   }

//   useEffect(() => {
//     const coffees = GET_COFFEETYPE(GET_COFFEETYPE) 
//     console.log(coffees)
//     return () => {
//       coffees = 0
//     }
//   }, [coffees])
//   return <div>{console.log(coffees)}</div>
// }

function NuffCoffeeCup (props) {
  // const coffeetypes = useSelector(state => console.log(state.coffees));
  return (<div>
    {/* <Setup /> */}
    <div onClick={props.coffeePlus} className="coffeecupcontainer">
      {props.coffeeCount <= 0 && <img className="coffeecup" src={Coffeestart} alt="nuffcoffeecup" />}
      {props.coffeeCount === 1 && <img className="coffeecup" src={Coffee1shot} alt="nuffcoffeecup-1shot" />}
      {props.coffeeCount === 2 && <img className="coffeecup" src={Coffee2shot} alt="nuffcoffeecup-2shot" />}
      {props.coffeeCount === 3 && <img className="coffeecup" src={Coffee3shot} alt="nuffcoffeecup-3shot" />}
      {props.coffeeCount === 4 && <img className="coffeecup" src={Coffee4shot} alt="nuffcoffeecup-4shot" />}
      {props.coffeeCount === 5 && <img className="coffeecup" src={Coffee5shot} alt="nuffcoffeecup-5shot" />}
      {/* {props.coffeecount===6 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-6shot"/>}
                {props.coffeecount===7 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-7shot"/>}
                {props.coffeecount===8 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-8shot"/>}
                {props.coffeecount>8 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-8shot"/>} */}
    </div>
    {props.coffeeCount > 0 && <div className="buttoncontainer"><button className="minusButton" onClick={props.coffeeMinus}>Scratch that one!</button></div>}
   </div>
   )
  }

export default NuffCoffeeCup;