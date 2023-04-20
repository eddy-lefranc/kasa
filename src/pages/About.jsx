// Importations

import Header from '../components/Header'
import { BannerAbout } from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer'

// Définition de la fonction "About"

function About() {

  return (
    <>
      <Header />
      <main>
        <BannerAbout />
        <Collapse />
      </main>
      <Footer />
    </>
  );
}

// Exportation de la fonction "About"

export default About;
