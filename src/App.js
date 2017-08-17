import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import Explore from './components/Explore'
import Profile from './components/Profile'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/profile" component={Profile}/>
        </Layout>
      </Router>
    );
  }
}
