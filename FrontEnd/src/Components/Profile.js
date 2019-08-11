import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import auth from '../auth'



const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent:'space-around',
        overFlow:'hidden',
        backgroundColor: '#8F69C6',
        marginTop: 66,
        padding: 20
    },
    gridList:{
        width: 250,
        height: 250
    },
    GridListTileBar: {
        width: 100
    },
    button: {
        margin: theme.spacing(),
        marginBottom: -19
    },
    margin: {
        color: '#1C90F1'
      }
});


class Profile extends Component {
    
    state= {
        likes: null,
    }

    componentDidMount(){
        this.likes()
        // console.log(this.state.likes)
        // console.log(auth.user.uid)
   
    }

    //Fetch likes a la base de datos DELETE
        // removeImage = (photo) => {
        //     const url = 'http://localhost:3700/likes/user';
        //     const data = {
        //                 idPhoto: photo.id
        //                 };
    
            
        //     fetch(url, {
        //         method: 'DELETE',
        //         body: JSON.stringify(data),
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //     })  
        //     .then(res => res.json())
        //     // .then(remove => {
        //     //     if(remove === true) {
        //     //          //Cambio de color  
        //     //     } else {
        //     //         console.log('No')
        //     //     }
        //     // })
        //     .catch(error => console.error('Error:', error))
        //     .then(response => console.log('Success:', response));
        // } 

    //Fetch a la base de datos GET
    likes = () => {
        fetch(`http://localhost:3700/likes/user/${auth.user.uid}`)
        .then(response => response.json())
        .then(json => this.setState({likes: json.response},()=>console.log(this.state)))
    }
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc', padding: 30}}>
                    {
                        (this.state.likes !== null)
                        ?
                        (
                            <GridList cellHeight={300} col={3}>
                                {console.log(this.state)}
                                {this.state.likes.map(like => (
                                    <GridListTile key={like.id}>
                                    <img src={like.url} alt={like}/>
                                        <GridListTileBar                                                                                  
                                            actionIcon={                                 
                                                <IconButton aria-label="delete" className={classes.margin} /*onClick={() => this.removeImage()}*/>
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                        />                                         
                                    </GridListTile>
                                ))}
                            </GridList>
                        )
                        :
                        'Loading...'
                    }
                 
                </Container>
            </div>
    )
    }
}; 

export default withStyles(styles)(Profile)