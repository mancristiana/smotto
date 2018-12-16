import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import './Smotto.css';
import images from './img/smotto';

class Smotto extends Component {
  render() {
    let current = Math.ceil((images.length * this.props.percentage) / 100);
    current = current === images.length ? current - 1 : current;
    const imageClasses = index =>
      classNames('Smotto-img', { active: current === index });
    return (
      <div className="Smotto">
        {images.map((img, index) => (
          <img
            key={index}
            className={imageClasses(index)}
            src={img}
            alt="Smotto"
          />
        ))}
      </div>
    );
  }
}

export default Smotto;
