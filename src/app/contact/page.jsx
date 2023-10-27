import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's get in touch!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='Contact image'
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='text' placeholder='E-mail' className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='Message'
          ></textarea>
          <Link href='#' className={styles.btn}>
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
