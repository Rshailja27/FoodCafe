import React, { useState } from 'react';
import {Paper, Box }from '@mui/material';
import MenuCard from './MenuCard';
import AppNavigationBar from './AppNavigationBar';
import FoodItemsMenu from './MenuApi';
import ShowCard from './ShowCard';
import BottomNav from './BottomNav';
import './MenuCard.css';

const categories = [
  ...new Set(FoodItemsMenu.map((item) => item.category)),
  'All',
];

export default function FoodMenu({ handleThemeChange }) {
  const [foodMenu, setFoodMenu] = useState(FoodItemsMenu);
  const [menuList, setMenuList] = useState(categories);
  const [selectedFood, setSelectedFood] = useState(null);
  const [numCount, setNumCount] = useState(0);

  const incrCount = () => {
    setNumCount(numCount + 1);
  };

  const handleIsLike = (id) => {
    setFoodMenu((prevMenu) =>
      prevMenu.map((item) =>
        item.id === id ? { ...item, isLike: !item.isLike } : item
      )
    );

    // Update selectedFood if the toggled item is currently selected
    if (selectedFood && selectedFood.id === id) {
      setSelectedFood((prevSelected) => ({
        ...prevSelected,
        isLike: !prevSelected.isLike,
      }));
    }
  };

  const showCategory = (category) => {
    setSelectedFood(null); // Reset selected food to go back to MenuCard
    if (category === 'All') {
      setFoodMenu(FoodItemsMenu);
      return;
    } else {
      const filteredMenu = FoodItemsMenu.filter(
        (item) => item.category === category
      );
      setFoodMenu(filteredMenu);
    }
  };

  const handleFoodSearch = (foodName) => {
    setSelectedFood(null); // Reset selected food to go back to MenuCard
    if (!foodName.trim()) {
      setFoodMenu(FoodItemsMenu); // Show all items if search input is empty
    } else {
      const filteredMenu = FoodItemsMenu.filter((item) =>
        item.foodName.toLowerCase().includes(foodName.toLowerCase())
      );
      setFoodMenu(filteredMenu);
    }
  };

  const handleCardClick = (foodItem) => {
    setSelectedFood(foodItem); // Set the selected food item to be passed to ShowCard
  };

  return (
    <Box className='home'>
      <AppNavigationBar
        showCategory={showCategory}
        menuList={menuList}
        numCount={numCount}
        handleThemeChange={handleThemeChange}
        handleFoodSearch={handleFoodSearch} 
        />

      {selectedFood ? (
        <ShowCard
          foodItem={selectedFood} 
          handleIsLike={handleIsLike}
          incrCount={incrCount}
        />
      ) : (
        <MenuCard
          foodMenu={foodMenu}
          handleIsLike={handleIsLike}
          incrCount={incrCount}
          handleCardClick={handleCardClick}
        />        
      )}

      <BottomNav />
    </Box>
  );
}
