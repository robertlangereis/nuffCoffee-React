import React, { useEffect } from 'react'
import NuffCoffee from './NuffCoffee';
import CoffeeTypeButtons from './CoffeeTypeButtons';
import SuccessLogin from './SuccessLogin';
import { getCoffeetypes } from '../../actions/coffeeType';
import { getUsers } from '../../actions/users';
import { getUserProfile } from '../../actions/users';
import { useSelector, useDispatch } from 'react-redux';
import { userId } from '../../jwt'

function Home() {

  const coffeetypes = useSelector(state => state.coffeetypes)
  const authenticated = useSelector(state => state.currentUser !== null)
  const currentUser = useSelector(state => state.currentUser)
  const user = useSelector(state => state.user)
  const userIdentifier = useSelector(state => {
    state.currentUser && userId(state.currentUser.jwt)
  })
  // const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (authenticated) {
      // if (users === null) dispatch(getUsers())
      if (user === null) dispatch(getUserProfile())
    }
    if (coffeetypes === null) dispatch(getCoffeetypes())
    // return () => {
    //     console.log(`"I'm removing anything that was setup above" the last count was ${count}.`)
    // }
  })
  
  coffeetypes && console.log(coffeetypes.map(coffee => coffee))

  return (
    <div className="home">
      <h1 className="logo">nuffCoffee...?</h1>
      {currentUser && <SuccessLogin currentuser={currentUser} />}
      <NuffCoffee />
      {user && <CoffeeTypeButtons coffeetypes={user.coffeetypes} />}
      {!user && <CoffeeTypeButtons coffeetypes={coffeetypes} />}
      {<div className="menu">
        <button className="menu__btn">Counter</button>
        <button className="menu__btn">Profile</button>
        <button className="menu__btn">About</button>
      </div>}
    </div>)
}

export default Home;
// class Home extends React.Component {

//   componentDidMount() {
//     if (this.props.authenticated) {
//       if (this.props.users === null) this.props.getUsers()
//       if (this.props.user === null) this.props.getUserProfile()
//     }
//     if (this.props.coffeetypes === null) this.props.getCoffeetypes()
//   }
//   render() {
//     const {coffeetypes, users, authenticated, userId, user, currentUser} = this.props
//     coffeetypes && console.log(coffeetypes.map(coffee => coffee))

//     return(
//     <div className="home">   
//       <h1 className="logo">nuffCoffee...?</h1>
//       {this.props.currentUser && <SuccessLogin currentuser={currentUser}/>}
//       <NuffCoffee/>
//       {this.props.user && <CoffeeTypeButtons coffeetypes={user.coffeetypes}/>}
//       {!this.props.user && <CoffeeTypeButtons coffeetypes={coffeetypes}/>}
//       {<div className="menu">
//         <button className="menu__btn">Counter</button>
//         <button className="menu__btn">Profile</button>
//         <button className="menu__btn">About</button>
//       </div>}
//     </div>)}
// }
// const mapStateToProps = state => ({
//   coffeetypes: state.coffeetypes,
//   authenticated: state.currentUser !== null,
//   currentUser: state.currentUser,
//   userId: state.currentUser && userId(state.currentUser.jwt),
//   users: state.users,
//   user: state.user
// })
// const mapDispatchToProps = {
//   getCoffeetypes, getUsers, getUserProfile
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Home);
