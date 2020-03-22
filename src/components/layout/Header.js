import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';
import './layout.styles.css'



const Header=({ onChangeBackground }) =>{
 

  return (
    <div className='menu'>
      <AppBar position='static' className='menu'>
        <Toolbar>
          <WbSunnyIcon fontSize='large'  style={{color:'yellow'}}></WbSunnyIcon>
          <Typography variant='h4' className='title'>
            Weather
          </Typography>
          <BackgroundSwitches onChangeBackground={onChangeBackground} />
          <NavLinkButton activeOnlyWhenExact={true} to='/' label='Home' />
          <NavLinkButton  to='/favorites' label='Favorites' />
        </Toolbar>
      </AppBar>
    </div>
  );
}



const NavLinkButton=({ label, to, activeOnlyWhenExact })=> {

  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <MenuItem component={Link} to={to} className={match ? 'active' : ''}>
      {label}
    </MenuItem>
  );
}

const BackgroundSwitches=({ onChangeBackground })=> {
  return (
    <React.Fragment>
      <Typography component='div' style={{ marginRight: 10 }}>
        <Grid
          component='label'
          container
          alignItems='center'
          spacing={1}
        ></Grid>
      </Typography>
    </React.Fragment>
  );
}
  


export default Header;