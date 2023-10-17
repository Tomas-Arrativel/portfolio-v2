import Link from 'next/link';
import styles from './button.module.css';

const Button = ({ link, text }) => {
  return (
    <Link href={link} className={styles.btn}>
      {text}
    </Link>
  );
};

export default Button;
