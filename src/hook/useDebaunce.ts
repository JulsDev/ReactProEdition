import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebounsedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounsedValue(value);
    }, delay);

    // обнуляем счетчик каждый раз как изменится value
    return () => {
      clearInterval(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
