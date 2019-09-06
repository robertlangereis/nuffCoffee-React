import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'
import Home from './components/Home/Home';
import NuffCoffee from './components/Home/NuffCoffee.js';
import {RemoveScrollBar} from 'react-remove-scroll-bar';




class App extends Component {
  
  render() {
    return (
      <Router>
      <RemoveScrollBar />
        <div>
          <nav>
            <TopBar />
          </nav>
          <main className="screen">
          <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/coffeecount" component={Home} />
            <Route exact path="/nuff" component={NuffCoffee} />
            <Route exact path="/" render={ () => <Redirect to="/coffeecount" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
