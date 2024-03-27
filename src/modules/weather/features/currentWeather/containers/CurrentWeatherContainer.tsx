import React, { useEffect, useState } from 'react';
import useWeatherCurrentService from '@modules/weather/hooks/useWeatherCurrentService';
import {IWeatherCurrentApiParam, WEATHER_MEASURE_UNITS} from "@modules/weather/misc/constants";
import CurrentWeatherCard from "@modules/weather/features/currentWeather/components/CurrentWeatherCard";

interface CurrentWeatherContainerProps {
    keyword?: any;
}

const CurrentWeatherContainer = (props: CurrentWeatherContainerProps) => {
    const { selector, handleFetchCurrentWeatherData } = useWeatherCurrentService();

    const fetchCurrentWeatherData = (data: IWeatherCurrentApiParam ) => {
        handleFetchCurrentWeatherData(data).then(result => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        if (props?.keyword) {
            fetchCurrentWeatherData({
                q: props?.keyword
            });
        } else {
            navigator.geolocation.getCurrentPosition(function(position) {
                fetchCurrentWeatherData({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            });
        }
    }, [handleFetchCurrentWeatherData]);

    return <CurrentWeatherCard weatherData={selector.currentWeatherData} />
};

export default CurrentWeatherContainer;
