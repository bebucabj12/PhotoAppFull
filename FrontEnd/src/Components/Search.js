import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {

    state= {
        photos: null,
        pagina: 1,
    }    
    
    componentDidMount(){
        this.images()
    }
    //https://api.unsplash.com/search/?client_id=f11998046de9cb5ba7980a14ccaef27080a48be3429a331206698471ce09a6bd&page=1&query=${this.state.busqueda}
    images = () => {
        fetch(`<https://api.unsplash.com/search/photos?page=1&query=office>; 
                rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; 
                rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; 
                rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; 
                rel="next"`)
        .then(response => response.json())
        .then(json => this.setState({photos: json}))
    }

render() {
// const { classes } = this.props;

    return (
            <div>
                
            </div>
        )
    }
}

export default (withRouter(Search));
