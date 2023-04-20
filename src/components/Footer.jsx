// Importations

import logoFooter from '../images/logo/LogoFooter.png'
import styles from '../styles/components/footer.module.css'

// Définition de la fonction "Footer"

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logoFooter} alt='logo-footer-kasa' width={122} />
            <p className={styles.footer__p}>© 2020 Kasa. All rights reserved</p>
        </footer >
    )
}

// Exportation de la fonction "Footer"

export default Footer