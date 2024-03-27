import React, { useEffect, useState } from 'react';
import useWeatherForecastService from '@modules/weather/hooks/useWeatherForecastService';
import {IWeatherForecastApiParam, WEATHER_FORECAST_MODE} from "@modules/weather/misc/constants";
import WeatherForecastList from "@modules/weather/features/weatherForecast/components/WeatherForecastList";
import {Card} from "antd";
import SearchLocationForm from "@modules/weather/features/searchLocation/components/SearchLocationForm";

interface IWeatherForecastContainerProps {
    keyword?: any;
}

const WeatherForecastContainer = (props: IWeatherForecastContainerProps) => {
    const { selector, handleFetchWeatherForecastData } = useWeatherForecastService();
    const fetchWeatherForecast = (data: IWeatherForecastApiParam) => {
        handleFetchWeatherForecastData({
            forecastMode: '',
            params: data
        }).then(result => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        if (props?.keyword) {
            fetchWeatherForecast({
                q: props?.keyword
            });
        } else {
            navigator.geolocation.getCurrentPosition(function(position) {
                fetchWeatherForecast({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            });
        }
    }, [handleFetchWeatherForecastData]);

    return (
        <div>
            <h3>5-day Forecast (3 Hours)</h3>
            <Card>
                <WeatherForecastList weatherInfoList={selector?.weatherForecastData?.list} />
            </Card>
        </div>
    );
};

export default WeatherForecastContainer;