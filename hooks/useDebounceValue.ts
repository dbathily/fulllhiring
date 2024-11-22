import {useEffect, useState} from 'react';

const useDebounceValue = <T>(value: T, timeoutms: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, timeoutms);
    return () => clearTimeout(timeout);
  }, [value, timeoutms]);
  return debouncedValue;
};

export default useDebounceValue;
