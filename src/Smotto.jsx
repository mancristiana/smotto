import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './Smotto.css';
import images from './img/smotto';

class Smotto extends Component {
  render() {
    const current = Math.floor((images.length * this.props.percentage) / 100);
    return (
      <div className="Smotto">
        <CSSTransitionGroup
          transitionName="Smotto"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <img
            key={current}
            className="Smotto-img"
            src={images[current]}
            alt="Smotto"
          />
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Smotto;
