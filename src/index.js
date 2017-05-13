import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from './components/global/Navigation';
import Contact from './components/pages/Contact';
import Support from './components/pages/Support';
import Channels from './components/pages/Channels';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )
//
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const Site = () => (
  <Router>
    <div>
      <Navigation />
      <hr/>

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
