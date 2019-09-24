import * as request from 'superagent'
import {baseUrl} from '../constants'
import {isExpired} from '../jwt'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const logout = () => ({
  type: USER_LOGOUT
})

const userLoginSuccess = (login) => ({
  type: USER_LOGIN_SUCCESS,
  payload: login
})

const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error || 'Unknown error'
})

const userSignupFailed = (error) => ({
  type: USER_SIGNUP_FAILED,
  payload: error || 'Unknown error'
})

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
})

const updateUsers = (users) => ({
  type: UPDATE_USERS,
  payload: users
})
const updateProfile = (users) => ({
  type: UPDATE_PROFILE,
  payload: users
})

export const login = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
    .send({email, password})
    .then(result => dispatch(userLoginSuccess(result.body)))
    .catch(err => {
    	if (err.status === 400) {
    		dispatch(userLoginFailed(err.response.body.message))
    	}
    	else {
    		console.error(err)
    	}
    })

export const signup = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ email: email, password: password })
		.then(result => {
			dispatch(userSignupSuccess(result.body))
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err, "Joe error @actions/users.js")
			}
		})

export const getUsers = () => (dispatch, getState) => {
  const state = getState()
  const currentuser = state.currentUser
  if (!currentuser ) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/users`)
    .set('Authorization', `Bearer ${jwt}`)
    // .then(result => console.log(result.body))
    .then(result => dispatch(updateUsers(result.body)))
    .catch(err => console.error(err))
}
export const getUserProfile = () => (dispatch, getState) => {
  const state = getState()
  const currentuser = state.currentUser
  if (!currentuser ) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/users`)
    .set('Authorization', `Bearer ${jwt}`)
    // .then(result => console.log(result.body, "RESULT.BODY"))
    .then(result => dispatch(updateProfile(result.body)))
    .catch(err => console.error(err))
}
