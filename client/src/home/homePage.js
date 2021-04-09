import React from 'react';
import { UseMeals } from '../meals';

export const homePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = UseMeals();
  console.log(meals);
  return <h1> asd </h1>;
};
