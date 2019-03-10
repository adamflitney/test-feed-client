import React, { Component } from 'react';
import './App.css';
import UserFeed from './components/UserFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <UserFeed></UserFeed>
        </header>
      </div>
    );
  }
}

export default App;
