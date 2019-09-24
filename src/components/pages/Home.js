import React, { useEffect } from 'react'
import NuffCoffee from '../nuffCoffee/NuffCoffee';
import CoffeeTypeButtons from '../layout/CoffeeTypeButtons';
import SuccessLogin from '../login/SuccessLogin';
import { getCoffeetypes } from '../../actions/coffeeType';
import { getUsers } from '../../actions/users';
import { getUserProfile } from '../../actions/users';
import { useSelector, useDispatch } from 'react-redux';
import { userId } from '../../jwt'

function Home() {

  const coffeetypes = useSelector(state => state.coffeetypes)
  const currentUser = useSelector(state => state.currentUser)
  const authenticated = useSelector(state => state.currentUser !== null)
  const user = useSelector(state => state.user)
  const userIdentifier = useSelector(state => {
    state.currentUser && userId(state.currentUser.jwt)
  })
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (authenticated) {
      if (user === null) dispatch(getUserProfile())
    }
    if (coffeetypes === null) dispatch(getCoffeetypes())
  })

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