import React, { Component } from 'react';
import LoginCard from './LoginCard';
import LoginContainer from './LoginContainer';
import Header from './Header'
import BottomNav from './BottomNav';

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