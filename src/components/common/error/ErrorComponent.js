import React from "react";
import PropsTypes from "prop-types";

import Alert from '@material-ui/lab/Alert'

import Snackbar from '@material-ui/core/Snackbar';

import "./error.styles.css";


const ErrorComponent = ({ message, errorFlag, clearErrorMessage }) => {



  if (errorFlag)
    return (
      <Snackbar open={errorFlag} autoHideDuration={5000} onClose={clearErrorMessage}>
        <Alert className='error' onClose={clearErrorMessage} severity="error" variant="filled">
          {message}
        </Alert>
      </Snackbar>
    )
  else
    return (
      <div>
      </div>

    )
}


ErrorComponent.PropsTypes = {
  message: PropsTypes.string.isRequired,
  flag: PropsTypes.bool.isRequired,
  clearErrorMessage: PropsTypes.func.isRequired
}

export default ErrorComponent;
