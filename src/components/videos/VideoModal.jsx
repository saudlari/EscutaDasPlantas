import { getEmbedUrl } from '../../utils/videoUtils';

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;
  const embedUrl = getEmbedUrl(video);
  if (!embedUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button
        type="button"
        className="absolute top-4 right-4 text-white hover:text-primary text-3xl z-10"
        onClick={onClose}
        aria-label="Fechar"
      >
        ×
      </button>
      <div className="relative w-full max-w-4xl aspect-video bg-black" onClick={(e) => e.stopPropagation()}>
        <iframe
          title={video.title}
          src={embedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;

