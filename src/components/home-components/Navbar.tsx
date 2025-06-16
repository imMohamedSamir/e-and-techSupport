import { Link } from 'react-router-dom';
import logo from '/logo.png';
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="e& logo" />
          </Link>
        </li>
        <li>
          <Link to="/">1st Line</Link>
        </li>
        <li>
          <Link to="/">2st Line</Link>
        </li>
      </ul>
    </nav>
  );
}
