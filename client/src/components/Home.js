import React, { Component } from 'react';
import BottomNav from './BottomNav';
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: center;
  font: 56px 'Damion', cursive;;
  padding-top: 35px;
`

class Home extends Component {
  render() {
    return (
      <div>
        <Header>Shoesie WishList</Header>
        <BottomNav/>
      </div>
    );
  }
}

export default Home;