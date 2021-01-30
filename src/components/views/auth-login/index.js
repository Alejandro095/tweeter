import styles from "./styles.module.scss";

import Layout from "@layout/auth-layout";

import CloseIcon from "@material-ui/icons/Close";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";

import Link from "@shared/link";

import Input from "@shared/forms";

import { useForm } from "react-hook-form";
import useFetch from "hooks/use-fetch";
import { useEffect } from "react";

import Spinner from "@shared/loaders";

export default function AuthLoginView() {
  const { register, errors, handleSubmit } = useForm();
  const [AJAX, data, isFetching] = useFetch();

  const onSubmit = async ({ username, password }) => {
    AJAX("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: username,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Layout>
      <div className={styles.top}>
        <h1>Iniciar sesión</h1>
        <CloseIcon />
      </div>

      {data && !data.ok && data.response === "Credenciales invalidas" && (
        <p className={styles.spanError}>
          El correo electrónico y la contraseña que ingresaste no coinciden con
          nuestros registros. Por favor, revisa e inténtalo de nuevo.
        </p>
      )}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={AlternateEmailIcon}
          name="username"
          placeholder="Email"
          register={register({
            required: { value: true, message: "El correo es obligatorio." },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.username}
        />

        <Input
          icon={LockIcon}
          name="password"
          type="password"
          placeholder="Password"
          register={register({
            required: { value: true, message: "La contraseña es obligatorio." },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.password}
        />

        <button disabled={isFetching} className={styles.btn}>
          {" "}
          {isFetching ? <Spinner color="#e5ecf3" /> : "INICIAR SESIÓN"}{" "}
        </button>
      </form>

      <span className={styles.span}>Tambien puedes iniciar sesión con:</span>

      <div className={styles.social}>
        <div className={styles.btnSocial}>
          <div>
            <img src="Google.svg" />
            GOOGLE
          </div>
        </div>
        <div className={styles.btnSocial}>
          <div>
            <img src="Github.svg" />
            GITHUB
          </div>
        </div>
      </div>

      <span className={styles.span}>
        ¿No tienes cuenta?{" "}
        <span>
          {" "}
          <Link title="¡Crea una!" pathname="/register" />{" "}
        </span>
      </span>

      <span className={styles.span}>
        {" "}
        <span>
          {" "}
          <Link title="¿Olvidaste tu contraseña?" pathname="/register" />{" "}
        </span>
      </span>
    </Layout>
  );
}
