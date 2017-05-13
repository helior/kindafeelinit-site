import React, { Component } from 'react';
import './FixedWidth.css';

class FixedWidth extends Component {
  render() {
    return (
      <div className="layoutFixedWidth container-fluid">
        {this.props.children}
      </div>
    )
  }
}

export default FixedWidth;
