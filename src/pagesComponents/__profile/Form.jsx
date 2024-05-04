import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';
import logo from '../../assets/profile.svg';
import axios from 'axios';
import Cookies from 'js-cookie';
import classNames from 'classnames';
const Form = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = axios.get(`http://77.238.253.133:3000/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      });
      setData((await response).data);
    };
    getData();
  }, []);

  const { firstName, lastName } = data;
  console.log(data);
  return (
    <div className={styles.main__form}>
      <form className={styles.form}>
        <div className={styles.form__container}>
          <div>
            <img src={logo} alt="profile"></img>
            <div className={styles.form__nameContainer}>
              <div>{firstName}</div>
              <div>{lastName} </div>
            </div>
          </div>
          <div>
            {Object.entries(data).map(([key, value], index) => {
              // Exclude specific keys
              if (['re_password', 'password', 'id'].includes(key)) return null;

              // Use classnames to conditionally apply styles
              const textContainerClass = classNames(styles.form_secondText, {
                [styles.marginLeftText]: key === 'age',
                [styles.marginLeftWeight]: key === 'weight',
                [styles.marginRight10px]: key === 'lastName',
              });

              return (
                <div key={index}>
                  <div className={styles.form_textContainer}>
                    <span className={styles.form__firstText}>{key}</span>
                    <span className={textContainerClass}>{value}</span>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Мәліметтерді өзгерту</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
