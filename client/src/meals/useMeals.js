import { useState, useEffect } from 'react';

export const UseMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      setIsLoading(true);
      const response = await fetch('/meals');
      const meals = await response.json();
      setMeals(meals);
      setIsLoading(false);
    };

    loadMeals();
  }, []);

  return { isLoading, meals, setMeals };
};
