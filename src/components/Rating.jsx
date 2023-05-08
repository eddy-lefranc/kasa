// Importations

import greyStar from '../images/icones/Star.png';
import redStar from '../images/icones/Star2.png';
import styles from '../styles/pages/housing.module.css';

// Définition de la fonction "Rating"

function Rating({ givenRating, givenClass }) {
    const ratingClass = givenClass
    return (
        <div className={styles[ratingClass]}>
            {[...Array(5)].map((_, index) => {
                const isRed = index < givenRating;
                const starImg = isRed ? redStar : greyStar;
                return <img key={index} src={starImg} alt={`étoile ${index + 1}`} />;
            })}
        </div>
    );
}

// Exportation de la fonction "Rating"

export default Rating;