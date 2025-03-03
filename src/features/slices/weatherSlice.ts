import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {WeatherInfo} from "../../utils/types";

const initialState = {} as WeatherInfo;

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => ({} as WeatherInfo))
    }
})

export default weatherSlice.reducer