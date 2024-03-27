import {useCallback} from "react";
import {shallowEqual} from "react-redux";
import {useAppDispatch, useAppSelector} from "@modules/shared/hooks";
import { fetchWeatherForecastData, getWeatherForecastDataState } from "@modules/weather/store/weatherForecastSlice";
import {IWeatherForecastApiParam, WEATHER_FORECAST_MODE} from "@modules/weather/misc/constants";

const useWeatherForecastService = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(getWeatherForecastDataState, shallowEqual);

    const handleFetchWeatherForecastData = useCallback((data: {forecastMode: string, params: IWeatherForecastApiParam}) => {
        return dispatch(fetchWeatherForecastData(data));
    }, [dispatch]);

    return {
        selector,
        handleFetchWeatherForecastData
    }
};

export default useWeatherForecastService;