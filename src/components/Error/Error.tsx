import styles from './Error.module.css';

type Props = {
  message: string | boolean;
};
const Error = ({ message }: Props) => (
  <div className={`${styles.error} alert `} role="alert">
    {message}
  </div>
);

export default Error;
