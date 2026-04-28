import { useCallback, useEffect, useState } from 'react';
import { getVideoThumbnailSources } from '../utils/videoUtils';

/**
 * Walks through getVideoThumbnailSources on each failed image load (YouTube/Cloudinary fallbacks).
 */
export const useVideoPreviewUrl = (video) => {
  const sources = getVideoThumbnailSources(video);
  const [i, setI] = useState(0);
  const resetKey =
    video && typeof video === 'object' ? `${video.id ?? ''}-${video.public_id ?? ''}-${video.thumbnail ?? ''}` : '';
  useEffect(() => {
    setI(0);
  }, [resetKey]);
  const currentSrc = i < sources.length ? sources[i] : null;
  const onImgError = useCallback(() => {
    setI((j) => j + 1);
  }, []);
  return { currentSrc, onImgError };
};
