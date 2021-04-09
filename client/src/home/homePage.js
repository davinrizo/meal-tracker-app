import React from 'react';
import { UseMeals, MealsList } from '../meals';

export const homePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = UseMeals();
  console.log(meals);
  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
    </div>
  );
};
