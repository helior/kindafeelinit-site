import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './components/app/index/index';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={App}/>
    </div>
  </Router>
)

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
