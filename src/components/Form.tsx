import {weather_cache_time} from "../utils/constants.ts";
import {fetchWeather} from "../features/api/asyncWeatherAction.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {FormEvent} from "react";

const Form = () => {
    const dispatch = useAppDispatch();
    const {timestamp, city: name = ''} = useAppSelector(state => state.weatherInfo);

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        if (city.toLowerCase() !== name.toLowerCase() || Date.now() - timestamp > weather_cache_time) {
            dispatch(fetchWeather(city));
        }
        e.currentTarget.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;