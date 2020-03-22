import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';


import FavoriteButton from './FavoriteButton'
import SearchComponent from './SearchComponent';
import WeatherDisplay from '../weather-display/WeatherDisplay'
import ForecastList from './ForecastList'
import isEmpty from '../../../utils/is-empty'
import '../pages.styles.css'

import {
  onFavoriteAdd,
  setSelectedCurrentWeatherAndForecast,
  openErrorMessage,
  getFavorites,
  setLoading

} from '../../../redux/actions/weather-action';



class Home extends Component {



  componentDidMount() {
    this.props.setSelectedCurrentWeatherAndForecast(this.props.selected.selected);
  }


  render() {



    const {
      selected,
      favorites,
      setLoading,
      setSelectedCurrentWeatherAndForecast,
      openErrorMessage,
      onFavoriteAdd,
      loading
    } = this.props;



    if (loading || isEmpty(selected.currentweather)) {
      return (
        <div className='loading-style'>
          <CircularProgress size={200}  />
        </div>
      );
    }
    else {

      const isFavorite = favorites.filter(item => item.Key === selected.selected.Key).length > 0 ? true : false;

      return (
        <div className='home-container'>
          <div className='search-container'>
            <SearchComponent
              setSelected={setSelectedCurrentWeatherAndForecast}
              openErrorMessage={openErrorMessage}
              setLoading={setLoading}
            />
          </div>
          <div className='home-card'>
            <Grid
              container
              direction='row'
              alignItems='center'
            >
              <Grid item>
                  <WeatherDisplay
                    title={selected.selected.LocalizedName}
                    temperature={selected.currentweather.Temperature.Metric.Value}
                    text={selected.currentweather.WeatherText}
                    children
                    iconPhrase={selected.currentweather.Weathericon} />
              </Grid>
              <Grid item xs={6} >
              </Grid>
              <Grid item xs={2} >
                <FavoriteButton
                  isFavorite={isFavorite}
                  onFavoriteAdd={onFavoriteAdd}
                  favorite={selected.selected}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider ></Divider>
              </Grid>
              <Grid item xs={12}>
               
                <ForecastList forecast={selected.forecast} />
                
              </Grid>
            </Grid>
          </div>
        </div>
      )
    }
  }
}




Home.PropsTypes = {
  selected: PropsTypes.object.isRequired,
  favorites: PropsTypes.object.isRequired,
  onFavoriteAdd: PropsTypes.func.isRequired,
  openErrorMessage: PropsTypes.func.isRequired,
  setSelectedCurrentWeatherAndForecast: PropsTypes.func.isRequired,
  getFavorites: PropsTypes.func.isRequired,
  error: PropsTypes.object,



}

const mapStateToProps = state => ({
  selected: state.selected,
  error: state.error,
  favorites: state.favorites,
  loading: state.loading
});


export default connect(mapStateToProps, { getFavorites, setSelectedCurrentWeatherAndForecast, onFavoriteAdd, openErrorMessage, setLoading })(Home);
