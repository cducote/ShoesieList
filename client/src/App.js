import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Header from './components/Header'
import BottomNav from './components/BottomNav';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={LoginPage} />
            {/* <Route exact path='/' */}
          </Switch>
          <BottomNav/>
          </div>
        </Router>
    );
  }
}

export default App;
