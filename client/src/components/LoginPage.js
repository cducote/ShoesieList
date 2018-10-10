import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const Body = styled.div`
  display: column;
  padding: 50px;
`

const UserContainer = styled.div`
  display: colomn;
  font-size: 24px;
`
const UserBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 5px;
  border-radius: 40px;
`


export default class LoginPage extends Component {

  state = {
    users:[],
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  render() {

    const usersList = this.state.users.map((user, i) => {
      return (
        <Link to={`/user/${user._id}`}>
          <UserBox key={i}>
            {user.name}
          </UserBox>
        </Link>
      )
    })

    return (
      <div>
          <Body>
            <UserContainer>{usersList}</UserContainer>
          </Body>
      </div>
    )
  }
}
