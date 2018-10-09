import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Header from './Header'


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
          Stuff
        <BottomNav/>
      </div>
    );
  }
}

export default Home;