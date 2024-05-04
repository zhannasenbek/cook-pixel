import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/__navbar/Navbar';
import Footer from '../../components/__footer/Footer';
import styles from './ingredients.module.css';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(0);
  const [clickedIngredients, setClickedIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const response = await axios.get('http://77.238.253.133:3000/api/ingredients');
      const data = response.data.map((item) => ({ ...item, isClicked: false }));
      setClickedIngredients(data);
    };
    getIngredients();
  }, []);

  const handleButtonClick = (ingredientId) => {
    setClickedIngredients(
      clickedIngredients.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          setCount((prevCount) => (ingredient.isClicked ? prevCount - 1 : prevCount + 1));
          return { ...ingredient, isClicked: !ingredient.isClicked };
        }
        return ingredient;
      })
    );
  };

  const groupIngredients = (ingredients, groupSize) => {
    const grouped = [];
    let index = 0;

    while (index < ingredients.length) {
      grouped.push(ingredients.slice(index, index + groupSize));
      index += groupSize;
      groupSize = groupSize === 8 ? 7 : 8;
    }

    return grouped;
  };

  const groupedIngredients = groupIngredients(clickedIngredients, 9);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div style={{ marginTop: '100px', display: 'flex', gap: '30px' }}>
          <button className={styles.tandaldyButton}> Таңдалды  {count}</button>
          <button
            className={styles.tandaldyButton}
            style={{ backgroundColor: '#F14B0F', color: 'white' }}
          >
            Рецептер көру
          </button>
        </div>
        <hr />
        <div style={{ backgroundColor: '#FEEDAA' }}>
          {groupedIngredients.map((group, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FEEDAA',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {group.map((item) => (
                <button
                  key={item.id}
                  style={{
                    width: '124.28px',
                    height: '42.02px',
                    border: '1px #f14b0f solid',
                    background: 'white',
                    margin: '5px',
                  }}
                  onClick={() => handleButtonClick(item.id)}
                  className={item.isClicked ? styles.clickedButton : ''}
                >
                  {item.ingredientName}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ingredients;
