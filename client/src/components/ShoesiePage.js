import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from 'axios'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: "flex",
    paddingTop: "10px",
    paddingBottom: "10px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 600
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  header: {
    fontSize: "30px",
    fontFamily: "Quicksand",
    color: "black",
    textAlign: "center"
  }
});
class ShoesieFaves extends React.Component {

  state = {
    shoes: [],
    user: {
      wishList: []
    }
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data,
      wishList: response.data
    })
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/shoelist/')
    this.setState({
      shoes: response.data,
    })
    this.getUser()
  }

  handleAdd = async (shoe) => {
    const userId = this.props.match.params.userId
    await axios.put(`/api/users/${userId}`, { aNewShoe: shoe._id })
    await this.getUser()
  }

  render() {
    const { classes } = this.props;
    // const userId = this.props.match.params.userId
    const favesList = this.state.shoes.map((shoe, i) => {

      return (
        <GridListTile key={i}>
          <img src={shoe.img} alt={"A Neat Shoe"} />
          <GridListTileBar
            title={shoe.brand}
            subtitle={shoe.name}
            actionIcon={
              // <Link to={`/user/${userId}`}>
              <IconButton>
                <StarBorderIcon
                  onClick={() => this.handleAdd(shoe)}
                  className={classes.title}
                  style={{ color: "#f1f1f1" }}
                  value='shoe'
                />
              </IconButton>
              // </Link>
            }
          />
        </GridListTile>
      )
    })

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div" className={classes.header}>
              Top Picks
            </ListSubheader>
          </GridListTile>
          {favesList}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(ShoesieFaves);
