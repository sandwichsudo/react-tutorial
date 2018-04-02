import React, { Component } from 'react';
import BoardgameShort from './components/BoardgameShort';
import logo from './logo.svg';
import './App.css';
import data from './Data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
        {this.props.data.map((game) =>
            <BoardgameShort
                name={game.name}
                alt={game.name}
                image={game.image}
                maxPlayers={game.maxPlayers}
                minPlayers={game.minPlayers}
                key={game.gameId}
            />
        )}
        </ul>
      </div>
    );
  }
}

App.defaultProps = {
    data: data,
}

export default App;
