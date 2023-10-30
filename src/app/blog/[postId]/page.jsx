import Image from 'next/image';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function BlogPost({ params }) {
  const data = await getData(params.postId);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.body}</p>
          <div className={styles.author}>
            <span className={styles.username}>Tomás Arrativel</span>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='a bear in street art'
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          voluptatibus tempora nobis fuga! Dolorum alias numquam nesciunt, rem
          necessitatibus asperiores eos tempore quaerat distinctio provident
          doloremque doloribus assumenda in ex?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse dolores quidem maxime illo
          perspiciatis at quae non accusantium, molestias perferendis?
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
