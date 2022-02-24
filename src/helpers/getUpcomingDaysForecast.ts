import moment from 'moment';

const getWeekday = (date:any) => moment(date).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = (data:any) =>{
debugger
    return data.slice(1).map((day:any, index: number) => {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate()+index+1);
        return {
        imgUrl: day.weather_state_abbr,
        temperature: Math.round(day.temp.max),
        weekday: getWeekday(tomorrow),
    }});
}
export default getUpcomingDaysForecast;
