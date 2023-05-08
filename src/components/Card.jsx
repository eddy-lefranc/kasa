// Importations

import styles from '../styles/components/card.module.css';
import data from '../data/logements.json';
import { Link } from 'react-router-dom';

// Définition de la fonction "Card"

function Card() {
  return data.map((housing) => (
    <Link to={`/housings/${housing.id}`} key={housing.id} className={styles.main__section__a}>
      <article>
        <img src={housing.cover} alt={housing.title} />
        <div>
          <h2>{housing.title}</h2>
        </div>
      </article>
    </Link >
  ));
}

// Exportation de la fonction "Card"

export default Card;