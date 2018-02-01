import React, { Component } from 'react';
import ElevationBorder from './ElevationBorder';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this._on30MinutesPassedCallBack = [];
    this.state = { date: new Date() };
  }

  on30MinutesPassed(callback) {
    this._on30MinutesPassedCallBack.push(callback);
  };

  raise30MinutesPassed() {
    this._on30MinutesPassedCallBack.forEach(callbackFunc => {
      if (callbackFunc) {
        callbackFunc(this.state);
      }
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    //to test change to 1 minute - remove * 30
    setTimeout(() => { this.raise30MinutesPassed() }, 1000 * 60 * 30);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    var date = this.state.date;
    if (date.getMonth() < 8 && date.getFullYear() >= 2017) {
      return (
        <div>
          <h1>Hello, Cohort 5!</h1>
          <ElevationBorder>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </ElevationBorder>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Clock;