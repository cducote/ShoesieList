import React, { Component } from 'react';
import LoginCard from './LoginCard';
import LoginContainer from './LoginContainer';
import BottomNav from './BottomNav';
import styled from 'styled-components'

const StyledInfo = styled.div`
  display: flex;
  padding: 20px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
class Home extends Component {
  render() {
    return (
      <div>
        <Body>
            <StyledInfo>
              This App will help you keep your eye on the prize, in this case, shoe.<br/>
              Login to create a profile, and checkout my top picks to add to your wishlist.
            </StyledInfo>
        </Body>
        <LoginContainer>

          <LoginCard />
        </LoginContainer>
        <BottomNav />
      </div>
    );
  }
}

export default Home;