// Importation du style pour les bannières

import styles from '../styles/components/banner.module.css';

// Définition de la fonction "Banner"

function Banner({ text, bannerClass }) {
   const sectionClass = bannerClass;
   return (
      <section className={styles[sectionClass]}>
         <div className={styles.main__banner__overlay}></div>
         <h1>{typeof text === "string" ? text : ""}</h1>
      </section>
   );
}

// Exportation de la fonction "Banner"

export default Banner;