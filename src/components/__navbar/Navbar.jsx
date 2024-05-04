import React from 'react';
import styles from './navbar.module.css';
import user from '../../assets/user.png';
import heart from '../../assets/heart.png';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header className={styles.main__header}>
        <Link to={'/'}>
          {' '}
          <img src={logo} className={styles.main__logo} alt=""></img>
        </Link>
        <Link to={'/profile'}>
          <img src={user} className={styles.main__userLogo} alt="User Logo" />
        </Link>
        <img src={heart} className={styles.main__heartLogo} alt="hear Logo"></img>
      </header>
    </div>
  );
};

export default Navbar;
