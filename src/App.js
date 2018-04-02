import React, { Component } from 'react';
import BoardgameShort from './components/BoardgameShort';
import logo from './logo.svg';
import './App.css';
import data from './Data';

class App extends Component {
  render() {
    const game = this.props.data[0];
    const anotherGame = this.props.data[1];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BoardgameShort
            name={game.name}
            alt={game.name}
            image={game.image}
            maxPlayers={game.maxPlayers}
            minPlayers={game.minPlayers}
        />
        <BoardgameShort
            name={anotherGame.name}
            alt={anotherGame.name}
            image={anotherGame.image}
            maxPlayers={anotherGame.maxPlayers}
            minPlayers={anotherGame.minPlayers}
        />
      </div>
    );
  }
}

App.defaultProps = {
    data: data,
}

export default App;
