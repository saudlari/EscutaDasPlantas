/** @param {string} url */
export const getYoutubeIdFromUrl = (url) => {
  if (!url || typeof url !== 'string') return null;
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be' || u.hostname === 'www.youtu.be') {
      return u.pathname.split('/').filter(Boolean)[0]?.split('?')[0] ?? null;
    }
    const host = u.hostname.replace(/^www\./, '');
    if (host !== 'youtube.com' && host !== 'm.youtube.com' && host !== 'music.youtube.com') {
      return null;
    }
    if (u.pathname.startsWith('/shorts/')) {
      return u.pathname.split('/').filter(Boolean)[1]?.split('?')[0] ?? null;
    }
    if (u.pathname.startsWith('/embed/') || u.pathname.startsWith('/live/')) {
      return u.pathname.split('/').filter(Boolean)[1]?.split('?')[0] ?? null;
    }
    const v = u.searchParams.get('v');
    if (v) return v;
    return null;
  } catch {
    return null;
  }
};

/** Thumbnail for a raw YouTube watch/shorts URL (used outside structured video data). */
export const getYoutubeThumbnailFromUrl = (url) => {
  const id = getYoutubeIdFromUrl(url);
  if (!id) return null;
  // maxresdefault is 404 for many valid videos; hqdefault is available far more often.
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

/** Ordered poster URLs; try the next in onError if the image fails. */
export const getVideoThumbnailSources = (video) => {
  if (video == null || typeof video !== 'object') return [];
  if (video.thumbnail) return [video.thumbnail];
  if (video.type === 'youtube' && video.youtubeId) {
    const { youtubeId: id } = video;
    return [
      `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/default.jpg`,
    ];
  }
  if (video.type === 'cloudinary' && video.cloud_name && video.public_id) {
    const { cloud_name, public_id } = video;
    const segs = [0, 1, 2, 3, 0.1, 0.5, 1.5];
    const out = segs.map(
      (so) =>
        `https://res.cloudinary.com/${cloud_name}/video/upload/so_${so},w_640,h_360,c_fill,f_jpg/${public_id}`,
    );
    out.push(
      `https://res.cloudinary.com/${cloud_name}/video/upload/so_1,w_640,h_360,c_fill,f_auto,q_auto/${public_id}`,
    );
    return out;
  }
  return [];
};

export const getThumbnail = (video) => {
  if (video == null || typeof video !== 'object') return null;
  if (video.thumbnail) return video.thumbnail;
  if (video.type === 'youtube' && video.youtubeId) {
    return `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  }
  if (video.type === 'cloudinary' && video.cloud_name && video.public_id) {
    return `https://res.cloudinary.com/${video.cloud_name}/video/upload/so_0,w_640,h_360,c_fill,f_jpg/${video.public_id}`;
  }
  return null;
};

export const getEmbedUrl = (video) => {
  if (video.type === 'youtube') {
    return `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
  }
  if (video.type === 'cloudinary') {
    return `https://player.cloudinary.com/embed/?cloud_name=${video.cloud_name}&public_id=${video.public_id}`;
  }
  return null;
};

