import Button from '@/components/Button/Button';
import styles from './page.module.css';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];

  if (data) return data;

  return notFound();
};

function PortfolioCategory({ params }) {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <Button link='#' text='Test' />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.image} alt='' fill={true} className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioCategory;
