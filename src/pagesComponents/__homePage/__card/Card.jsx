import React, { useState } from 'react';
import styles from './card.module.css';
import firstCard from '../../../assets/firstCard.svg';
import secondCard from '../../../assets/secondCard.svg';
import thirdCard from '../../../assets/thirdCard.svg';
import fourthCard from '../../../assets/fourth.svg';
import CardElement from './__cardElement/CardElement';
const card = [
  {
    number: 1,
    src: firstCard,
    text: 'Өзіңізде бар өнімдерді белгілеп шығасыз',
  },
  {
    number: 2,
    src: secondCard,
    text: 'Рецепт іздеу батырмасын басасыз',
  },
  {
    number: 3,
    src: thirdCard,
    text: 'Өзіңізге ұнаған рецептін таңдайсыз',
  },
  {
    number: 4,
    src: fourthCard,
    text: 'Өзіңізге ұнаған рецептін таңдайсыз',
  },
];
const Card = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__mainText}>Бұл қалай жұмыс істейді?</div>
      <div className={styles.cardContainer}>
        {card.map((item, index) => (
          <CardElement
            key={index}
            src={item.src}
            digit={item.number}
            text={item.text}
          ></CardElement>
        ))}
      </div>
    </div>
  );
};

export default Card;
