// Importations

import 'typeface-montserrat';
import Header from '../components/Header';
import { Banner } from '../components/Banner';
import styles from '../styles/pages/home.module.css';
import Card from '../components/Card';
import Footer from '../components/Footer';

// Définition de la fonction "Home"

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <section className={styles.main__section}>
          <Card />
        </section>
      </main>
      <Footer />
    </>
  );
}

// Exportation de la fonction "Home"

export default Home;