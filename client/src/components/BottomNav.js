import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';

const styles = {
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
};

class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  goHome = () => {
    this.setState({ redirect: true })
  }

  goBack = () => {
    console.log(window.history)
    window.history.back()
  }



  render() {
    const { classes } = this.props;
    const { value } = this.state;
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Go Back" icon={<RestoreIcon />} onClick={() => { this.goBack() }} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => { this.goHome() }} />
        <BottomNavigationAction label="Add to Wish List" icon={<FavoriteIcon />} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);