import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem/UpcomingDaysForecastItem';
import styles from './UpcomingDaysForecast.module.css';

type Props = {
  days: any[];
};

const UpcomingDaysForecast = ({ days }: Props) => (
  <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>
);

export default UpcomingDaysForecast;
