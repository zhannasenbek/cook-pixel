import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import styles from './searchbar.module.css';

const { Option } = Select;

const SearchBar = ({ setRecipes }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://77.238.253.133:3000/api/ingredients');
      const data = await response.json();
      setIngredients(data);
    };
    fetchData();
  }, []);

  const handleChange = async (selectedIds) => {
    if (selectedIds.length === 0) {
      try {
        const response = await fetch('http://77.238.253.133:3000/api/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch all recipes:', error);
      }
    } else {
      const queryParams = selectedIds.map((id) => `ingredientId=${id}`).join('&');
      const url = `http://77.238.253.133:3000/api/recipe-ingredient/ingredient?${queryParams}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes based on ingredients:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Select
        mode="multiple"
        showSearch
      
        placeholder="Search for ingredients"
        className={styles.input}
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {ingredients.map((item) => (
          <Option key={item.id}  value={item.id}>
            {item.ingredientName}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SearchBar;
