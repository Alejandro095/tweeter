import Spinner from '@shared/loaders';
import styles from './styles.module.scss';

export default function Input({
  placeholder = '',
  type = 'text',
  name = '',
  icon: Icon,
  loading = false,
  register,
  errors,
  autocomplete = 'on',
}) {
  const getState = () => {
    if (errors) {
      return 'inputError';
    } else {
      return 'input';
    }
  };

  return (
    <div>
      <div className={styles[getState()]}>
        {Icon && <Icon />}
        <input
          ref={register}
          placeholder={placeholder}
          type={type}
          name={name}
          autoComplete={autocomplete}
        />
        {loading && <Spinner size='1.5rem' />}
      </div>
      {errors && (
        <span className={styles.informationError}>{errors.message}</span>
      )}
    </div>
  );
}

export function InputDate({
  placeholder = '',
  name = '',
  icon: Icon,
  loading = false,
  register,
  errors,
  autocomplete = 'on',
}) {
  const getState = () => {
    if (errors) {
      return 'inputError';
    } else {
      return 'input';
    }
  };

  return (
    <div>
      <div className={styles[getState()]}>
        {Icon && <Icon />}
        <input
          ref={register}
          placeholder={placeholder}
          type="date"
          name={name}
          autoComplete={autocomplete}
          className={styles.inputDate}
        />
        {loading && <Spinner size='1.5rem' />}
      </div>
      {errors && (
        <span className={styles.informationError}>{errors.message}</span>
      )}
    </div>
  );
}
