import {ERROR_WEATHER, PUT_WEATHER} from "../weatherAction/weatherAction";
import {Action, State} from "../types";

const initialState = {
    weatherInfo: {
        city: '',
        country: '',
        temp: '',
        pressure: '',
        sunset: ''
    },
    message: "Enter city name"
}

export const weatherReducer = (state: State= initialState, action: Action) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weatherInfo: action.payload, message: null}
        case ERROR_WEATHER:
            return {...state, message: action.payload, weatherInfo: null}
        default:
            return state;
    }
}