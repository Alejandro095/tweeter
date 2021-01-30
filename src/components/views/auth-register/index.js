import styles from "./styles.module.scss";

import Layout from "@layout/auth-layout";

import CloseIcon from "@material-ui/icons/Close";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";

import Link from "@shared/link";

import Input from "@shared/forms";

import { useForm } from "react-hook-form";
import useFetch from "hooks/use-fetch";
import { useEffect, useState } from "react";

import Spinner from "@shared/loaders";

const FirstStep = () => {
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
    <div>
      <div className={styles.top}>
        <h1>Crear cuenta</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={AlternateEmailIcon}
          name="username"
          placeholder="Nombre de usuario"
          register={register({
            required: {
              value: true,
              message: "El nombre de usuario es obligatorio.",
            },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.username}
        />

        <Input
          icon={AlternateEmailIcon}
          name="email"
          placeholder="Correo"
          register={register({
            required: { value: true, message: "El correo es obligatorio" },
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

        <h2>Fecha de nacimiento</h2>
        <p>
          Esta información no será pública. Confirma tu propia edad, incluso si
          esta cuenta es para una empresa, una mascota u otra cosa.
        </p>

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
          {isFetching ? <Spinner color="#e5ecf3" /> : "SIGUIENTE"}{" "}
        </button>
      </form>
    </div>
  );
};

const SecondStep = ({ state }) => {
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
    <div className={state >= 2 ? styles.display : ""}>
      <div className={styles.top}>
        <h1>Te enviamos un codigo de verificación</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <span> Introdúcelo abajo para verificar sas21xsa21@hotmail.com </span>
        <Input
          name="code"
          placeholder="Codigo"
          autocomplete="off"
          type="number"
          register={register({
            required: {
              value: true,
              message: "El nombre de usuario es obligatorio.",
            },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.username}
        />
        <span> Reenviar correo </span>

        <button disabled={isFetching} className={styles.btn}>
          {" "}
          {isFetching ? <Spinner color="#e5ecf3" /> : "VERIFICAR"}{" "}
        </button>
      </form>
    </div>
  );
};

const ThirdStep = ({ state }) => {
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
    <div className={state >= 3 ? styles.display : ""}>
      <div className={styles.top}>
        <h1>Te enviamos un codigo de verificación</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={LockIcon}
          name="firstname"
          type="text"
          placeholder="Nombres"
          register={register({
            required: { value: true, message: "La contraseña es obligatorio." },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.names}
        />

        <Input
          icon={LockIcon}
          name="lastaname"
          type="text"
          placeholder="Apellidos"
          register={register({
            required: { value: true, message: "La contraseña es obligatorio." },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.password}
        />

        <Input
          icon={LockIcon}
          name="bio"
          type="textarea"
          placeholder="Biografia"
          register={register({
            required: { value: true, message: "La contraseña es obligatorio." },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.bio}
        />

        <button disabled={isFetching} className={styles.btn}>
          {" "}
          {isFetching ? <Spinner color="#e5ecf3" /> : "SIGUIENTE"}{" "}
        </button>
      </form>
    </div>
  );
};

const FourStep = ({ state }) => {
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
    <div className={state >= 4 ? styles.display : ""}>
      <div className={styles.top}>
        <h1>Agrega una imagen de perfil</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="avatar"
          placeholder="Avatar"
          type="file"
          register={register({
            required: {
              value: true,
              message: "El nombre de usuario es obligatorio.",
            },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.avatar}
        />

        <Input
          name="header"
          placeholder="header"
          type="file"
          register={register({
            required: {
              value: true,
              message: "El nombre de usuario es obligatorio.",
            },
            minLength: {
              value: 4,
              message: "La longitud minima es de 4 caracteres.",
            },
          })}
          errors={errors.header}
        />

        <button disabled={isFetching} className={styles.btn}>
          {" "}
          {isFetching ? <Spinner color="#e5ecf3" /> : "GUARDAR"}{" "}
        </button>
      </form>
    </div>
  );
};

export default function AuthRegisterView() {
  const [state, setState] = useState(1);

  const handleClickNext = () => setState(state + 1);
  const handleClickAfter = () => setState(state - 1);

  useEffect(() => {
    console.log(state);
  });

  return (
    <Layout>
      <div className={styles.container}>
        <FirstStep state={state} />
        <SecondStep state={state} />
        <ThirdStep state={state} />
        <FourStep state={state} />
      </div>

      <button onClick={handleClickAfter}>Anterior</button>
      <button onClick={handleClickNext}>Siguiente</button>
    </Layout>
  );
}
