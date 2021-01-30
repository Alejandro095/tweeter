import styles from "./styles.module.scss";
import Spinner from "@shared/loaders";

export default function Input({
  placeholder = "",
  type = "text",
  name = "",
  icon: Icon,
  loading = false,
  register,
  errors,
  autocomplete = "on",
}) {
  const getState = () => {
    if (errors) {
      return "inputError";
    } else {
      return "input";
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
        {loading && <Spinner size="1.5rem" />}
      </div>
      {errors && (
        <span className={styles.informationError}>{errors.message}</span>
      )}
    </div>
  );
}
