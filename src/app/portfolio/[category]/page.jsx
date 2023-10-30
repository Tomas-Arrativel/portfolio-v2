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
          <p className={styles.description}>Test</p>
          <Button link='#' text='Test' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='street art'
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Test</p>
          <Button link='#' text='Test' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='street art'
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Test</p>
          <Button link='#' text='Test' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='street art'
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCategory;
