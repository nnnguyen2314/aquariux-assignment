import {useCallback} from "react";
import {shallowEqual} from "react-redux";
import {useAppDispatch, useAppSelector} from "@modules/shared/hooks";
import { fetchCurrentWeatherData, getCurrentWeatherDataState } from "@modules/weather/store/weatherCurrentSlice";
import {IWeatherCurrentApiParam} from "@modules/weather/misc/constants";

const useWeatherCurrentService = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(getCurrentWeatherDataState, shallowEqual);

    const handleFetchCurrentWeatherData = useCallback((params: IWeatherCurrentApiParam) => {
        return dispatch(fetchCurrentWeatherData(params));
    }, [dispatch]);

    return {
        selector,
        handleFetchCurrentWeatherData
    }
};

export default useWeatherCurrentService;