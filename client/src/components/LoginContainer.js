import React, { Component } from 'react'
import styled from 'styled-components'
import LoginCard from './LoginCard'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`

export default class LoginContainer extends Component {
  render() {
    return (
      <StyledContainer>
        <LoginCard/>
      </StyledContainer>
    )
  }
}
