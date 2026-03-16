export const getThumbnail = (video) => {
  if (video.thumbnail) return video.thumbnail;
  if (video.type === 'youtube') {
    return `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  }
  if (video.type === 'cloudinary') {
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

