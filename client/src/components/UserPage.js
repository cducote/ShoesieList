import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import axios from 'axios'

const Body = styled.div`
  display: column;
  padding: 50px;
`;
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

    const wishListCard = this.state.wishList.map(( shoe, i ) => {
      return (
        <Card className={classes.card} key={i}>
          <CardContent className={classes.cardcontent}>
            <Typography>
            {shoe.name}
            </Typography>
          </CardContent>
        </Card>
      )
    })

    return (
      <Body>
        <Card className={classes.card}>
          <CardContent className={classes.cardcontent}>
          <Typography>
               <Avatar
                alt="Username"
                src={"https://i.imgur.com/3nmeUWN.jpg"}
              />
            </Typography>
            <Typography>
            {this.state.user.name}
            </Typography>
          </CardContent>
        </Card>
        {wishListCard}

        <div>
          <Link to={'/shoesiefaves'}>Shoesie Faves</Link>
        </div>
      </Body>
    );
  }
}
UserPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserPage);
