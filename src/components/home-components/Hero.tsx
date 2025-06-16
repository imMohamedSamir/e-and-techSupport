import styles from '../../styles/home-hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1>Technical support guide</h1>
        <p>
          Your comprehensive network guide for managing and troubleshooting
          network infrastructure
        </p>
      </div>
    </section>
  );
}
