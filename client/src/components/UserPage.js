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


const Body = styled.div`
  display: flex;
  padding: 50px;
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
  card: {
    minWidth: 275,
    maxWidth: 600
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
  }
};

class UserPage extends React.Component {

  state = {
    user: {},
    wishList: []
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data,
      wishList: response.data.wishList.reverse()
    })
  }

  componentDidMount = () => {
    this.getUser()
  }

  render() {
    const { classes } = this.props
    const userId = this.state.user._id
    const wishListCard = this.state.wishList.map(( shoe, i ) => {
      return (
        <Card className={classes.card}>
          <CardContent className={classes.cardcontent}>
          <Typography>
               <Avatar
                alt="shoe"
                src={shoe.img}
              />
            </Typography>
            <Typography>
            {shoe.name}
            </Typography>
          </CardContent>
        </Card>
      )
    })

    return (
      <div>
      <Body>
        <Img src={this.state.user.avatar}/>
        <UserInfo>
          {this.state.user.name}
        </UserInfo>
      </Body>
      
        {wishListCard}
        
        <div>
        <Link to={`/user/${userId}/shoesiefaves`}> Shoesie Faves </Link>
        </div>
      </div>
    );
  }
}
UserPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserPage);
