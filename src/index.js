import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './script.js';

const Site = () => (
  <div className="splash-screen">
    <div className="splash-screen__shadow"></div>
    <canvas className="splash-canvas" id="splashCanvas" width="1500px" height="800px"></canvas>
  </div>
)



ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
