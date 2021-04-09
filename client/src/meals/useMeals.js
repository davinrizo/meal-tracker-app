import { useState, useEffect } from 'react';

export const UseMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      setIsLoading(true);
      const response = await fetch('/meals');
      const rawMealsResponse = await response.json();
      setRawMeals(rawMealsResponse);
      setIsLoading(false);
    };

    loadMeals();
  }, []);

  return {
    isLoading,
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    setMeals: setRawMeals,
  };
};
