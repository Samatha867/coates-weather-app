const currentDayForecast = (data:any) => [
    
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'air pressure',
        value: data.pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.temp.max),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.temp.min),
        unit: '°C',
    },
];

export default currentDayForecast;
