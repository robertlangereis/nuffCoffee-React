import * as React from 'react';
import NuffCoffee from './NuffCoffee';
import CoffeeTypeButtons from './CoffeeTypeButtons';
import { getCoffeetypes } from '../../actions/coffeeType';
import { getUsers } from '../../actions/users';
import { connect } from 'react-redux';
import {userId} from '../../jwt'


class Home extends React.Component {
  componentDidMount() {
    if (this.props.coffeetypes === null) this.props.getCoffeetypes()
    if (this.props.users === null) this.props.getUsers()
    // if (this.props.usersId === null) this.props.getUsers()
  }
  render() {
    const {coffeetypes, users, authenticated, userId} = this.props
    return(
    <div className="home">   
      <h1 className="logo">nuffCoffee...?</h1>
      <NuffCoffee/>
      {this.props.coffeetypes && <CoffeeTypeButtons coffeetypes={coffeetypes}/>}
      <div className="menu">
        <button className="menu__btn">Home</button>
        <button className="menu__btn">About</button>
        <button className="menu__btn">Count</button>
      </div>
    </div>)}
}
const mapStateToProps = state => ({
  coffeetypes: state.coffeetypes,
  authenticated: state.currentUser !== null,
  currentUser: state.currentUser,
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users
})
const mapDispatchToProps = {
  getCoffeetypes, getUsers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
