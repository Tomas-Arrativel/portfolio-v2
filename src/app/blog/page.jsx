import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

function BlogPage() {
  return (
    <div className={styles.container}>
      <Link href='/blog/testId' className={styles.postContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='street art in snowy wall'
            height={250}
            width={400}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>

      <Link href='/blog/testId' className={styles.postContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='street art in snowy wall'
            height={250}
            width={400}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>

      <Link href='/blog/testId' className={styles.postContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='street art in snowy wall'
            height={250}
            width={400}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogPage;
