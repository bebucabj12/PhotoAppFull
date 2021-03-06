import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import auth from '../auth'


const client_id= 'f11998046de9cb5ba7980a14ccaef27080a48be3429a331206698471ce09a6bd'

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent:'space-around',
        overFlow:'hidden',
        
        marginTop: 66,
        padding: 20
    },
    gridList:{
        width: 250,
        height: 250
    },
    card: {
        maxWidth: 400,
    },
    actions: {
        display: 'flex',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    GridListTileBar: {
        width: 100
    },
    button: {
        margin: theme.spacing(),
        marginBottom: -19
    },
    likeColor: {
        color: '#F99CAA'
    },
    likeColorChange: {
        color:'#6E0D1E'
    },
 })


class LandingPage extends Component {

    state= {
        photos: null,
        pagina: 1,
        login: false,
        likeColor: '#F99CAA',
        likeColorChange: '#6E0D1E',
        like: true,
    }    
    
    componentDidMount(){
        this.images()
    }

    //FETCH A LA API
    images = () => {
        fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${this.state.pagina}`)
        .then(response => response.json())
        .then(json => this.setState({photos: json}))
    }
    
    //Fetch likes a la base de datos POST
    likesImage = (photo) => {
        const url = 'http://localhost:3700/likes/user';
        const data = {
                    idUsername: auth.user.uid,
                    idPhoto: photo.id,
                    url: photo.urls.small
                    };

        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })  
        .then(res => res.json())
        .then(like => {
            if(like !== true) {
                //Cambio de color
                this.handleChange(data.idPhoto, this.state.likeColor)
                console.log('Apreto like')
                console.log('photoId:' +data.idPhoto)
                console.log('color cambiado:' +this.state.likeColor)
            }
        })
        .catch(error => error)
        .then(response => response);
    } 

    handleChange = name => e => {
        console.log(e.target.type)
        this.setState({ photos: this.data.idPhoto , [name]: e.state.likeColorChange })
        console.log(this.state.likeColorChange)
    };    
    
    //Prog. de boton de like, si esta logueado le da like a la foto, sino lo redirige a la pagina de register
    userRegister = (photo) => {
        (localStorage.getItem('user')) ?
        (         
           this.likesImage(photo)  
        )
        :
        this.props.history.push('/register')
    }

    nextPage = () => this.setState({pagina: this.state.pagina + 1}, () => this.images())

    prevPage = () => this.setState({pagina: this.state.pagina - 1}, () => this.images())

    render() {
        const { classes } = this.props;
       
        //Armado de grid con las imagenes 
        return (
            <div className={classes.root}>
                <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc', padding: 30}}>
                {
                    (this.state.photos !== null)
                    ?
                    (
                        <GridList cellHeight={300} col={3}>
                            {this.state.photos.map(photo => (
                                <GridListTile key={photo.id}>
                                <img src={photo.urls.small} alt={photo.title}/>
                                    <GridListTileBar 
                                        actionIcon={      
                                            <IconButton className={classes.likeColor} 
                                                        onClick={() => this.userRegister(photo)} 
                                                        onChange= {() => this.handleChange(this.data.idPhoto, classes.likeColorChange)} 
                                                        >
                                                <FavoriteIcon />                                           
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
                {
                    //Programación de los botones de next y prev
                    (this.state.pagina > 1) ? <Button variant="outlined" color="primary" className={classes.button} onClick={this.prevPage}>Back</Button> : null
                }
                <Button onClick={this.nextPage} variant="outlined" color="primary" className={classes.button}>Next</Button>   
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(LandingPage);