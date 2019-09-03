import { ADD_COFFEE, GET_COFFEES, UPDATE_COFFEE_SUCCESS } from '../actions/coffee'
import { USER_LOGOUT } from '../actions/users'

/*
The state will contain the events in an object with the event ID as key
*/

export default (state = null, { type, payload }) => {
  switch (type) {

    case USER_LOGOUT:
      return null

    case ADD_COFFEE:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_COFFEE_SUCCESS:
      return {
        ...state,
        [payload.id]: payload
      }

    case GET_COFFEES:
      return payload.reduce((coffees, coffeetype) => {
        console.log(coffees)
        // coffees[coffeetype.id] = coffeetype
        return coffees
      }, {})
    default:
      return state
  }
}
