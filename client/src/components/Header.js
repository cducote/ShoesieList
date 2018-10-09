import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  font: 56px 'Damion', cursive;;
  padding-top: 35px;
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>Shoesie WishList</StyledHeader>
    );
  }
}
export default Header