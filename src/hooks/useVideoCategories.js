import { useEffect, useState } from 'react';
const STATIC_VIDEO_CATEGORIES = [
  {
    title: 'Vídeos',
    videos: [
      {
        id: 1,
        type: 'cloudinary',
        cloud_name: 'dszfaxmrd',
        public_id: 'VID-20170926-WA0054_qaajzj',
        title: 'Vídeo Cloudinary em destaque',
        description: 'Vídeo alojado em Cloudinary. Reproduz diretamente na página.',
        thumbnail: null,
        duration: '',
        year: '2017',
      },
    ],
  },
];

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

