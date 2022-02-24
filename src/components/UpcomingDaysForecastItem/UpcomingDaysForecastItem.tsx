import styles from './UpcomingDaysForecastItem.module.css';
import weather from './assets/weather.png';

type Props = {
  weekday: string;
  temperature: string;
  imgUrl: string;
};

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }: Props) => (
  <li
    className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}
  >
    <img className="mb-2" width="30" src={weather} alt="" />
    <span className="mb-2">{weekday}</span>
    <span className="font-weight-bold">{temperature}&deg;</span>
  </li>
);

export default UpcomingDaysForecastItem;
