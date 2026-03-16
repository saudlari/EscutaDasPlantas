import { useEffect, useState } from 'react';
import { STATIC_VIDEO_CATEGORIES } from '../data/videoCategories';

export const useVideoCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setCategories(STATIC_VIDEO_CATEGORIES);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return { categories, loading, error };
};

