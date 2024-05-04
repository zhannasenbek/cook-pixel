import React from 'react';
import styles from './input.module.css';
import classNames from 'classnames';
const Input = ({ placeholder, onChange, name, className, type}) => {
  const inputClassname = classNames(styles.input, className);
  return (
    <input
      className={inputClassname}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
