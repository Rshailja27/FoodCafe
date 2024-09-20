import {React, useState} from 'react';
import MenuCard from './MenuCard';
import AppNavigationBar from './AppNavigationBar';
import FoodItemsMenu from "./MenuApi";

const categories = [
    ...new Set(FoodItemsMenu.map((item) =>{
      return item.category;
    })   
  ), 
  "All",
];

const foodName = [
    ...new Set(FoodItemsMenu.map((item) =>{
      return item.foodName;
    })   
  ),
];
export default function FoodMenu({ handleThemeChange }) {
   
  const [foodMenu, setFoodMenu] = useState(FoodItemsMenu);
  const [menuList, setMenuList] = useState(categories);

const handleIsLike = (id) =>{
  setFoodMenu((checkLike) => 
    checkLike.map((item) => 
          item.id === id ? {                
                  ...item,
                  isLike : !item.isLike,              
          } :item
        )
)};

const showCategory = (category) => {
  if (category === "All") {
    setFoodMenu(FoodItemsMenu);
    return;
  } else {
    const filteredMenu = FoodItemsMenu.filter((item) => item.category === category);
    setFoodMenu(filteredMenu);
  }
};

const handleFoodSearch = (foodName) => {
  if (!foodName.trim()) {
    setFoodMenu(FoodItemsMenu); // Show all items if search input is empty
  } else {
    const filteredMenu = FoodItemsMenu.filter((item) =>
      item.foodName.toLowerCase().includes(foodName.toLowerCase())
    );
    setFoodMenu(filteredMenu);
  }
};

const [numCount, setNumCount] = useState(0);
    const incrCount = () => { 
        setNumCount(numCount + 1)
    };

   
  return (
    <>
      <AppNavigationBar showCategory={ showCategory } 
      menuList={ menuList } numCount={numCount}
      handleThemeChange={handleThemeChange}
      handleFoodSearch={handleFoodSearch}      
      />
      <MenuCard foodMenu={foodMenu} 
      handleIsLike={handleIsLike} 
      incrCount={incrCount}
      />
    </>
  );
};
