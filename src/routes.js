import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import CustomizedError from "./components/Error/error";
import {
  init,
  fetchedCurrentForecast,
  setErrorMessage,
  errorOccured
} from "../src/redux/actions/weather-action";
import { connect } from "react-redux";
const config = require("./config");
class Routes extends Component {
  
  
  componentDidMount() {
    this.props.init();
    this.props.fetchedCurrentForecast(config.default.selected.Key);
  }

  render() {
    const { message, setError, errorFlag, errorOccured } = this.props;

    return (
      <Layout>
        <CustomizedError
          open={errorFlag}
          setError={setError}
          message={message}
          errorFlag={errorFlag}
          errorOccured={errorOccured}
        />    
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    errorFlag: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(init()),
    fetchedCurrentForecast: key => dispatch(fetchedCurrentForecast(key)),
    setError: message => dispatch(setErrorMessage(message)),
    errorOccured: bool => dispatch(errorOccured(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
