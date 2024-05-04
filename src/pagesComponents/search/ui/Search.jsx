
import React, { useState, useEffect } from 'react';
import RecipesCard from '../../__recipes/recipesCard/RecipesCard';
import image from '../../../assets/image.svg';
import Navbar from '../../../components/__navbar/Navbar';
import Footer from '../../../components/__footer/Footer';
import SearchBar from './searchBar/SearchBar';

const Search = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://77.238.253.133:3000/api/recipes');
      const data = await response.json();
      setRecipes(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar setRecipes={setRecipes} />
      <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        {recipes.map(item => (
          <RecipesCard key={item.id} image={image} recipeName={item.recipeName} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
