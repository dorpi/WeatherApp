

import { fetchForcast, fetchCurrentWeather } from "../../services/weather-service";
import { addFavoriteLocal, deleteFavoriteLocal, getFavoritesFromLocal } from "../../localStorageAction";
import {
  GET_FAVORITES, SET_SELECTED, ON_FAVORITE_ADD, ON_FAVORITE_DELETE,
  SET_ERROR_MESSAGE, CURRENT_WEATHER_SUCCESS, FORECAST_FETCH_SUCCESS, SET_LOADING,CLEAR_ERROR
} from './types';
import Axios from "axios";




export const setSelectedCurrentWeatherAndForecast = (selected) => dispatch => {
  dispatch(setLoading(true))
  Axios.all([fetchCurrentWeather(selected.Key), fetchForcast(selected.Key)])
    .then(response => {
      if (response[0].status === 200 && response[1].status === 200) {
        const currentWeather = {
          WeatherText: response[0].data[0].WeatherText,
          WeatherIcon: response[0].data[0].WeatherIcon,
          Temperature: response[0].data[0].Temperature,
        }
        let forecast = response[1].data.DailyForecasts;
        for (let i = 0; i < forecast.length; i++) {
          forecast[i].Day.IconPhrase = forecast[i].Day.IconPhrase.replace("w/", "with")
          forecast[i].Day.IconPhrase = forecast[i].Day.IconPhrase.replace("t-storms", "thunderstorm")
        }

        dispatch(setSelected(selected))
        dispatch(forecastFetchSuccess(forecast));
        dispatch(currentWeatherFetchSuccess(currentWeather))
        dispatch(setLoading(false))
      }
    })
}

export const setSelected=(selected) =>{

  return {
    type: SET_SELECTED,
    payload: selected
  };
}

export const getFavorites = () => {
  const favorites = getFavoritesFromLocal();
  return {
    type: GET_FAVORITES,
    payload: favorites
  }
}

export const onFavoriteAdd = (favorite) => {
  addFavoriteLocal(favorite);
  return {
    type: ON_FAVORITE_ADD,
    payload: favorite
  };
}

export const onFavoriteDelete = (favorite) =>{
  deleteFavoriteLocal(favorite);

  return {
    type: ON_FAVORITE_DELETE,
    payload: favorite
  };
}

export const openErrorMessage= (message) =>{
  return {
    type: SET_ERROR_MESSAGE,
    payload: message
  };
}

export const clearErrorMessage = ()=>{

  return {
    type:CLEAR_ERROR
  }
}


export const currentWeatherFetchSuccess=(currentWeather) =>{
  return {
    type: CURRENT_WEATHER_SUCCESS,
    payload: currentWeather
  };
}

export const forecastFetchSuccess = (forecast) =>{
  return {
    type: FORECAST_FETCH_SUCCESS,
    payload: forecast
  };
}


export const setLoading= (bool)=>{


  return {
    type:SET_LOADING,
    payload:bool
  }
}
