import Button from '@/components/Button/Button';
import styles from './page.module.css';
import Image from 'next/image';

function PortfolioCategory({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.paragraph}>Test</p>
          <Button link='#' text='Test' />
        </div>
        <div className={styles.imgContainer}>
          <Image src='' alt='' fill={true} className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCategory;
