import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:5432/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Couldn't load the posts");
  }

  return res.json();
}

async function BlogPage() {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.postContainer}
          key={item._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=''
              height={250}
              width={400}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPage;
