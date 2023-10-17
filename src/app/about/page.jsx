import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/button';

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
          fill={true}
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Full-stack Developer</h1>
          <h3 className={styles.imgDesc}>
            I'm Tomás Arrativel. Passionate web Developer from Argentina. 📍
          </h3>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who I am?</h1>
          <p className={styles.desc}>
            I'm a Fullstack web developer from Argentina. Enthusiastic developer
            with an addiction for discovering new coding perspectives. Check out
            some of my practice on my Portfolio section. I specialize in
            frontend languages ​​but currently I have learned to use backend
            languages ​​to make pages like this and become a Fullstack developer
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then do not hesitate to contact me.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>
            I make websites that provide an excellent user experience and have a
            very intuitive interface. With my knowledge I can make:
            <br />
            <br />- Creative Web interfaces
            <br />- Fast and responsive websites
            <br />- Dynamic websites
          </p>
          <Button link='/contact' text='Contact me' />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
