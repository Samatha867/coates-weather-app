import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast/UpcomingDaysForecast';

import styles from './Forecast.module.css';

type Props = {
  forecast: {
    currentDay: any;
    currentDayDetails: any;
    upcomingDays: any;
  };
};
const Forecast = ({ forecast }: Props) => (
  <Container className={styles.box}>
    <Row>
      <Col xs={12} md={4}>
        <div className={styles.card}>
          <CurrentDay {...forecast.currentDay} />
        </div>
      </Col>
      <Col
        xs={12}
        md={8}
        className="d-flex flex-column justify-content-between"
      >
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDaysForecast days={forecast.upcomingDays} />
      </Col>
    </Row>
  </Container>
);

export default Forecast;
