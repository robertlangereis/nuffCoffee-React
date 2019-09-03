import { GET_COFFEE } from '../actions/coffee'
import { USER_LOGOUT } from '../actions/users'

/*
The state will contain the coffe log in an object with the coffee ID as key
*/

export default (state = null, { type, payload }) => {
  switch (type) {

    case USER_LOGOUT:
      return null

    case GET_COFFEE:
      return state = payload

    default:
      return state
  }
}
