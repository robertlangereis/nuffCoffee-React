import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

const SignupPage =()=> {
	
	const dispatch = useDispatch();
	const registered = useSelector(state => state.signup)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if (registered.success) {
		  setSuccess(true)
		}
	  })
	
	const handleSubmit = ({email, password}) => {
		dispatch(signup(email, password))
	}
		return (
			success ? <Redirect to="/login" /> :
				<div>
				<h1>Sign up</h1>

				<SignupForm onSubmit={handleSubmit} />

				<p style={{color:'red'}}>{ signup.error }</p>
			</div>
		)
	}
export default SignupPage