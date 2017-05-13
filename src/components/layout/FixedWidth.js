import React, { Component } from 'react';

class FixedWidth extends Component {
  render() {
    return (
      <div className="layoutFixedWidth">
        {this.props.children}
      </div>
    )
  }
}

export default FixedWidth;
