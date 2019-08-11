import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import auth from '../auth'

//FormStyle
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(),
      marginRight: theme.spacing(),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
      marginTop: 15,
      marginLeft: 70,
      marginright: 50,
      marginBottom: 10,
    },
    card: {
      marginTop: 100,
    }
  });



class Register extends Component {
    state = {
        name: '',
        lastName: '',
        email: '',
        password: '',
      };
      
      authRegisterPass = () => {
        const userData = {email:this.state.email, password:this.state.password}
        auth.register(userData, () => this.props.history.push('/login'))
      }


      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render() {
        const {classes} = this.props;
        const {history} = this.props;

        return (
            <div>
                <Grid container justify='center'>
                  <Grid item lg={2}>
                      <Card className={classes.card}>
                        <TextField
                            id="standard-name-input"
                            label="Name"
                            className={classes.textField}
                            type="text"
                            autoComplete="current-name"
                            margin="normal"
                        /><br/>
                        <TextField
                            id="standard-lastName-input"
                            label="LastName"
                            className={classes.textField}
                            type="text"
                            autoComplete="current-lastName"
                            margin="normal"
                        /><br/>
                        <TextField
                            id="standard-email-input"
                            label="E-mail"
                            className={classes.textField}
                            type="text"
                            autoComplete="current-email"
                            margin="normal"
                            onChange={this.handleChange("email")}
                        /><br/>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange("password")}
                        /><br/>
                        <div>
                            <Button onClick={this.authRegisterPass} variant="contained" color="primary" className={classes.button}>
                                Unirse
                            </Button>
                        </div>
                      </Card>
                      <Link
                        component="button"
                        variant="body2"
                        color="textPrimary"
                        onClick={() => history.push('/login')}
                      >
                      Si ya tienes una cuenta ingresa aqui
                    </Link>
                  </Grid>
                </Grid>
            </div>
            
        )
    }
}

export default withStyles(styles)(Register);