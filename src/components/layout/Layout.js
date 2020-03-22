import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Container } from '@material-ui/core';

import PropsType from 'prop-types'
import Header from './Header';
import Footer from './Footer';
import ErrorComponent from '../common/error/ErrorComponent'
import './layout.styles.css'

import {clearErrorMessage} from '../../redux/actions/weather-action'


class Layout extends Component {


  render() {
    
    const {error,clearErrorMessage } = this.props;

    return (
      <div className='root'>
        
        <Header/>
        <ErrorComponent message={error.message} errorFlag={error.flag} clearErrorMessage={clearErrorMessage} />
        <Container component='main'  className='container'>
          {this.props.children}
          
        </Container>
        <Footer/>
      </div>
    );
  }
}


Layout.PropsType = {
  clearErrorMessage:PropsType.func.isRequired,
  error:PropsType.object.isRequired
}

const mapStateToProps = state => ({

  error: state.error,
});

export default connect(mapStateToProps,{clearErrorMessage})(Layout);
