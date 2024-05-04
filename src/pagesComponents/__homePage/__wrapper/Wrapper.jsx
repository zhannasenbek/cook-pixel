import React from 'react';
import styles from './wrapper.module.css';
import arrowRight from '../../../assets/arrowRight.svg';
import book from '../../../assets/book.svg';
import stove from '../../../assets/stove.svg';
import salat from '../../../assets/salat.svg';
import { Link } from 'react-router-dom';
const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__text}>
        Бүгін қандай тағам <br />
        жасайтыныңызды білесіз бе?{' '}
      </div>
      <div className={styles.wrapper__container}>
        <img src={salat} className={styles.wrapper__img}></img>
        <div className={styles.wrapper__imgContainer}>
          <img src={arrowRight} className={styles.wrapper__arrow}></img>
          <button className={styles.wrapper__button}>Иә</button>
        </div>
        <Link to={'/searchRecipes'} className={styles.wrapper__imgContainer}>
          <img src={arrowRight} className={styles.wrapper__arrow}></img>
          <button className={styles.wrapper__button}>Әзірге жоқ</button>
        </Link>
        <img src={salat} className={styles.wrapper__img}></img>
      </div>
      <div className={styles.wrapper__categoryContainer}>
        <div className={styles.wrapper__spanContainer}>
          <span className={styles.wrapper__span}>Рецептер бөлімі</span>
          <img src={book} className={styles.wrapper__bookLogo}></img>
        </div>
        <div className={styles.wrapper__spanContainer}>
          <span className={styles.wrapper__span}>Категория </span>
          <img src={stove} className={styles.wrapper__stoveLogo}></img>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
