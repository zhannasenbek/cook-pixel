import React from 'react';
import styles from './form.module.css';
import Input from '../../../../components/__input/Input';
import logo from '../../../../assets/logo1.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../../../components/__button/Button';
import axios from 'axios';
import classNames from 'classnames';
const Form = () => {
  const location = useLocation();
  let navigate= useNavigate()
  const linkClassname = classNames(styles.form__link, {
    [styles.activeLink]: location.pathname === '/register',
  });
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    re_password: '',
    age: 0,
    weight: '',
    login: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { re_password, ...res } = data;
    console.log(res);
    // Check if password and re_password are the same
    if (res.password !== re_password) {
      alert('Passwords do not match!');
      return; // Stop the form submission if the passwords do not match
    }

    try {
      const response = await axios.post('http://77.238.253.133:3000/api/auth/register', res);
     if (response.status === 201){
        alert('You succesfully registired')
     }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Only convert to integer for 'age' and 'weight' fields
    if (name === 'age' || name === 'weight') {
      const parsedValue = parseInt(value, 10);
      updatedValue = isNaN(parsedValue) ? '' : parsedValue; // Use parsed value if it's a number, else use empty string
    }

    setData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__logoContainer}>
          <img src={logo} width={200}></img>
        </div>

        <div className={styles.form__linkContainer}>
          <Link to={'/register'} className={`${styles.form__link} `}>
            Тіркелу
          </Link>
          <Link to={'/login'} className={linkClassname}>
            Кіру
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Input
            placeholder={'Аты'}
            onChange={handleChange}
            name="firstName"
            className="input-name"
          ></Input>
          <Input
            placeholder={'Тегі'}
            onChange={handleChange}
            name="lastName"
            className="input-surname"
          ></Input>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
            gap: '20px',
          }}
        >
          <Input
            placeholder={'Email'}
            name="login"
            onChange={handleChange}
            className="input"
            type="email"
          ></Input>
          <Input
            placeholder={'Құпия сөз'}
            className="input"
            name="password"
            type="password"
            onChange={handleChange}
          ></Input>
          <Input
            placeholder={'Құпиясөзді қайтала'}
            name="re_password"
            className="input"
            type="password"
            onChange={handleChange}
          ></Input>
          <div style={{ display: 'flex' }}>
            <Input
              placeholder={'Жасы'}
              name={'age'}
              onChange={handleChange}
              className="input-age"
            ></Input>
            <Input
              placeholder={'Салмағы'}
              name="weight"
              onChange={handleChange}
              className="input-weight"
            ></Input>
          </div>
        </div>
        <div style={{ marginLeft: '45px', marginTop: '10px' }}>
          <input type="checkbox" style={{ accentColor: '#418611' }} required></input>
          <label>Келісім</label>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button text={'Тіркелу'}></Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
