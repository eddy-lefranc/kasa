// Importations

import { Link } from 'react-router-dom';
import logo from '../images/logos/logo-header.png';
import styles from '../styles/components/header.module.css';

// Définition de la fonction "Header"

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo-kasa" />
        </Link>
        <ul className={styles.header__nav__ul}>
          <li>
            <Link to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about">
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