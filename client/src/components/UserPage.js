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
  margin: 30px;
  justify-content: center;
`
const Img = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 20%;
  min-height: 20px;
  min-width: 20px;
`
const UserInfo = styled.div`
  padding: 40px, 40px, 40px, 0;
  font-size: 30px;
  display: flex;
  flex-grow: 0.65;
  flex-direction: column;
  line-height: 40px;
  align-items: center;
  justify-content: center;
`

const styles = {
  // root: {
  //   background: "inherit",
  //   height: "50vh"
  // },
  bottomhalf: {
    background: "#f1f1f1",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    overflowY: "auto",
    minHeight: "200px",
    maxHeight: "40vh",
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
  }
};

class UserPage extends React.Component {

  state = {
    user: {},
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

  handleToggleEdit = () => {
    this.setState({toggleEditView: !this.state.toggleEditView})
  }

  handleDelete = async () => {
    const userId = this.props.match.params.userId
    axios.delete(`/api/users/${userId}`)
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
      <div className={classes.root}>
        <Body>
          <Img src={this.state.user.avatar} />
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
                  <input type="text" value={this.state.user.name} />
                  <input type='submit'/>
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
              <Link to={`/user/${userId}/shoesiefaves`}> Shoesie Faves </Link>
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
