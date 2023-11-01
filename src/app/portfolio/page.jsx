import Link from 'next/link';
import styles from './page.module.css';

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery!</h1>
      <div className={styles.items}>
        <Link href='/portfolio/applications' className={styles.item}>
          <span className={styles.itemTitle}>Applications</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <span className={styles.itemTitle}>Websites</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
