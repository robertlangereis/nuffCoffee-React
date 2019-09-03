import { USER_LOGOUT } from '../actions/users'
import { GET_COFFEETYPES } from '../actions/coffeeType';

/*
The state will contain the events in an object with the event ID as key
*/

export default (state = null, { type, payload }) => {
  switch (type) {

    case USER_LOGOUT:
      return null

    case GET_COFFEETYPES:
      return payload.reduce((coffees, coffeetype) => {
        coffees[coffeetype.id] = coffeetype
        return coffees
      }, {})
    default:
      return state
  }
}
