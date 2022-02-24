import { useState } from 'react';
import axios from 'axios';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://openweathermap.org/data/2.5';
const APP_ID = '439d4b804bc8187953eb36d2a8c26a02';
const UNITS = 'metric';

const useForecast = () => {
    const [isError, setError] = useState<string|boolean>(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState<any>(null);

    const getCityData = async (location:any) => {
        const { data } = await axios(`${BASE_URL}/find`, { params: { q: location, appid:APP_ID, units: UNITS  } });

        if (!data || !data.list?.length) {
            setError('There is no such location');
            setLoading(false);
            return;
        }

        return data;
    };

    const getForecastData = async (location:any) => {
        const { data } = await axios(`${BASE_URL}/onecall`, { params: { lat:location.coord.lat,lon:location.coord.lon, appid:APP_ID, units: UNITS  } });

        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }

        return data;
    };

    const gatherForecastData = (data:any, response:any) => {
        const currentDay = getCurrentDayForecast(data.current, response?.list[0]?.name);
        const currentDayDetails = getCurrentDayDetailedForecast(data.daily[0]);
        const upcomingDays = getUpcomingDaysForecast(data.daily);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };

    const submitRequest = async (location:any) => {
        setLoading(true);
        setError(false);

        const response = await getCityData(location);
        if (!response?.list?.length) return;

        const data = await getForecastData(response?.list[0]);
        if (!data) return;

        gatherForecastData(data, response);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForecast;
