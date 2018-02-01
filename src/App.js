import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.refs.clock.on30MinutesPassed(function(){alert("hadas");})
  }
  
  render() {
    return (
      <div className="App">
        <Clock ref="clock" />
      </div>
    );
  }
}


export default App;
