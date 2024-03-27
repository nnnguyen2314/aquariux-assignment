import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
//
import weatherCurrentSlice from '@modules/weather/store/weatherCurrentSlice';
// import videoSlice from '@modules/video/store/videoSlice';
// import trendingGifSlice from '@modules/gif/store/trendingGifSlice';
// import gifSearchSlice from '@modules/gif/store/gifSearchSlice';
export const combinedReducer = combineReducers({
    weatherCurrent: weatherCurrentSlice
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export default reducer;