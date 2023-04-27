import greyStar from '../images/Star.png';
import redStar from '../images/Star2.png';
import styles from '../styles/pages/housing.module.css';

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

export default Rating;
