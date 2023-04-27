// Importations

import Header from '../components/Header';
import Banner from '../components/Banner';
import aboutData from '../data/AboutContent.json';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

// Définition de la fonction "About"

function About() {

  return (
    <>
      <Header />
      <main>
        <Banner bannerClass="main__banner__about" />
        <Collapse data={aboutData} />
      </main>
      <Footer />
    </>
  );
}

// Exportation de la fonction "About"

export default About;
