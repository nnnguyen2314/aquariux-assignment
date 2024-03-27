import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get} from 'lodash';
import api from '@modules/weather/misc/api';
import {IWeatherCurrentApiParam, IWeatherCurrentState} from "@modules/weather/misc/constants";

export const stateKey = 'weatherCurrent';

const initialState: IWeatherCurrentState = {
    message: '',
    loading: false,
    weatherData: null
};

export const fetchCurrentWeatherData = createAsyncThunk(
    'WEATHER/FETCH_CURRENT_WEATHER_DATA',
    async (params: IWeatherCurrentApiParam) => {
        return await api.fetchCurrentWeatherData(params);
    });

export const weatherCurrentSlice = createSlice({
    name: stateKey,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeatherData.pending, (state: IWeatherCurrentState, action):void => {state.loading = true})
        builder.addCase(fetchCurrentWeatherData.fulfilled, (state: IWeatherCurrentState, action):void => {
            state.weatherData = action?.payload?.data;
            state.loading = false;
            state.message = 'Request Successfully!';
        })
        builder.addCase(fetchCurrentWeatherData.rejected, (state: IWeatherCurrentState, action):void => {
            state.loading = false;
            state.message = 'Request Failed!';
        })
    }
});

export const getCurrentWeatherDataState = (state: IWeatherCurrentState) => {
    const currentWeatherDataState = get(state, stateKey, initialState);
    const currentWeatherData = get(currentWeatherDataState, 'weatherData', initialState.weatherData);
    const loading = get(currentWeatherDataState, 'loading', initialState.loading);
    const message = get(currentWeatherDataState, 'message', initialState.message);

    return {
        currentWeatherData,
        loading,
        message
    };
};


export default weatherCurrentSlice.reducer;