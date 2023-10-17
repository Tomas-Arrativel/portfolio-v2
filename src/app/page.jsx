import Image from 'next/image';
import styles from './page.module.css';
import hero from 'public/hero.png';
import Button from '@/components/Button/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Juan Tomás, Full-stack developer</h1>
        <p className={styles.desc}>
          Developer that turns your ideas into reality. Fan of challenges and
          adrenaline
        </p>
        <Button link='/portfolio' text='See my work' />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='Hero image' className={styles.heroImg} />
      </div>
    </div>
  );
}
