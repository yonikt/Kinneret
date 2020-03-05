import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import MoreInfo from './components/MoreInfo';
import Home from './components/Home';
import About from './components/About';
const axios = require('axios');


export default class App extends Component {


  constructor() {

    super()
    this.state = { data: []}

  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:4000/data" )
    this.setState({ data: response.data })
  }


    render() {

      console.log(this.state.data)

    return (

      <Router>

        <div class="header">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <li><Link to="/home">בית</Link></li>
                <li><Link to="/moreInfo">עובדות מעניינות</Link></li>
                <li><Link to="/about">אודות</Link></li>
              </ul>

            </div>
          </nav>

          <Route exact path="/moreInfo" render={() => <MoreInfo info={this.state.data} />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/home" render={() => <Home data={this.state.data} />} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />

        </div>

      </Router>

    )
  }
}

