import * as React from 'react';
import NuffCoffee from './NuffCoffee';
import CoffeeTypeButtons from './CoffeeTypeButtons';
import SuccessLogin from './SuccessLogin';
import { getCoffeetypes } from '../../actions/coffeeType';
import { getUsers } from '../../actions/users';
import { getUserProfile } from '../../actions/users';
import { connect } from 'react-redux';
import {userId} from '../../jwt'


class Home extends React.Component {
  componentDidMount() {
    if (this.props.authenticated) {
    if (this.props.coffeetypes === null) this.props.getCoffeetypes()
    if (this.props.users === null) this.props.getUsers()
    if (this.props.user === null) this.props.getUserProfile()
    }
  }
  render() {
    const {coffeetypes, users, authenticated, userId} = this.props
    return(
    <div className="home">   
      <h1 className="logo">nuffCoffee...?</h1>
      {this.props.currentUser && <SuccessLogin currentuser={this.props.currentUser}/>}
      <NuffCoffee/>
      {this.props.user && <CoffeeTypeButtons coffeetypes={ this.props.user.coffeetypes}/>}
      {/* <div className="menu">
        <button className="menu__btn">Home</button>
        <button className="menu__btn">About</button>
        <button className="menu__btn">Count</button>
      </div> */}
    </div>)}
}
const mapStateToProps = state => ({
  coffeetypes: state.coffeetypes,
  authenticated: state.currentUser !== null,
  currentUser: state.currentUser,
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users,
  user: state.user
})
const mapDispatchToProps = {
  getCoffeetypes, getUsers, getUserProfile
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
