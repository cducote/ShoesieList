import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Header from './components/Header'
import BottomNav from './components/BottomNav';
import ShoesiePage from './components/ShoesiePage'
import UserPage from './components/UserPage'


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/users' component={LoginPage} />
                <Route exacty path='/user/:userId' component={UserPage}/>
                <Route exact path='/user/:usuerId/shoelist' component={ShoesiePage}/>
              </Switch>
            <BottomNav/>
          </div>
        </Router>
    );
  }
}

export default App;
