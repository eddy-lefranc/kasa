// Importation du sous-composant "CardHousing"

import CardHousing from '../components/CardHousing';

// Définition de la fonction "Card"

function CardList({ housingsData }) {
  return housingsData.map((housing) => (
    <CardHousing key={housing.id} housingLink={`/housings/${housing.id}`} housingImage={housing.cover} housingTitle={housing.title} />
  ));
}

// Exportation de la fonction "Card"

export default CardList;