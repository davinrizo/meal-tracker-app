import { useState, useEffect } from 'react';

export const UseIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch('/ingredients');
      const ingredients = await response.json();

      setIngredients(ingredients);
      setIngredients(false);
    };

    return loadIngredients;
  }, []);

  return { isLoading, ingredients, setIngredients };
};
