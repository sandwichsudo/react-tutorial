import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data';

class App extends Component {
  render() {
    const game = this.props.data[0];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h2>{game.name}</h2>
          <h3>{game.minPlayers} - {game.maxPlayers} players</h3>
          <img alt={game.name} src={game.image} width="200"/>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
    data: data,
}

export default App;
