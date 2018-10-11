import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});


class NewUserForm extends Component {
  state = {
    users: [],
    newUser: {
      name: '',
      avatar: '',
      wishList: []
    }
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  handleChange = (e) => {
    const newUser = { ...this.state.newUser }
    newUser[e.target.name] = e.target.value
    this.setState({ newUser })
  }

  handleSubmit = async (e) => {
    const response = await axios.post('/api/users', this.state.newUser)
    // call update users with new user
    const users = [ ...this.state.users ]
    users.push(response.data)
    this.setState({ users })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.margin}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8} alignItems="center">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="User Name" name='name' value={this.state.newUser.name} onChange={this.handleChange} />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="Avatar Link" name='avatar' value={this.state.newUser.avatar} onChange={this.handleChange}/>
                </Grid>
            <Grid Item>
              <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button} type='submit' >
                <AddIcon onClick={this.props.toggleNew}/>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}


export default withStyles(styles)(NewUserForm)