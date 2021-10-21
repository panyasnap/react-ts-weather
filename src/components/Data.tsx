import Weather from "../contaniers/Weather";
import React from 'react';
import Form from "../contaniers/FormControl";
import {api_key, base_url} from "../utils/constans";


const Data: React.FunctionComponent = ():JSX.Element => {
    return (
        <div>
            <Form/>
            <Weather/>
        </div>
    );

}

export default Data;
//setState изменение состояния
//<Form getWeather={this.getWeather}/> изменение формы