import Image from 'next/image';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Tomás Arrativel. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src='/1.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Facebook page'
        />
        <Image
          src='/2.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Instagram page'
        />
        <Image
          src='/3.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='Github page'
        />
      </div>
    </div>
  );
}

export default Footer;
