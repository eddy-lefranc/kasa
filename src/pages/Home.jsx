import Header from '../components/Header';
import styles from '../styles/pages/home.module.css'
import 'typeface-montserrat';

function Home() {
  return (
    <div className={`${styles.margin} ${styles.font}`}>
  <Header />
  </div>
  );
}

export default Home;

/*import logements from '../data/logements.json';
import { Link } from 'react-router-dom'; <ul>
        {logements.map((housing) => (
          <li key={housing.id}>
            <Link to={`/housings/${housing.id}`}>{housing.title}</Link>
          </li>
        ))}
      </ul> */