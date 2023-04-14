import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

function Housing() {
  const { id } = useParams();
  const housing = logements.find((housing) => housing.id === id);

  return (
    <>
      <Navigation />
      <h1>{housing.title}</h1>
    </>
  );
}

export default Housing;
