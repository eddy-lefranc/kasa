// Importations

import Header from '../components/Header';
import Footer from '../components/Footer'
import styles from '../styles/pages/error.module.css';
import { Link } from 'react-router-dom';

// Définition de la fonction "Error"

function Error() {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.main__heading}>404</h1>
        <p className={styles.main__paragraph}>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className={styles.main__a}>Retourner sur la page d'accueil</Link>
      </main>
      <Footer />
    </>
  );
}

// Exportation de la fonction "Error"

export default Error;