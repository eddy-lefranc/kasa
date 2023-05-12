// Importations

import Header from '../components/Header';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import styles from '../styles/pages/housing.module.css';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

// Définition de la fonction "Housing"

function Housing() {

  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL.

  // Si l'ID entré dans l'URL est incorrect (l'ID ne correspond à aucun logement)

  if (logements.find((housing) => housing.id === id) === undefined) { // Si aucun logement n'est retrouvé
    return <Navigate to="*" />; // L'utilisateur est redirigé sur la page d'erreur
  }

  // Si l'ID est valide (l'ID de l'URL correspond à l'ID d'un logement)

  const housing = logements.find((housing) => housing.id === id);
  const hostFirstname = housing.host.name.split(' ')[0];
  const hostLastname = housing.host.name.split(' ')[1];
  const descriptionContent = housing.description;
  const descriptionArray = [
    {
      "title": "Description",
      "content": descriptionContent
    }
  ]
  const equipmentContent = housing.equipments;
  const equipmentArray = [
    {
      "title": "Équipements",
      "content": equipmentContent
    }
  ]

  return (
    <>
      <Header />
      <main>
        <Slideshow imageData={housing.pictures} />
        <div className={styles.main__flexbox__space__between}>
          <div className={styles.main__flexbox__column}>
            <div className={styles.main__housing__informations}>
              <h1 className={styles.main__housing__title}>{housing.title}</h1>
              <p className={`${styles.main__housing__paragraph} ${styles.main__housing__paragraph__margin}`}>{housing.location}</p>
            </div>
            <Tag tagData={housing.tags} />
          </div>
          <div className={styles.main__housing__host__informations}>
            <div className={styles.main__flexbox__host}>
              <div className={styles.main__housing__host}>
                <p className={styles.main__housing__paragraph}>{hostFirstname}</p>
                <p className={styles.main__housing__paragraph}>{hostLastname}</p>
              </div>
              <div className={styles.main__host__picture__container}>
                <img src={housing.host.picture} alt='host' className={styles.main__host__picture} />
              </div>
            </div>
            <Rating givenRating={housing.rating} givenClass="main__housing__rating" />
          </div>
        </div>
        <div className={styles.main__flexbox__space__between2}>
          <Collapse page="housing" sections={descriptionArray} />
          <Collapse page="housing" sections={equipmentArray} />
        </div>
      </main>
      <Footer />
    </>
  );

}

// Exportation de la fonction "Housing"

export default Housing;