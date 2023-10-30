import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return res.json();
}

async function BlogPage() {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => {
        <Link
          href='/blog/testId'
          className={styles.postContainer}
          key={item.id}
        >
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>description</p>
          </div>
        </Link>;
      })}
    </div>
  );
}

export default BlogPage;
