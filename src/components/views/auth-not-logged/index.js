import styles from './styles.module.scss';

// Iconos / Material UI
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutline';

// Next Components
import Link from 'next/link';

export default function AuthNotLoggedView() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <div className={styles.left}>
          <div>
            <div className={styles.titleleft}>
              {' '}
              <SearchIcon /> <span>Sigue lo que te interesa.</span>{' '}
            </div>
            <div className={styles.titleleft}>
              {' '}
              <PeopleAltIcon />{' '}
              <span>
                Entérate de qué está hablando la <br /> gente.
              </span>{' '}
            </div>
            <div className={styles.titleleft}>
              {' '}
              <ChatBubbleIcon />
              <span>Únete a la conversación.</span>{' '}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.information}>
            <img src='/tweeter-small.svg' />
            <h3>
              Mira lo que está pasando en el mundo en este <br /> momento
            </h3>
            <h2>Únete a Tweeter hoy mismo.</h2>

            <Link href='/register'>
              <a className={styles.btn}>Regístrate</a>
            </Link>

            <Link href='/login'>
              <a className={styles.btnoutline}>Iniciar sesión</a>
            </Link>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}> <p>© 2021 Tweeter, Inc.</p> </footer> */}
    </div>
  );
}
