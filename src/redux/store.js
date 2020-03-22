import {createStore,applyMiddleware,compose} from 'redux';

import thunkMiddleware from 'redux-thunk'
import rootReducer from './index'

const initialState={};

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  
  

export default store;