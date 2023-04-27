// Importation du style pour les bannières

import styles from '../styles/components/banner.module.css'

// Définition de la fonction "Banner"

function Banner({ text, bannerClass }) {
   const sectionClass = bannerClass;
   if (typeof text === "string") {
      return ( // Bannière page "Home"
         <section className={styles[sectionClass]}>
            <div className={styles.main__banner__overlay}></div>
            <p>{text}</p>
         </section>
      )
   } else {
      return ( // Bannière page "About"
         <section className={styles[sectionClass]}>
            <div className={styles.main__banner__overlay}></div>
         </section>
      )
   }
}

// Exportation de la fonction "Banner"

export default Banner