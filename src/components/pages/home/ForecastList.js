import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ForecastItem from './ForecastItem'
import PropsType from 'prop-types'



  const ForecastList = ({ forecast }) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const currentDay = new Date().getDay();
   
    return (
      <CardContent>
        <Grid container >
          {forecast.map((item, index) => (
            <Grid item xs key={index}>
              <ForecastItem
                title={days[(currentDay + index) % 7]}
                max={item.Temperature.Maximum.Value}
                min={item.Temperature.Minimum.Value}
                text={item.Day.IconPhrase}
                iconPhrase={item.Day.Icon}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    );
  };


  ForecastList.PropsType = {
    forecast:PropsType.array.isRequired
  }

  export default ForecastList;