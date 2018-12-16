import React, { Component } from 'react';
import './App.css';
import throttle from 'lodash.throttle';
import Timeline from './Timeline';
import Smotto from './Smotto';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
    this.changePercentage = this.changePercentage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.changePercentage, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changePercentage);
  }

  changePercentage(event) {
    this.setState({
      percentage: this.getScrollPercentage()
    });
  }

  getScrollPercentage() {
    let height = this.getDocumentHeight() - window.innerHeight;
    let scrollPosition = window.scrollY;
    return this.getPercentage(scrollPosition, height);
  }

  getPercentage(value, total) {
    return Math.ceil((value / total) * 100);
  }

  getDocumentHeight() {
    let body = document.body;
    let html = document.documentElement;
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  calculateColors(huePercentage) {
    let primaryHue = Math.floor((250 * huePercentage) / 100) + 50;
    let secondaryHue = Math.floor((360 * huePercentage) / 100) + 100;
    return {
      color1: `hsl(${primaryHue}, 80%, 50%)`,
      color2: `hsl(${secondaryHue}, 50%, 60%)`
    };
  }

  render() {
    let { color1, color2 } = this.calculateColors(this.state.percentage);
    let appStyle = {
      backgroundImage: 'linear-gradient(60deg, ' + color1 + ', ' + color2 + ')'
    };
    return (
      <div className="App" style={appStyle}>
        <div className="App-container">
          <div className="App-header">
            <h1>Smotto Growth Interactive Diagram</h1>
            <p>Scroll to preview</p>
          </div>
          <Smotto percentage={this.state.percentage} />
          <Timeline percentage={this.state.percentage} />
        </div>
        <div className="App-height" />
      </div>
    );
  }
}

export default App;
