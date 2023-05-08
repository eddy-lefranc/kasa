// Importations

import styles from '../styles/components/slideshow.module.css';
import vectorLeft from '../images/icones/vectorLeft.png';
import vectorRight from '../images/icones/vectorRight.png';
import { useState } from 'react';

// Définition de la fonction "Slideshow"

function Slideshow({ imageData }) {

    const previousIcon = imageData.length === 1 ? null : vectorLeft;
    const previousIconAltText = previousIcon === vectorLeft ? 'left-icon' : '';
    const nextIcon = imageData.length === 1 ? null : vectorRight;
    const nextIconAltText = nextIcon === vectorRight ? 'right-icon' : '';
    const [slide, setSlide] = useState(0);
    const previousSlide = () => { // Au clic sur la flèche gauche
        setSlide(slide === 0 ? imageData.length - 1 : slide - 1);
    };
    const nextSlide = () => { // Au clic sur la flèche droite
        setSlide(slide === imageData.length - 1 ? 0 : slide + 1);
    };

    return (
        <div className={styles.main__slideshow}>
            <img
                src={previousIcon}
                alt={previousIconAltText}
                className={`${styles.main__slideshow__arrow} ${styles.main__slideshow__icon__left}`}
                onClick={previousSlide}
            />
            {imageData.map((url, index) => {
                return (
                    <img
                        src={url}
                        alt={`slide ${index + 1}`}
                        key={index}
                        className={
                            slide === index
                                ? `${styles.main__slideshow__slide}`
                                : `${styles.main__slideshow__slide} ${styles.main__slideshow__hidden}`
                        }
                    />
                );
            })}
            <img
                src={nextIcon}
                alt={nextIconAltText}
                className={`${styles.main__slideshow__arrow} ${styles.main__slideshow__icon__right}`}
                onClick={nextSlide}
            />
            <div className={styles.main__slideshow__counter}>
                <p className={styles.main__slideshow__counter__paragraph}>{slide + 1}/{imageData.length}</p>
            </div>
        </div>
    );
}

// Exportation de la fonction "Slideshow"

export default Slideshow;