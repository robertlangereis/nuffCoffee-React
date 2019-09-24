import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

const LoginPage = () => {
	const dispatch = useDispatch();	
	const currentUser = useSelector(state => state.currentUser)
	const error = useSelector(state => state.login.error)

	const handleSubmit = (data) => {
		dispatch(login(data.email, data.password))
	}
		return (
			currentUser ? <Redirect to="/" /> : 
			<div>
				<h1>Login</h1>

				<LoginForm onSubmit={handleSubmit} />

        { error && 
          <span style={{color:'red'}}>{error}</span> }
			</div>
		)
	}

export default LoginPage
