import Input, { InputDate } from '@shared/forms';
import { useEffect, useState } from 'react';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Layout from '@layout/auth-layout';
import Link from '@shared/link';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Spinner from '@shared/loaders';
import styles from './styles.module.scss';
import useFetch from 'hooks/use-fetch';
import { useForm } from 'react-hook-form';

const FirstStep = ({ state, setState }) => {
  const { register, errors, handleSubmit } = useForm();
  const [AJAX, data, isFetching] = useFetch();

  const onSubmit = async ({ username, password, email }) => {
    AJAX('http://localhost:8000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    if(data && data.ok) {
      setState(state + 1)
    }
  }, [data])

  return (
    <div>
      <div className={styles.top}>
        <h1>Crear cuenta</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={PersonIcon}
          name='username'
          placeholder='Nombre de usuario'
          register={register({
            required: {
              value: true,
              message: 'El nombre de usuario es obligatorio.',
            },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
            maxLength: {
              value: 20,
              message: 'La longitud maxima es de 20 caracteres.',
            },
            pattern: {
              value: /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){2,20}[a-zA-Z0-9]$/,
              message: "Usuario no valido."
            }
          })}
          errors={errors.username}
        />

        <Input
          icon={AlternateEmailIcon}
          name='email'
          placeholder='Correo'
          register={register({
            required: { value: true, message: 'El correo es obligatorio' },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "El correo es invalido."
            }
          })}
          errors={errors.email}
        />

        <Input
          icon={LockIcon}
          name='password'
          type='password'
          placeholder='Contraseña'
          register={register({
            required: {
              value: true,
              message: 'La contraseña es obligatoria.',
            },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 6 caracteres.',
            },
            maxLength: {
              value: 20,
              message: 'La longitud maxima es de 16 caracteres.',
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/,
              message: "Debe de contener mayusculas y minisculas, ademas de por lo menos un numero y caracter especial."
            }
          })}
          errors={errors.password}
        />

        <h2 className={styles.subtitle} >Fecha de nacimiento</h2>
        <p>
          Esta información no será pública. Confirma tu propia edad, incluso si
          esta cuenta es para una empresa, una mascota u otra cosa.
        </p>

        <Input
          icon={CalendarTodayIcon}
          name='birthday'
          type='date'
          register={register({
            required: { value: true, message: 'La contraseña es obligatorio.' },
            min: {
              value: "1950-01-01",
              message: 'El año minimo es 1950.',
            },
            max: {
              value: "2100-01-01",
              message: 'El año maximo es 2100.',
            },
          })}
          errors={errors.birthday}
        />

        <button disabled={isFetching} className={styles.btn}>
          {isFetching ? <Spinner color='#e5ecf3' /> : 'SIGUIENTE'}
        </button>
        
      </form>
    </div>
  );
};

const SecondStep = ({ state }) => {
  const { register, errors, handleSubmit } = useForm();
  const [AJAX, data, isFetching] = useFetch();

  const onSubmit = async ({ code }) => {
    AJAX('http://localhost:8000/api/auth/verify', {
      method: 'POST',
      body: JSON.stringify({
        code: code
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    if(data && data.ok) {
      setState(state + 1)
    }
  }, [data])

  return (
    <div className={state >= 2 ? styles.display : ''}>
      <div className={styles.top}>
        <h1>Te enviamos un codigo de verificación</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <span> Introdúcelo abajo para verificar sas21xsa21@hotmail.com </span>
        <Input
          name='code'
          placeholder='Codigo'
          autocomplete='off'
          type='number'
          register={register({
            required: {
              value: true,
              message: 'El nombre de usuario es obligatorio.',
            },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
          })}
          errors={errors.username}
        />
        <span> Reenviar correo </span>

        <button disabled={isFetching} className={styles.btn}>
          
          {isFetching ? <Spinner color='#e5ecf3' /> : 'VERIFICAR'}
        </button>
      </form>
    </div>
  );
};

const ThirdStep = ({ state }) => {
  const { register, errors, handleSubmit } = useForm();
  const [AJAX, data, isFetching] = useFetch();

  const onSubmit = async ({ username, password }) => {
    AJAX('http://localhost:8000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: username,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className={state >= 3 ? styles.display : ''}>
      <div className={styles.top}>
        <h1>Completa tu perfil</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={LockIcon}
          name='firstname'
          type='text'
          placeholder='Nombres'
          register={register({
            required: { value: true, message: 'La contraseña es obligatorio.' },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
          })}
          errors={errors.names}
        />

        <Input
          icon={LockIcon}
          name='lastaname'
          type='text'
          placeholder='Apellidos'
          register={register({
            required: { value: true, message: 'La contraseña es obligatorio.' },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
          })}
          errors={errors.password}
        />

        <Input
          icon={LockIcon}
          name='bio'
          type='textarea'
          placeholder='Biografia'
          register={register({
            required: { value: true, message: 'La contraseña es obligatorio.' },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
          })}
          errors={errors.bio}
        />

        <button disabled={isFetching} className={styles.btn}>
          
          {isFetching ? <Spinner color='#e5ecf3' /> : 'SIGUIENTE'}
        </button>
      </form>
    </div>
  );
};

const FourStep = ({ state }) => {
  const { register, errors, handleSubmit } = useForm();
  const [AJAX, data, isFetching] = useFetch();

  const onSubmit = async ({ username, password }) => {
    AJAX('http://localhost:8000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: username,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className={state >= 4 ? styles.display : ''}>
      <div className={styles.top}>
        <h1>Agrega una imagen de perfil</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='avatar'
          placeholder='Avatar'
          type='file'
          register={register({
            required: {
              value: true,
              message: 'El nombre de usuario es obligatorio.',
            },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
          })}
          errors={errors.avatar}
        />

        <Input
          name='header'
          placeholder='header'
          type='file'
          register={register({
            required: {
              value: true,
              message: 'El nombre de usuario es obligatorio.',
            },
            minLength: {
              value: 4,
              message: 'La longitud minima es de 4 caracteres.',
            },
          })}
          errors={errors.header}
        />

        <button disabled={isFetching} className={styles.btn}>
          {isFetching ? <Spinner color='#e5ecf3' /> : 'GUARDAR'}
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
        
        <FirstStep state={state} setState={setState}/>
        <SecondStep state={state} setState={setState}/>
        <ThirdStep state={state} setState={setState}/>
        <FourStep state={state} setState={setState}/>
      
      </div>

      <button onClick={handleClickAfter}>Anterior</button>
      <button onClick={handleClickNext}>Siguiente</button>

    </Layout>
  );
}
