import React from 'react';
import logo from '../../assets/logo1.svg';
import inst from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} className={styles.footer__img}></img>
      <div className={styles.footer__containerText}>
        <div>
          <div className={styles.footer__text_bold}>Біз туралы</div>
          <div className={styles.footer__text_marginTop}>Features</div>
          <div>Live share</div>
          <div>Video record</div>
        </div>
        <div className={styles.footer__textSecond}>
          <div className={styles.footer__text_bold}>Бізбен байланысу</div>
          <div className={styles.footer__text_marginTop}>Featured artists</div>
          <div>The portal</div>
          <div>Live events</div>
        </div>
      </div>
      <div className={styles.footer__buttonContainer}>
        <Link to={'/register'}>
          <button className={styles.footer__tirkeluButton}>Тіркелу</button>
        </Link>
        <Link to={'/login'}>
          <button className={styles.footer_kiruButton}>Кіру</button>
        </Link>
      </div>
      <hr className={styles.footer__hr}></hr>
      <div className={styles.footer__bottomContainer}>
        <label>© Photo, Inc. 2019. We love our users!</label>
        <label>Құпиялылық саясаты және Қызмет көрсету шарттарына сілтемелер.</label>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <label>Follow us:</label>
          <div>
            <img src={inst} className={styles.footer__instLogo}></img>
            <img src={youtube} className={styles.footer__youtubeLogo}></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
