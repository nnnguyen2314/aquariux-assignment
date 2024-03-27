import React, { useEffect, useState } from 'react';
import useWeatherCurrentService from '@modules/weather/hooks/useWeatherCurrentService';
import {WEATHER_MEASURE_UNITS} from "@modules/weather/misc/constants";
import CurrentWeatherCard from "@modules/weather/features/currentWeather/components/CurrentWeatherCard";

const CurrentWeatherContainer = () => {
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const { selector, handleFetchCurrentWeatherData } = useWeatherCurrentService();

    const fetchCurrentWeatherData = (data: { lat: number, long: number } ) => {
        handleFetchCurrentWeatherData({
            lat: data.lat,
            lon: data.long,
            units: WEATHER_MEASURE_UNITS.METRIC
        }).then(result => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            fetchCurrentWeatherData({
                lat: position.coords.latitude,
                long: position.coords.longitude
            });
        });
    }, [handleFetchCurrentWeatherData]);

    return (
        <div>
            <CurrentWeatherCard weatherData={selector.currentWeatherData} />
        </div>
    )
};

export default CurrentWeatherContainer;
