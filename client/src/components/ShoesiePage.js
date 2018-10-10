import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
    fontFamily: "Damion",
    color: "black",
    textAlign: "center"
  }
});
class ShoesieFaves extends React.Component {

  state = {
    shoes: {}
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div" className={classes.header}>
              Top Picks
            </ListSubheader>
          </GridListTile>

          <GridListTile>
            <img
              src={
                "https://asphaltgold.de/media/catalog/product/cache/1/image/930x669/0f396e8a55728e79b48334e699243c07/n/e/new-balance-wrl420ea-bone-wrl420ea-1.jpg"
              }
              alt={"Hey"}
            />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton>
                  <StarBorderIcon
                    className={classes.title}
                    style={{ color: "#8B8C8D" }}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(ShoesieFaves);
