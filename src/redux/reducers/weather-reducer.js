import {GET_FAVORITES,CURRENT_WEATHER_SUCCESS,SET_SELECTED,FORECAST_FETCH_SUCCESS,
    ON_FAVORITE_ADD,ON_FAVORITE_DELETE,SET_ERROR_MESSAGE,SET_LOADING, CLEAR_ERROR} from '../actions/types'

const initializeSelected= {
    selected :{
        Key: 215854,
        LocalizedName: 'Tel Aviv'
    },
    currentweather:{},
    forecast:[],
}

export function selected(state=initializeSelected,action){
    switch (action.type) {
        case SET_SELECTED:
            return {...state,selected:action.payload}
        case CURRENT_WEATHER_SUCCESS:
            return {...state,currentweather:action.payload}
        case FORECAST_FETCH_SUCCESS:
            return {...state,forecast:action.payload}
        default:
            return state;
    }
}


export function favorites(state=[],action){
    switch (action.type) {
        case ON_FAVORITE_ADD:
            return [...state,action.payload]
        case ON_FAVORITE_DELETE:
            return state.filter(item => item.Key !== action.payload.Key)
        case GET_FAVORITES:
            return action.payload  
        default:
            return state;
    }
}



const initializeError =
{
    flag:false,
    message:''
}

export function error(state=initializeError,action){
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return {...state,message:action.payload,flag:true}
        case CLEAR_ERROR:
            return{...state,message:'',flag:false}
        default:
            return state;
    }
}
  



export function loading(state=true,action){
    switch (action.type) {
        case SET_LOADING:
            return action.payload
        default:
            return state;
    }
}
  