import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardgamesList from './components/BoardgamesList';
import BoardgamesLong from './components/BoardgamesLong';
import logo from './logo.svg';
import './App.css';
import data from './Data';

function getProductProps(props, productData) {
    return productData.filter((game) => game.gameId.toString() === props.match.params.gameId)[0];
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route
            exact
            path="/" 
            render={ () => <BoardgamesList data={data} /> }
          />
        
          <Route
            exact
            path="/details/:gameId"
            render={ (props) => <BoardgamesLong {...getProductProps(props, data) } /> }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
