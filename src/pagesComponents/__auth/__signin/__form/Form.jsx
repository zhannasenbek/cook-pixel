import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';
import styles from './form.module.css';
import Input from '../../../../components/__input/Input';
import Button from '../../../../components/__button/Button';
import logo from '../../../../assets/logo1.svg';
import Cookies from 'js-cookie';
const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const linkClassname = classNames(styles.form__link, {
    [styles.activeLink]: location.pathname === '/login',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://77.238.253.133:3000/api/auth/login', {
        login: email,
        password: password,
      });

      Cookies.set('access', response.data.token, { expires: 1 / 24 });

      Cookies.set('refresh', response.data.refresh, { expires: 30 });
      if (response.status === 201) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__logoContainer}>
          <img src={logo} alt="Logo" width={200} />
        </div>
        <div className={styles.form__linkContainer}>
          <Link to={'/register'} className={styles.form__link}>
            Тіркелу
          </Link>
          <Link to={'/login'} className={linkClassname}>
            Кіру
          </Link>
        </div>
        <div className={styles.nameContainer}>
          <Input
            placeholder="Email"
            className="input-email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <Input
            placeholder="Құпия сөз"
            type="password"
            className="input-password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" text="Кіру" />
        </div>
      </form>
    </div>
  );
};

export default Form;
