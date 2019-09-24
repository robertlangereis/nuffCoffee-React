import React, {useState} from 'react'
import './LoginForm.css'

const LoginForm = ({onSubmit}) => {
	const [state, setState] = useState({email: '', password: ''});

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(state)
	}

	const handleChange = (event) => {
		const {name, value} = event.target
	
		setState({
			...state, [name]: value
		})  
	}
		return (
      <div className="login-form">
  			<form onSubmit={handleSubmit}>
  				<label>
            Email
            <input type="email" name="email" value={
  						state.email || ''
  					} onChange={ handleChange } />
          </label>

  				<label>
            Password
            <input type="password" name="password" value={
  						state.password || ''
  					} onChange={ handleChange } />
          </label>

  				<button type="submit">Login</button>
  			</form>
		  </div>)
	}

export default LoginForm