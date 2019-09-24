import React, {useState} from 'react'
import './SignupForm.css'

const SignupForm = ({onSubmit})=> {
	const [state, setState] = useState({email: '', password: '', confirmPassword: ''});

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
      <div className="signup-form">
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

  				<label>
            Confirm password
  					<input type="password" name="confirmPassword" value={
  						state.confirmPassword || ''
  					} onChange={ handleChange } />
  				</label>

  				{
  					state.password &&
  					state.confirmPassword &&
  					state.password !== state.confirmPassword &&
  					<p style={{color:'red'}}>The passwords do not match!</p>
  				}

  				<button type="submit">Sign up</button>
  			</form>
      </div>
		)
	}

export default SignupForm