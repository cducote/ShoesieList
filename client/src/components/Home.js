import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Header from './Header'
import LoginCard from './LoginCard';
import LoginContainer from './LoginContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
          <LoginContainer>
          <LoginCard/>
          </LoginContainer>
        <BottomNav/>
      </div>
    );
  }
}

export default Home;