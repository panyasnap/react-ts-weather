export type WeatherData = {
    name: string;
    sys: {
        country: string;
        sunset: string;
    };
    main: {
        temp: number;
        pressure: string;
    }
}

export type Action = {
    type: string;
    [key: string]: any;
}

export type Dispatch = (action: Action) => void;

export type ThunkAction = (dispatch: Dispatch) => void;

//export type ActionCreator =

export type State = {
    weatherInfo: {
        city: string;
        country: string;
        temp: number | string;
        pressure: string;
        sunset: string;
    }| null;
    message: string | null;
}