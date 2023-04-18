// Importation du style pour les bannières

import styles from '../styles/components/banner.module.css'

// Exportation de la fonction "Banner"

export function Banner() {
   return (
      <section className={styles.main__banner}>
         <div className={styles.main__banner__overlay}></div>
         <p>Chez vous, partout et ailleurs</p>
      </section>
   )
}

// Exportation de la fonction "BannerAbout"

export function BannerAbout() {
   return (
      <section className={styles.main__banner__about}>
         <div className={styles.main__banner__overlay}></div>
      </section>
   )
}