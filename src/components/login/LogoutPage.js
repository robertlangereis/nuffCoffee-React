import React, { useEffect, useState } from 'react'
import { logout } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


const LogoutPage = () => {
	const dispatch = useDispatch();
	const [redirect, setRedirect] = useState(false);
	const authenticated = useSelector(state => state.currentUser !== null)
	
	useEffect(() => {
		if(authenticated){
			dispatch(logout())
			setTimeout(()=> setRedirect(true), 1000)
		}
	}, [])
	
	return (redirect
			? 
			<Redirect to="/" />
			:
			<div className="firstCoffee">
				<h1>Logging out...</h1>
			</div>
		)
	}

export default LogoutPage
