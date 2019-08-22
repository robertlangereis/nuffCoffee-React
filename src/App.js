import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'
// import TopBar from './components/layout/TopBar'
import Home from './components/Home/Home';
import NuffCoffee from './components/Home/NuffCoffee.js';




class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <nav>
            {/* <TopBar /> */}
          </nav>
          <main className="screen" style={{marginTop:10}}>
            <Route exact path="/about" component={Home} />
            <Route exact path="/nuff" component={NuffCoffee} />
            <Route exact path="/" render={ () => <Redirect to="/about" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
