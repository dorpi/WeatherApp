import axios from "axios";
const config = require("../config");
const API_KEY = config.default.API_KEY;

export const fetchLocationDetails = localtionKey =>
  axios.get(
    config.default.URL_ACUWHETHER +
      "/locations/v1/" +
      localtionKey +
      "?apikey=" +
      API_KEY
  );

export const fetchForcast = localtionKey => 
    axios.get(
    config.default.URL_ACUWHETHER +
      "/forecasts/v1/daily/5day/" +
      localtionKey +
      "?apikey=" +
      API_KEY +
      "&metric=true"
  );

export const fetchCurrentWeather = localtionKey =>
  axios.get(
    config.default.URL_ACUWHETHER +
      "/currentconditions/v1/" +
      localtionKey +
      "?apikey=" +
      API_KEY +
      "&language=en-us&details=false"
  );

//Auto complete
export const fetchAutocomplete = query =>
  axios.get(
    config.default.URL_ACUWHETHER +
      "/locations/v1/cities/autocomplete?apikey=" +
      API_KEY +
      "&language=en-us&q=" +
      query
  );
