
import { useState, useEffect } from 'react';
import { AppData } from './types';
import { INITIAL_DATA } from './constants';

const STORAGE_KEY = 'daycare_website_data';

export const useCMSData = () => {
  const [data, setData] = useState<AppData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    // Deep merge saved data with initial data to ensure new fields are present
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_DATA, ...parsed, settings: { ...INITIAL_DATA.settings, ...parsed.settings }, bio: { ...INITIAL_DATA.bio, ...parsed.bio } };
      } catch (e) {
        console.error("Failed to parse saved data", e);
        return INITIAL_DATA;
      }
    }
    return INITIAL_DATA;
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = <T extends keyof AppData,>(key: T, value: AppData[T]) => {
    setData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetData = () => {
    if (window.confirm("Are you sure? This will revert all your visual changes to the original template.")) {
      setData(INITIAL_DATA);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const getUpdatedConstantsCode = () => {
    const code = `import { AppData } from './types';

export const INITIAL_DATA: AppData = ${JSON.stringify(data, null, 2)};`;
    return code;
  };

  return { data, updateData, isEditMode, setIsEditMode, resetData, getUpdatedConstantsCode };
};