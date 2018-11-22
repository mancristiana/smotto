import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  render() {
    const pointerStyle = {
      marginLeft: `${this.props.percentage}%`
    };
    return (
      <div className="Timeline">
        <div className="Timeline-axe" />
        <div className="Timeline-pointer" style={pointerStyle} />
      </div>
    );
  }
}

export default Timeline;
