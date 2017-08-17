import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav-bar" role="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    );
  }
}


