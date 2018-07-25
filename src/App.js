import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HalfPage from './components/HalfPage';
import HalfPage2 from './components/HalfPage2';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HalfPage>
          {this.props.children}
        </HalfPage>
        <HalfPage2>
          {this.props.children}
        </HalfPage2>
      </div>
    );
  }
}

export default App;
