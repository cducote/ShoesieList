import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 600,
  },
  title: {
    fontSize: 40,
    fontFamily: "Damion",
    textAlign: "center",
    color: "black"
  },
};

function LoginCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Link to={'/login'}>
        <CardContent>
          <Typography className={classes.title}>
            Login
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);
