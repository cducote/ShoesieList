import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewUserForm from './NewUserForm'

const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  align-items: center;
  height: 30vh;
  overflow: scroll;
  margin-top: 10px;
`
const AddButton = styled.div`
display: flex;
justify-content: center;
`

const UserContainer = styled.div`
  display: column;
  font-size: 24px;
  height: 340px;
`
const PageHead = styled.div`
  text-align: center;
  font-family: "Quicksand";
  font-size: 38px;
`

const styles = {
  card: {
    minWidth: 400,
    maxWidth: 400,
    margin: "4px"
  },
  cardcontent: {
    display: "flex",
  },
  username: {
    display: "flex",
    justifyContent: "center",
    flexGrow: .85,
    alignSelf: "center",
    fontSize: "24px",
    fontFamily: "Quicksand"
  }
};

class LoginPage extends Component {

  state = {
    users: [],
    newUser: {
      name: '',
      avatar: '',
      wishList: []
    },
    toggleNewUserView: true
  }

  getUsers = async() => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  componentDidMount = async () => {
    await this.getUsers()
  }

  toggleNew = () => {
    this.setState({
      toggleNewUserView: !this.state.toggleNewUserView
    })
  }
 
  render() {
    const { classes } = this.props
    const usersList = this.state.users.map((user, i) => {
      return (

        <Link to={`/user/${user._id}`}>
          <Card className={classes.card} key={i}>
            <CardContent className={classes.cardcontent}>
              <Typography>
                <Avatar
                  alt="pic"
                  src={user.avatar}
                />
              </Typography>
              <Typography className={classes.username}>
                {user.name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      )
    })

    return (
      <div>
        <PageHead>
          Users
        </PageHead>
        <Body>
          <UserContainer>
            {usersList}
          </UserContainer>
          
        </Body>
        <AddButton>
          {this.state.toggleNewUserView ?
          <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={this.toggleNew}>
            <AddIcon />
          </Button> :
          <NewUserForm getUsers={this.getUsers} toggleNew={this.toggleNew}/>
          }
        </AddButton>
         </div>
    )
  }
}


export default withStyles(styles)(LoginPage)