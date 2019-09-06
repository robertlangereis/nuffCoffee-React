import React, { Component } from 'react';
// import React, { useEffect, useState, useSelector, useDispatch } from 'react';
import Coffeestart from './images/coffeestart.svg'
import Coffee1shot from './images/coffee1shot.svg'
import Coffee2shot from './images/coffee2shots.svg'
import Coffee3shot from './images/coffee3shots.svg'
import Coffee4shot from './images/coffee4shots.svg'
import Coffee5shot from './images/coffee5shots.svg'
// import GET_COFFEETYPES from '../../reducers/coffeetypes'
import { connect } from 'react-redux';
import { getCoffeetypes } from '../../actions/coffeeType';

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

class NuffCoffeeCup extends Component {
  // const coffeetypes = useSelector(state => console.log(state.coffees));
  componentDidMount() {
    this.props.getCoffeetypes()
  }
render(){
  return (<div>
    {/* <Setup /> */}
    <div onClick={this.props.coffeePlus} className="coffeecupcontainer">
      {this.props.coffeeCount <= 0 && <img className="coffeecup" src={Coffeestart} alt="nuffcoffeecup" />}
      {this.props.coffeeCount === 1 && <img className="coffeecup" src={Coffee1shot} alt="nuffcoffeecup-1shot" />}
      {this.props.coffeeCount === 2 && <img className="coffeecup" src={Coffee2shot} alt="nuffcoffeecup-2shot" />}
      {this.props.coffeeCount === 3 && <img className="coffeecup" src={Coffee3shot} alt="nuffcoffeecup-3shot" />}
      {this.props.coffeeCount === 4 && <img className="coffeecup" src={Coffee4shot} alt="nuffcoffeecup-4shot" />}
      {this.props.coffeeCount === 5 && <img className="coffeecup" src={Coffee5shot} alt="nuffcoffeecup-5shot" />}
      {/* {this.props.coffeecount===6 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-6shot"/>}
                {this.props.coffeecount===7 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-7shot"/>}
                {this.props.coffeecount===8 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-8shot"/>}
                {this.props.coffeecount>8 && <img className="coffeecup" src={coffeecup} alt="nuffcoffeecup-8shot"/>} */}
    </div>
    {this.props.coffeeCount > 0 && <div className="buttoncontainer"><button className="minusButton" onClick={this.props.coffeeMinus}>Scratch that one!</button></div>}
   </div>
   )
  }
}
const mapStateToProps = state => ({
  coffeetypes: state.coffeetypes,
})
const mapDispatchToProps = {
  getCoffeetypes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NuffCoffeeCup);