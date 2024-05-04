import React from 'react';
import styles from './recipesCard.module.css';
import image1 from '../../../assets/image-removebg-preview.png';
import Cookies from 'js-cookie';
import axios from 'axios';
const RecipesCard = ({ image, recipeName, id }) => {
  const handleSubmitFavorites = async () => {
    try {
      const response = await axios.post('http://77.238.253.133:3000/api/favorites', {
        recipId: id,
      }, {
        headers:{
          Authorization: `Bearer ${Cookies.get('access')}`
        }
      });
      console.log(response)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: '10px',
      }}
    >
      <img src={image} alt="image" width={400} height={400}></img>
      <img
        src={image1}
        style={{ position: 'absolute', top: '5px', right: '5px', cursor:'pointer' }}
        width={50}
        height={50}
        onClick={handleSubmitFavorites}
      ></img>
      <span className={styles.recipeName}>{recipeName}</span>
      <button className={styles.button}>Рецептін көру</button>
    </div>
  );
};

export default RecipesCard;
