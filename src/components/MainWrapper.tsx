import styles from '../styles/main-wrapper.module.css';
import Container from './Container';
type MainWrapperProps = {
  children: React.ReactNode;
};
export default function MainWrapper({ children }: MainWrapperProps) {
  return (
    <main className={styles.main}>
      <Container children={children} />
    </main>
  );
}
