import React, { Component } from 'react';
import auth from '../auth'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

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
    card: {
      marginTop: 100,
    },
    button: {
      marginTop: 15,
      marginLeft: 50,
      marginright: 50,
      marginBottom: 10,
    }
  });

  class Login extends Component {
    state = {
        email: '',
        password: '',
      };
      
      //Autenticación para ingresar a la pagina principal
      authEmailPass = () => {
        const userData = {email:this.state.email, password:this.state.password}
        auth.login(userData, () => this.props.history.push('/'))
      }

      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    //Form de ingreso  
    render() {
        const {classes} = this.props
        return (
            <div>
                <Grid container justify='center'>
                    <Grid item lg={2}>
                        <Card className={classes.card}>
                            <TextField
                                id="standard-email-input"
                                label="E-Mail"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-name"
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
                            />
                            <div>
                                <Button onClick={this.authEmailPass} variant="contained" color="primary" className={classes.button}>
                                    Ingresar
                                </Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>        
        )
    }
}

export default withStyles(styles)(Login);