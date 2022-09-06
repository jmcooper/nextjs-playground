import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to the{' '}
        <span className={styles.playground}>Next.js Playground!</span>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <p className={styles.description}>
        <div>This playground is for use with the</div>
        <div>Pluralsight React with Next.js Playbook Course</div>
      </p>
    </div>
  );
}
