// Importation du style pour le composant "Tag"

import styles from '../styles/components/tag.module.css';

// Définition de la fonction "Tag"

function Tag({ tagData }) {
    return (
        <div className={styles.main__tags__container}>
            {tagData.map((tag, index) => {
                return (
                    <div key={index} className={styles.main__tag__container}>
                        <p>{tag}</p>
                    </div>
                );
            })}
        </div>
    );
}

// Exportation de la fonction "Tag"

export default Tag;