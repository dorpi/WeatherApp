import React, { Component } from 'react'
import FavoriteList from './FavoriteList';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import PropsType from 'prop-types';
import { openErrorMessage,
         getFavorites,setSelected,
         onFavoriteDelete,
         setLoading } from '../../../redux/actions/weather-action';
import FavoritesContext from './FavoritesContext';
import '../pages.styles.css'

class Favorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            
        }
    }

    componentDidMount() {
        this.props.getFavorites()
    }


    render() {       
        if (this.props.favorites.length === 0)
            return (<Typography className='font-style ' variant="h3" color="textSecondary" >You Don't have Favorites</Typography>)
        else 
            return( 
                <FavoritesContext.Provider 
                value=
                {{
                    setSelected:this.props.setSelected,
                    onFavoriteDelete:this.props.onFavoriteDelete,
                    openErrorMessage:this.props.openErrorMessage,
                    loading:this.props.loading,
                    setLoading:this.props.setLoading
                }}>
            <FavoriteList favorites={this.props.favorites} />
            </FavoritesContext.Provider >
            )
        
        
    }

}

Favorites.PropsType = {
    error: PropsType.object.isRequired,
    favorites: PropsType.array.isRequired,
    setSelectedCurrentWeatherAndForecast:PropsType.func.isRequired,
    onFavoriteDelete: PropsType.func.isRequired,
    loading:PropsType.object.isRequired
}

const mapStateToProps = state => ({

    error: state.error,
    favorites: state.favorites,
    loading:state.loading
});


export default connect(mapStateToProps, { openErrorMessage,setLoading, getFavorites,setSelected,onFavoriteDelete})(Favorites);