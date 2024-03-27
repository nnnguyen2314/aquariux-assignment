import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get} from 'lodash';
import api from '@modules/weather/misc/api';
import {IWeatherForecastApiParam, IWeatherForecastState} from "@modules/weather/misc/constants";

export const stateKey = 'weatherForecast';

const initialState: IWeatherForecastState = {
    message: '',
    loading: false,
    weatherData: []
};

export const fetchWeatherForecastData = createAsyncThunk(
    'WEATHER/FETCH_WEATHER_FORECAST_DATA',
    async (data: {forecastMode: string, params: IWeatherForecastApiParam}) => {
        return await api.fetchForecastData(data.forecastMode, data.params);
    });

export const weatherForecastSlice = createSlice({
    name: stateKey,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherForecastData.pending, (state: IWeatherForecastState, action):void => {state.loading = true})
        builder.addCase(fetchWeatherForecastData.fulfilled, (state: IWeatherForecastState, action):void => {
            state.weatherData = action?.payload?.data;
            state.loading = false;
            state.message = 'Request Successfully!';
        })
        builder.addCase(fetchWeatherForecastData.rejected, (state: IWeatherForecastState, action):void => {
            state.loading = false;
            state.message = 'Request Failed!';
        })
    }
});

export const getWeatherForecastDataState = (state: IWeatherForecastState) => {
    const weatherForecastDataState = get(state, stateKey, initialState);
    const weatherForecastData = get(weatherForecastDataState, 'weatherData', initialState.weatherData);
    const loading = get(weatherForecastDataState, 'loading', initialState.loading);
    const message = get(weatherForecastDataState, 'message', initialState.message);

    return {
        weatherForecastData,
        loading,
        message
    };
};


export default weatherForecastSlice.reducer;