import { useBackground } from '../store/BackgroundContext';
import styles from '../styles/main-wrapper.module.css';
import Container from './Container';
type MainWrapperProps = {
  children: React.ReactNode;
};
export default function MainWrapper({ children }: MainWrapperProps) {
  const { currentBackground, hasBackground } = useBackground();

  return (
    <main
      className={`${styles.main} ${!hasBackground ? styles.animate : ''}`}
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <Container children={children} />
    </main>
  );
}
