// Importations

import { Link } from 'react-router-dom';
import LOGO from '../images/logos/LOGO.png';
import styles from '../styles/components/header.module.css';

// Définition de la fonction "Header"

function Header() {
  return (
    <header>
      <nav className={styles.flexboxSpaceBetween}>
        <img src={LOGO} alt="logo-kasa" />
        <ul className={` ${styles.flexboxSpaceBetween} ${styles.header__nav__ul}`}>
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
    </header>
  );
}

// Exportation de la fonction "Header"

export default Header;
