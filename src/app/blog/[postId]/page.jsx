import Image from 'next/image';
import styles from './page.module.css';

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolorum et ad aut molestiae ut repellat distinctio repellendus eum
            minima. Sapiente dolore illo sequi doloribus! Eaque ab tenetur
            corrupti enim ut necessitatibus eligendi
          </p>
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
