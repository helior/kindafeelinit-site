import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from './components/global/Navigation';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Support from './components/pages/Support';
import Channels from './components/pages/Channels';

const Site = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path="/" component={Home}/>
      <Route exact path="/channels" component={Channels}/>
      <Route exact path="/support" component={Support}/>
      <Route exact path="/contact" component={Contact}/>
    </div>
  </Router>
)

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
