import React, { useState, useEffect } from 'react';
import image from '../../assets/image.svg';
import RecipesCard from '../__recipes/recipesCard/RecipesCard';
import Navbar from '../../components/__navbar/Navbar';
import axios from 'axios';

const SearchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsSearching(true);
        const url = searchQuery
          ? `http://77.238.253.133:3000/api/recipes/name?name=${searchQuery}`
          : `http://77.238.253.133:3000/api/recipes`;
        const response = await axios.get(url);
        setRecipes(response.data); // axios automatically handles JSON conversion
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      } finally {
        setIsSearching(false);
      }
    };

    // Setting up the debounce mechanism
    const timerId = setTimeout(() => {
      fetchData();
    }, 500); // 500 milliseconds delay

    // Cleanup function to cancel the timeout if the component unmounts
    // or if the searchQuery changes before the timeout is reached.
    return () => clearTimeout(timerId);
  }, [searchQuery]); // useEffect will run again if searchQuery changes.

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex',     color:'white', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          style={{
            backgroundColor: '#FA9344',
            width: '428px',
            height: '50px',
            borderRadius: '15px',
            outline:'none',
            color:'white',
            marginTop:'20px',
            padding:'10px'
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {isSearching ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          {recipes.map((item) => (
            <RecipesCard key={item.id} image={image} recipeName={item.recipeName} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchRecipes;
