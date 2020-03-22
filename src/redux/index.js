import {combineReducers } from 'redux';
import {selected,favorites,error,loading} from './reducers/weather-reducer';



    export default combineReducers({
        selected,favorites,error,loading
    })