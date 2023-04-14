import { Link } from 'react-router-dom';
import LOGO from '../images/logo/LOGO.png';
import styles from '../styles/components/navigation.module.css';

function Navigation() {
  // trouver un moyen de faire le hover avec le state.
  return (
    <nav className={styles.flexboxSpaceBetween}>
      <img src={LOGO} alt="logo-kasa" />
      <ul className={`${styles.ul} ${styles.flexboxSpaceBetween}`}>
        <li>
          <Link
            to="/"
            className={`${styles.deleteTextDecoration} ${styles.colorFF6060}`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${styles.deleteTextDecoration} ${styles.colorFF6060}`}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
