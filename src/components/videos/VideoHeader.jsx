import { useVideoPreviewUrl } from '../../hooks/useVideoPreviewUrl';

const VideoHeaderFeatureButton = ({ video, onSelect }) => {
  const { currentSrc, onImgError } = useVideoPreviewUrl(video);

  return (
    <button
      type="button"
      onClick={() => onSelect?.(video)}
      className="group relative w-full aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/20 text-left shadow-2xl shadow-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      aria-label={`Reproduzir vídeo: ${video.title}`}
    >
      {currentSrc ? (
        <img
          src={currentSrc}
          onError={onImgError}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/50 to-black/80">
          <span className="material-symbols-outlined text-6xl text-white/30">play_circle</span>
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
      <span className="absolute top-3 left-3 z-10 rounded bg-primary/90 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-white">
        Em destaque
      </span>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined ml-1 text-3xl" aria-hidden>
            play_arrow
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pt-10">
        {video.year && (
          <span className="text-primary mb-1 block text-xs font-bold uppercase tracking-widest">{video.year}</span>
        )}
        <p className="line-clamp-2 text-base font-bold uppercase text-white leading-snug md:text-lg">
          {video.title}
        </p>
      </div>
      {video.duration ? (
        <div className="absolute bottom-3 right-3 z-10 rounded bg-black/80 px-2 py-1 text-xs text-white">
          {video.duration}
        </div>
      ) : null}
    </button>
  );
};

const VideoHeader = ({ featuredVideo, onFeaturedClick }) => {
  return (
    <section className="py-32 px-6 bg-background-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
              // Vídeos
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
              Vídeos
            </h1>

            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Explore performances completas, documentários sobre processos de criação, workshops e muito mais.
              Uma janela para o universo da Escuta das Plantas através do movimento, da pesquisa e da prática
              somática.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 flex items-center">
            {featuredVideo ? (
              <VideoHeaderFeatureButton video={featuredVideo} onSelect={onFeaturedClick} />
            ) : (
              <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-white/5 bg-black/20">
                <div className="text-center">
                  <span className="material-symbols-outlined mb-4 text-6xl text-gray-600">play_circle</span>
                  <p className="text-sm text-gray-400">Nenhum vídeo em destaque</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeader;
