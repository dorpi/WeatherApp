import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcons from '../weather-icons/WeatherIcons';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

import PropsType from 'prop-types'


const WeatherDisplay = ({ title, temperature, text, children, iconPhrase }) => {

  return (

    <Card className='weather-card'>
      <CardContent>

        <Grid
          container
          direction='row'
          
          >
          <Grid item xs={12}>
            <Typography className='card-title' component='div'>
              <Box fontWeight={900}>
                {title}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className='card-subtitle' color='textSecondary' >
            
              {temperature}&deg;
            
              
    </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className='card-text' variant='h6'   >
           
            {text}
           
              
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <WeatherIcons iconPhrase={iconPhrase} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};



WeatherDisplay.PropsType= {
  title:PropsType.string.isRequired,
  temperature:PropsType.string.isRequired,
  text:PropsType.string.isRequired,
  iconPhrase:PropsType.string.isRequired
}

export default WeatherDisplay;
