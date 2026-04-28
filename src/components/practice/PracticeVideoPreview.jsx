import { getYoutubeIdFromUrl, getYoutubeThumbnailFromUrl } from '../../utils/videoUtils';

const PracticeVideoPreview = ({ videoUrl, title }) => {
  const youtubeId = getYoutubeIdFromUrl(videoUrl);
  const initialThumb = getYoutubeThumbnailFromUrl(videoUrl);

  if (!youtubeId || !initialThumb) {
    return (
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
      >
        <span className="material-symbols-outlined text-lg">play_circle</span>
        Ver vídeo
      </a>
    );
  }

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block max-w-2xl mt-4"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/30 shadow-lg">
        <img
          src={initialThumb}
          alt={title ? `Pré-visualização do vídeo: ${title}` : 'Pré-visualização do vídeo'}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(e) => {
            const el = e.currentTarget;
            const base = `https://img.youtube.com/vi/${youtubeId}/`;
            if (el.src.includes('hqdefault')) {
              el.src = `${base}mqdefault.jpg`;
            } else if (el.src.includes('mqdefault')) {
              el.onerror = null;
              el.src = `${base}default.jpg`;
            } else {
              el.onerror = null;
            }
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
          <span className="material-symbols-outlined text-6xl text-white drop-shadow-lg md:text-7xl" aria-hidden>
            play_circle
          </span>
        </div>
      </div>
      <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:text-primary/80">
        <span className="material-symbols-outlined text-lg">open_in_new</span>
        Ver vídeo no YouTube
      </span>
    </a>
  );
};

export default PracticeVideoPreview;
