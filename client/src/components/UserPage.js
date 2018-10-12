import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import axios from 'axios'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Body = styled.div`
  display: flex;
  margin: 0px;
  justify-content: center;
  
`
const Img = styled.img`
  border-radius: 50%;
  width: 235px;
  height: 235px;
  min-height: 20px;
  @media (max-width: 720px) {
    height: 100px;
    width: 100px;
  }
  
`
const UserInfo = styled.div`
  padding: 20px, 20px, 20px, 0;
  font-size: 30px;
  display: flex;
  flex-grow: 0.65;
  flex-direction: column;
  line-height: 40px;
  align-items: center;
  justify-content: center;
`

const styles = {
  root: {
    minHeight: "40px",
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      height: '30vh'
    }
  },
  bottomhalf: {
    background: "#f1f1f1",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    overflow: "auto",
    maxHeight: "60vh",
    minHeight: "20px",
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      height: '80%'
    }
  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    maxHeight: 85,
    minHeight: 85,
    margin: 2,
  },
  title: {
    fontSize: 40,
    fontFamily: "Damion",
    textAlign: "center",
    color: "black"
  },
  cardcontent: {
    display: "flex",
    alignItems: "center",
  },
  shoename: {
    display: "flex",
    paddingLeft: "65px",
    flexGrow: 2,
    textAlign: "center"
  },
  faves: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "25px"
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};

class UserPage extends React.Component {

  state = {
    user: {
      name: ''
    },
    wishList: [],
    toggleEditView: true
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data,
      wishList: response.data.wishList
    })
  }

  handleChange = async (event) => {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  handleToggleEdit = () => {
    this.setState({ toggleEditView: !this.state.toggleEditView })
  }

  handleDelete = async () => {
    const userId = this.props.match.params.userId
    axios.delete(`/api/users/${userId}`)
    await this.getUser()
  }

  handleSubmit = async (event) => {
    const userId = this.props.match.params.userId
    const user = { ...this.state.user }
    axios.put(`/api/users/${userId}`, this.state.user)
    this.setState({ user })
    await this.getUser()
  }

  componentDidMount = () => {
    this.getUser()
  }

  render() {
    const { classes } = this.props
    const userId = this.state.user._id
    const wishListCard = this.state.wishList.map((shoe, i) => {
      return (
        <Card className={classes.card}>
          <CardContent className={classes.cardcontent}>
            <Typography>
              <Avatar
                alt="shoe"
                src={shoe.img}
              />
            </Typography>

            <div className={classes.shoename}>{shoe.name}</div>

          </CardContent>
        </Card>
      )
    })


    return (
      <div>
        <Body className={classes.root}>
          <div className={classes.img}>
          <Img src={this.state.user.avatar} />
          </div>
          
          <UserInfo>
            {this.state.user.name}

            {this.state.toggleEditView ?
              <IconButton
                variant="fab"
                color="secondary"
                aria-label="Edit"
                className={classes.button}
                onClick={this.handleToggleEdit}>
                <EditIcon />
              </IconButton>
              :
              <form>
                <input type="text" value={this.state.user.name} name='name' onChange={this.handleChange} />
                <input type='submit' onClick={this.handleSubmit} />
              </form>

            }
          </UserInfo>
          <IconButton className={classes.button} aria-label="Delete">
            <Link to={`/users`}>
              <DeleteIcon
                onClick={() => this.handleDelete(userId)} />
            </Link>
          </IconButton>
        </Body>
        <div className={classes.bottomhalf}>
          {wishListCard}
        </div>
        <div className={classes.faves}>
          <div>
            <Link to={`/user/${userId}/shoesiefaves`}> See Chrissys Top Picks </Link>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
UserPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserPage);
