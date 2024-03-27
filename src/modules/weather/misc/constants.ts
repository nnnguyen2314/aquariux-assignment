export const WEATHER_BASE_API_URL = `${process.env.OPEN_WEATHER_API_BASE_URL}`;
export const WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
export const CURRENT_STATE_API_URL = `${WEATHER_BASE_API_URL}/weather`;
export const FORECAST_API_URL = `${WEATHER_BASE_API_URL}/forecast`;

export const WEATHER_ICON_URL = process.env.OPEN_WEATHER_ICON_URL;

export const WEATHER_FORECAST_MODE = {
    HOURLY: 'hourly',
    DAILY: 'daily',
    CLIMATE: 'climate'
}

export const WEATHER_MEASURE_UNITS = {
    METRIC: 'metric', //For temperature in Celsius
    STANDARD: 'standard',
    IMPERIAL: 'imperial' //For temperature in Fahrenheit
}

export interface IWeatherCurrentApiParam {
    lat?: any;
    lon?: any;
    q?: string;
    units?: string;
    mode?: string;
    lang?: string;
}

export interface IWeatherForecastApiParam {
    lat?: any;
    lon?: any;
    q?: string;
    cnt?: number;
    units?: string;
    mode?: string;
    lang?: string;
}

export interface IWeatherCurrentState {
    weatherData: any;
    loading: boolean;
    message: string;
}

export interface IWeatherForecastState {
    weatherData: [];
    loading: boolean;
    message: string;
}