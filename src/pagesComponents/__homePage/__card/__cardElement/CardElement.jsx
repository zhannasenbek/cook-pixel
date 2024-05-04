import React from 'react';
import styles from './cardElement.module.css';
const CardElement = ({ digit, text, src }) => {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <div className={styles.card}>
        <div className={styles.card__digit}>{digit}</div>
        <div className={styles.card__imgContainer}>
          <img src={src} className={styles.card__img} alt='card'></img>
        </div>
        <div className={styles.card__text}>{text}</div>
      </div>
      {digit < 4 && <div className={styles.card__line}></div>}
    </div>
  );
};

export default CardElement;
