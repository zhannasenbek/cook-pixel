import React from 'react';
import styles from './profile.module.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/right-arrow.svg';
const SubNavbar = () => {
  return (
    <div className={styles.subnavbar}>
      <div className={styles.subnavbar__container}>
        <Link to="/" className={styles.subnavbar__home}>
          Home
        </Link>
        <img src={arrow} className={styles.subnavbar__arrow} alt="arrow"></img>
        <label className={styles.subnavbar__profileText}>Профиль</label>
      </div>
    </div>
  );
};

export default SubNavbar;
