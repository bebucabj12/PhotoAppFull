import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overFlow: 'hidden',
        marginTop: 66,
        padding: 20
    },
    gridList: {
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

const client_id = 'f11998046de9cb5ba7980a14ccaef27080a48be3429a331206698471ce09a6bd';
const end_point = 'https://api.unsplash.com/search/photos';

class Search extends Component {

    super() {
        this.query = '';
        this.onChange = this.onChange.bind(this);
        this.photos = this.photos.bind(this);
    }
   
    onChange = e => {
        this.setState({ query: e.target.value });
    }

    photos = () => {
        fetch(`${end_point}?query=${this.query}?client_id=${client_id}`)
        .then(response => response.json())
        .then(json => this.setState({photos: json}))
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc', padding: 30 }}>
                    {
                        (this.state.photos !== null)
                            ?
                            (
                                <GridList cellHeight={300} col={3}>
                                    {console.log(this.state)}
                                    {this.state.photos.map(photo => (
                                        <GridListTile key={photo.id}>
                                            <img src={photo.url} alt={photo} />
                                            <GridListTileBar
                                                actionIcon={
                                                    <IconButton className={classes.likeColor} onClick={() => this.userRegister(photo)}>
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
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(Search));
