import { Link } from 'react-router-dom';
import styles from '../styles/connection-card.module.css';
import { useBackground } from '../store/BackgroundContext';

type ConnectionCardProps = {
  image: string;
  url: string;
  content: string;
};

export default function ConnectionCard({
  image,
  url,
  content,
}: ConnectionCardProps) {
  const { setBackground, clearBackground } = useBackground();

  return (
    <Link
      to={url}
      className={styles.card}
      onMouseEnter={() => setBackground(image)}
      onMouseLeave={clearBackground}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={styles.overlayText}>{content}</span>
    </Link>
  );
}
