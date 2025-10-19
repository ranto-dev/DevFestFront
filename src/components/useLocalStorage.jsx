import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
  // 1. Initialiser l'état en lisant depuis localStorage
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // Tenter de lire la valeur depuis localStorage
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // 2. Synchroniser l'état avec localStorage chaque fois que la valeur change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

// export default useLocalStorage;
