
import React, { Component } from "react";
import './App.css';
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import Favorites from "./components/pages/favorites/Favorites";
import { Provider } from 'react-redux'
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import store from '../src/redux/store'


class App extends Component {


  render(){ 
    return(
      <Provider store={store}>
        
        <BrowserRouter>
        <Layout>
             <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/favorites" component={Favorites}/>
                </Switch>
        </Layout>
        </BrowserRouter>
       
       
      </Provider>
    )
  } 
}


export default App;
