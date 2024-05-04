import React, { useEffect, useState } from 'react';
import Navbar from '../../components/__navbar/Navbar';
import styles from './recipes.module.css';
import Footer from '../../components/__footer/Footer';
import RecipesCard from './recipesCard/RecipesCard';
import image from '../../assets/image.svg';
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://77.238.253.133:3000/api/recipes');
      const data = await response.json();
      setRecipes(data);
    };
    getData();
  }, []);
  console.log(recipes);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.text_container}>
        <span className={styles.text}> Рецепт түрлері:</span>
        <span className={styles.sub_text}>Қазақ ұлттық тағамдары:</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        {recipes.map((item) => {
          return (
            <RecipesCard key={item.id} id={item.id} image={image} recipeName={item.recipeName} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
