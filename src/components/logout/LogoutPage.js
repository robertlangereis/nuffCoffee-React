import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/users'
import { Redirect } from 'react-router-dom'

class LogoutPage extends PureComponent {

	state = {
		redirect: false
	  }

	componentWillMount() {
		this.props.logout()
		this.id = setTimeout(() => this.setState({ redirect: true }), 1000)

	}
	componentWillUnmount() {
		clearTimeout(this.id)
	  }

	render() {
		return (this.state.redirect
			? 
			<Redirect to="/" />
			:
			<div className="firstCoffee">
				<h1>Logging out...</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps, { logout })(LogoutPage)
