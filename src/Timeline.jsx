import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  render() {
    const pointerStyle = {
      marginLeft: `${this.props.percentage}%`
    };
    const birthYear = 1995;
    const age = new Date().getFullYear() - birthYear;
    console.log(age);
    const date = birthYear + Math.floor((age * this.props.percentage) / 100);
    return (
      <div className="Timeline">
        <div className="Timeline-axe" />
        <div className="Timeline-pointer" style={pointerStyle}>
          <div className="Timeline-date" style={pointerStyle}>
            {date}
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
