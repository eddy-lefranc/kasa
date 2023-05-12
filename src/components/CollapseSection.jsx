// Importations

import showIcon from '../images/icones/arrow-up.png';
import hideIcon from '../images/icones/arrow-down.png';
import styles from '../styles/components/collapse.module.css';

// Définition de la fonction "CollapseSection"

function CollapseSection(
    {
        section,
        isActiveSection,
        setActiveIndex,
        sectionIndex,
        collapseContainerClass,
        collapseHeadingClass,
        collapseDropdownClass
    }
) {

    const containerClass = collapseContainerClass;
    const headingClass = collapseHeadingClass;
    const dropdownClass = collapseDropdownClass;

    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }

    return (
        <div className={styles[containerClass]}>
            <div className={styles.main__collapse__wrap} onClick={toggleSection}>
                <h1 className={styles[headingClass]}>{section.title}</h1>
                <span>{isActiveSection ? <img src={showIcon} alt='show-icon' /> : <img src={hideIcon} alt='hide-icon' />}</span>
            </div>
            {
                isActiveSection &&
                <div className={styles[dropdownClass]}>
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

// Exportation de la fonction "CollapseSection"

export default CollapseSection;