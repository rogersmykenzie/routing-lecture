import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import {Route, Switch} from 'react-router-dom';
import Account from './components/Account';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/profile/settings" component={Account} />
          <Route path="/profile" component={Profile} />
          <Route path='/' render={() => <h1>404 Page Not Found! Please Contact System Administrator</h1>} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
