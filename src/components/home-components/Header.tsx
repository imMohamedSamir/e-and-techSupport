import Container from '../Container';
import styles from '../../styles/header.module.css';
type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container {...{ children }} />
    </header>
  );
}
