// Importations

import styles from '../styles/components/cardHousing.module.css';
import { Link } from "react-router-dom";

// Définition de la fonction "CardHousing"

function CardHousing({ housingLink, housingImage, housingTitle }) {
    return (
        <Link to={housingLink} className={styles.main__section__a}>
            <article>
                <img src={housingImage} alt={housingTitle} />
                <div>
                    <h2>{housingTitle}</h2>
                </div>
            </article>
        </Link>
    );
}

// Exportation de la fonction "CardHousing"

export default CardHousing;