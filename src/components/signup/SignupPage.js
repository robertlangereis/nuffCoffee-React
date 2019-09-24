import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

const SignupPage =()=> {
	
	const dispatch = useDispatch();
	const signup = useSelector(state => state.signup)
	useEffect(() => {
		if (signup.success) return (
			<Redirect to="/" />
		)
	  })

	const handleSubmit = ({email, password}) => {
		dispatch(signup(email, password))
	}

		return (
			<div>
				<h1>Sign up</h1>

				<SignupForm onSubmit={handleSubmit} />

				<p style={{color:'red'}}>{ signup.error }</p>
			</div>
		)
	}
export default SignupPage

// import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
// import {signup} from '../../actions/users'
// import SignupForm from './SignupForm'
// import {Redirect} from 'react-router-dom'

// class SignupPage extends PureComponent {
// 	handleSubmit = (data) => {
// 		this.props.postSignup(data.email, data.password)
// 	}

// 	render() {
// 		if (this.props.signup.success) return (
// 			<Redirect to="/" />
// 		)

// 		return (
// 			<div>
// 				<h1>Sign up</h1>

// 				<SignupForm onSubmit={this.handleSubmit} />

// 				<p style={{color:'red'}}>{ this.props.signup.error }</p>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = function (state) {
// 	return {
// 		signup: state.signup
// 	}
// }

// export default connect(mapStateToProps, {postSignup: signup})(SignupPage)