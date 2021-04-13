import React from 'react';
import { Link } from 'react-router-dom';

import { UseMeals, MealsList } from '../meals';
import { UseIngredients, IngredientsList } from '../ingredients';

export const homePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = UseMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = UseIngredients();

  console.log(meals);

  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
      <div className="column">
        <IngredientsList
          isLoading={isLoadingIngredients}
          ingredients={ingredients}
        />
        <Link to="/shopping-list">
          <button className="shopping-list-button list-container full-width">
            Generate Shopping List
          </button>
        </Link>
      </div>
    </div>
  );
};
