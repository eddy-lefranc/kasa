// Importations

import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import dataCollapseAbout from '../data/collapse-content.json';

// Définition de la fonction "About"

function About() {
  return (
    <>
      <Header />
      <main>
        <Banner bannerClass="main__banner__about" />
        <Collapse sections={dataCollapseAbout} />
      </main>
      <Footer />
    </>
  );
}

// Exportation de la fonction "About"

export default About;