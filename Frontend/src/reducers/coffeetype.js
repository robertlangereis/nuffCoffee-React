import { USER_LOGOUT } from '../actions/users'
import { GET_COFFEETYPE } from '../actions/coffeeType';

/*
The state will contain the coffe log in an object with the coffee ID as key
*/

export default (state = null, { type, payload }) => {
  switch (type) {

    case USER_LOGOUT:
      return null

    case GET_COFFEETYPE:
      return state = payload

    default:
      return state
  }
}
