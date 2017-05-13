import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-toggleable-sm navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button" data-toggle="collapse"
          data-target="#globalNavigationToggler"
          aria-controls="globalNavigationToggler"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Kinda Feelin It</Link>

        <div className="collapse navbar-collapse" id="globalNavigationToggler">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/channels" className="nav-link">Channels</Link></li>
            <li className="nav-item"><Link to="/support" className="nav-link">Support</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;
