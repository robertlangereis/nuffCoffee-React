import * as request from 'superagent'
import { baseUrl } from '../constants'
import { logout } from './users'
import { isExpired } from '../jwt'

export const GET_COFFEETYPES = 'GET_COFFEETYPES'
export const GET_COFFEETYPE = 'GET_COFFEETYPE'

const updateCoffeeTypes = coffeetypes => ({
  type: GET_COFFEETYPES,
  payload: coffeetypes
})

const updateCoffeeType = coffeetype => ({
  type: GET_COFFEETYPE,
  payload: coffeetype
})

// GET ALL COFFEETYPES
export const getCoffeetypes = () => (dispatch, getState) => {
  if (getState().coffeetypes) return
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/coffeetypes`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateCoffeeTypes(result.body))
    })
    .catch(err => console.error(err))
}

// GET COFFEETYPE BY ID
export const getCoffee = (coffeeTypeId) => (dispatch) => {
  request
    .get(`${baseUrl}/coffeetype/${coffeeTypeId}`)
    .then(response => {
      if (response.ok) {
        dispatch(updateCoffeeType(response.body))
      }
      else { return "there was an error loading the coffee" }
    })
    .catch(err => console.error(err))
}
