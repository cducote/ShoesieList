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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
    fontFamily: "Damion",
    textAlign: "center",
    color: "black"
  },
  pos: {
    marginBottom: 12,
  },
};

function LoginCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <br/><br/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <Link to={'/users'}>Login</Link> 
        </Typography>
        <br/><br/>
      </CardContent>
    </Card>
  );
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);
