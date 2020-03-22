import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './layout.styles.css'



export default function Footer() {

  return (
    <footer className='footer'>
      <Container >
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Developed By Dor Pitaro'}
        </Typography>
      </Container>
    </footer>
  );
}
