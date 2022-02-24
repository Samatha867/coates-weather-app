import moment from 'moment';

const getCurrentDayForecast = (data:any, title: any) => ({
    weekday: moment().format('dddd'),
    date: moment().format('MMMM Do'),
    location: title,
    temperature: Math.round(data.temp),
    weatherIcon: `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather[0].description,
});

export default getCurrentDayForecast;
