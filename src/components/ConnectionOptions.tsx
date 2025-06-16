import styles from '../styles/connection-options.module.css';
import ConnectionCard from './ConnectionCard';

type ConnectionOption = {
  image: string;
  url: string;
  content: string;
};

type Props = {
  options: ConnectionOption[];
};

export default function ConnectionOptions({ options }: Props) {
  return (
    <section className={styles.options}>
      {options.map((option) => (
        <ConnectionCard
          key={option.content}
          image={option.image}
          url={option.url}
          content={option.content}
        />
      ))}
    </section>
  );
}
