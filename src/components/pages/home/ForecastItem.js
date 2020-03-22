import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from '../weather-icons/WeatherIcons';
import Box from '@material-ui/core/Box';

import PropsType from 'prop-types'
import '../pages.styles.css'


const ForecastItem = ({ title, max, min, text, iconPhrase }) => {

  return (
    <Card className='forecast-card'  >
      <CardContent>
        <Grid
          container
          direction='column'
          alignItems='center'>
          <Grid item xs={12}>

            <Typography className='card-title' variant='h4' >
            <Box fontWeight={900}>
              {title}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className='card-subtitle' color='textSecondary'>
              {min}&deg; - {max}&deg;
        </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography className='card-subtitle' variant='h5' component='h1' align='center'>
              {text}
            </Typography>
          </Grid>
          <Grid item>
          <WeatherIcons iconPhrase={iconPhrase} height={110} />
          </Grid >
        </Grid>

      </CardContent>

    </Card>
  );
};


ForecastItem.PropsType = {
  title: PropsType.string.isRequired,
  max: PropsType.string.isRequired,
  min: PropsType.string.isRequired,
  text: PropsType.string.isRequired,
  iconPhrase: PropsType.string.isRequired


}
export default ForecastItem;
