import * as request from 'superagent'
import { baseUrl } from '../constants'
import { logout } from './users'
import { isExpired } from '../jwt'

export const ADD_COFFEE = 'ADD_COFFEE'
export const GET_COFFEES = 'GET_COFEEES'
export const GET_COFFEE = 'GET_COFEEE'
export const UPDATE_COFFEE_SUCCESS = 'UPDATE_COFEEE_SUCCESS'

const updateCoffees = coffees => ({
  type: GET_COFFEES,
  payload: coffees
})

const updateCoffee = coffee => ({
  type: GET_COFFEE,
  payload: coffee
})

const addCoffee = coffee => ({
  type: ADD_COFFEE,
  payload: coffee
})

const coffeeUpdateSuccess = () => ({
  type: UPDATE_COFFEE_SUCCESS
})

// GET ALL COFFEES
export const getCoffees = () => (dispatch, getState) => {
  if (getState().coffees) return
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/coffee`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateCoffees(result.body))
    })
    .catch(err => console.error(err))
}

// GET COFFEE BY ID
export const getCoffee = (coffeeId) => (dispatch) => {
  request
    .get(`${baseUrl}/coffees/${coffeeId}`)
    .then(response => {
      if (response.ok) {
        dispatch(updateCoffee(response.body))
      }
      else { return "there was an error loading the coffee" }
    })
    .catch(err => console.error(err))
}

// CREATE COFFEEE LOG
export const createCoffee = (coffeeTypeId, time_added) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/coffees`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({
      coffeeTypeId: 1,
      time_added: 'datum'
    })
    .then(result => {
      if (result.ok) {
        dispatch(addCoffee(result.body))
      }
      else { return "there was an error creating this coffee log" }
    })
    .catch(err => console.error(err))
}
// ADJUST COFFEEE LOG
export const coffeeUpdate = (coffeeId, comments, beans) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .patch(`${baseUrl}/coffees/${coffeeId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({
      comments,
      beans
    })
    .then(_ => dispatch(coffeeUpdateSuccess()))
    .catch(err => console.error(err))
}
