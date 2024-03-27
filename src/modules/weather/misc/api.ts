import axios from 'axios';
import {
    WEATHER_BASE_API_URL,
    WEATHER_API_KEY,
    CURRENT_STATE_API_URL,
    FORECAST_API_URL,
    IWeatherCurrentApiParam, IWeatherForecastApiParam, WEATHER_FORECAST_MODE
} from "../misc/constants";

const CustomAxios = axios.create({
    baseURL: WEATHER_BASE_API_URL,
    responseType: 'json',
});
CustomAxios.defaults.timeout = 30000;

CustomAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.params = {
        ...config.params,
        ...{
            appid: WEATHER_API_KEY
        },
    };

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

const api = {
    fetchCurrentWeatherData: (data: IWeatherCurrentApiParam) => {
        return CustomAxios.get(CURRENT_STATE_API_URL, {params: data});
    },
    fetchForecastData: (forecastMode: string = WEATHER_FORECAST_MODE.HOURLY, data: IWeatherForecastApiParam) => CustomAxios.get(`${FORECAST_API_URL}/${forecastMode}`, { params: data })
};

export default api;
