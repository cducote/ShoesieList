import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder'

const styles = theme => ({
  root: {
    display: 'flex',
    paddingTop: "80px",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div" variant={"h4"}>Wish List</ListSubheader>
        </GridListTile>
       
          <GridListTile>
            <img src={"https://asphaltgold.de/media/catalog/product/cache/1/image/930x669/0f396e8a55728e79b48334e699243c07/n/e/new-balance-wrl420ea-bone-wrl420ea-1.jpg"} alt={"Hey"} />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} style={{color: '#8B8C8D'}} />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={"https://mk0barbendl86qlfmi9n.kinstacdn.com/wp-content/uploads/2018/04/Screenshot-2018-04-05-at-6.33.10-PM.png"} alt={"Hey"} />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={"https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/06/mens-street-style-adidas-ultra-boost-1.0-cream-1170x599.jpg"} alt={"Hey"} />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={"https://sc02.alicdn.com/kf/HTB1ydlZLXXXXXX5XFXXq6xXFXXXu/sports-shoes-Latest-design-cool-shoes-women.jpg"} alt={"Hey"} />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={"https://sneakerstudio.com/eng_pl_Mens-Shoes-sneakers-adidas-Originals-La-Trainer-CQ2277-14072_1.jpg"} alt={"Hey"} />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={"https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/07/Vans-Old-Skool-Trainers-All-You-Need-To-Know-1170x657.jpg"} alt={"Hey"} />
            <GridListTileBar
              title={"Hey"}
              subtitle={<span>It's Bill</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
