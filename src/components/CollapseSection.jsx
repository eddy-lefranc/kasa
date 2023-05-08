// Importations

import showIcon from '../images/icones/arrow-up.png';
import hideIcon from '../images/icones/arrow-down.png';
import styles from '../styles/components/collapse.module.css';
import { useLocation } from 'react-router-dom';

// Définition de la fonction "CollapseSection"

function CollapseSection({ section, isActiveSection, setActiveIndex, sectionIndex }) {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }
    let location = useLocation();

    if (location.pathname === "/about") {
        return ( // "CollapseSection" page "About"
            <div className={styles.main__collapse}>
                <div className={styles.main__collapse__container}>
                    <div className={styles.main__collapse__wrap} onClick={toggleSection}>
                        <h1 className={styles.main__collapse__about__h1}>{section.title}</h1>
                        <span>{isActiveSection ? <img src={showIcon} alt='show-icon' /> : <img src={hideIcon} alt='hide-icon' />}</span>
                    </div>
                    {
                        isActiveSection &&
                        <div className={styles.main__collapse__dropdown}>
                            <p className={styles.main__collapse__text}>
                                {section.content}
                            </p>
                        </div>
                    }
                </div>
            </div>
        );
    } else {
        return ( // "CollapseSection" page "Housing"
            <div className={styles.main__collapse__container__housing}>
                <div className={styles.main__collapse__wrap} onClick={toggleSection}>
                    <h1 className={styles.main__collapse__housing__h1}>{section.title}</h1>
                    <span>{isActiveSection ? <img src={showIcon} alt='show-icon' /> : <img src={hideIcon} alt='hide-icon' />}</span>
                </div>
                {
                    isActiveSection &&
                    <div className={styles.main__collapse__dropdown__housing}>
                        {Array.isArray(section.content) ? (
                            <ul className={styles.main__collapse__ul__housing}>
                                {section.content.map((item, index) => (
                                    <li key={index} className={styles.main__collapse__text}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.main__collapse__text}>
                                {section.content}
                            </p>
                        )}
                    </div>
                }
            </div>
        );
    }
}

// Exportation de la fonction "CollapseSection"

export default CollapseSection;