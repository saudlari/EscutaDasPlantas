import { getThumbnail } from '../../utils/videoUtils';

const VideoCard = ({ video, onClick }) => {
  const thumb = getThumbnail(video);

  return (
    <div className="group cursor-pointer" onClick={() => onClick(video)}>
      <div className="relative aspect-video overflow-hidden bg-black/20 mb-4 group-hover:scale-105 transition-transform duration-300">
        {thumb ? (
          <img src={thumb} alt={video.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/40">
            <span className="material-symbols-outlined text-6xl text-gray-500">play_circle</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        )}
      </div>
      <div>
        {video.year && (
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            {video.year}
          </span>
        )}
        <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;

