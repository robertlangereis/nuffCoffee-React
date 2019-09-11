import {UPDATE_PROFILE } from '../actions/users'

/*
The state will contain the users in an object with the event ID as key
*/

export default (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_PROFILE:
      return payload.reduce((users, user) => {
        users[user.id] = user
        console.log('user', user);
        return user
      }, {})

    default:
      return state
  }
}
