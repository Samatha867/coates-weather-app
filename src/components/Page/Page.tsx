import useForecast from '../../hooks/useForecast';
import Error from '../Error/Error';
import Forecast from '../Forecast/Forecast';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import styles from './Page.module.css';

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value: any) => {
    submitRequest(value);
  };

  return (
    <>
      <Header />
      <div className={styles.search}>
        <Form submitSearch={onSubmit} />
        {isError && <Error message={isError} />}
        {isLoading && <Loader />}
      </div>
      {forecast && !isLoading && !isError && <Forecast forecast={forecast} />}
    </>
  );
};

export default Page;
