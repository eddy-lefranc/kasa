// Importations

import styles from '../styles/pages/home.module.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import data from '../data/logements.json';

// Définition de la fonction "Home"

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner text="Chez vous, partout et ailleurs" bannerClass="main__banner" />
        <section className={styles.main__section}>
          <CardList housingsData={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}

// Exportation de la fonction "Home"

export default Home;