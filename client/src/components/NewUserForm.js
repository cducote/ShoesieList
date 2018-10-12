import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
};

const formStyle = {
  display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

class NewUserForm extends Component {
  state = {
    users: [],
    newUser: {
      name: '',
      avatar: '',
      wishList: []
    }
  }

  handleChange = (e) => {
    const newUser = { ...this.state.newUser }
    newUser[e.target.name] = e.target.value
    this.setState({ newUser })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/api/users', this.state.newUser)
    this.props.getUsers()
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={formStyle}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8} style={formStyle}>
            <Grid item style={formStyle}>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="User Name" name='name' value={this.state.newUser.name} onChange={this.handleChange} />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="Avatar Link" name='avatar' value={this.state.newUser.avatar} onChange={this.handleChange}/>
                </Grid>
            <Grid Item>
              <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button} type='submit'>
                <AddIcon/>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}


export default withStyles(styles)(NewUserForm)