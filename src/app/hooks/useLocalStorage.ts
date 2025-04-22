import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialValue: string) {

  const [storedValue, setStoredValue] = useState<string>(() => {
    
    if (typeof window === "undefined") return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("Failed to read from localStorage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error("Failed to write to localStorage", err);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
