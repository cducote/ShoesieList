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
    newUser: {
      name: '',
      wishList: []
    }
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  handleChange = (e) => {
    const newUser = { ...this.state.newUser }
    newUser[e.target.name] = e.target.value
    this.setState({ newUser })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/users', this.state.newUser)
    const users = [ ...this.state.users ]
    users.push(response.data)
    this.setState({ users })
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
            <UserContainer>
              {usersList}
            </UserContainer>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='name'
                value={this.state.newUser.name}
                onChange={this.handleChange}/>
              
              <input type='submit' value='Create New User'/>
            </form>
          </Body>
      </div>
    )
  }
}
