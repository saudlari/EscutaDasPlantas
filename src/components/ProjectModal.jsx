import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-background-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-sm"
          aria-label="Fechar modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        
        <div className="overflow-y-auto flex-1">
          
          <div className="p-6 md:p-12 border-b border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block italic">
                  {project.number}. {project.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                  {project.title}
                </h2>
                {project.extendedDescription && (
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                    {project.extendedDescription}
                  </p>
                )}
                {!project.extendedDescription && project.description && (
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          
          <div className="p-6 md:p-12 space-y-8">
            
            {project.videos && project.videos.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-primary">
                  Vídeos
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {project.videos.map((video, index) => (
                    <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/20">
                      {video.type === 'youtube' || video.url.includes('youtube.com') || video.url.includes('youtu.be') ? (
                        <iframe
                          src={video.url.includes('youtube.com') || video.url.includes('youtu.be') 
                            ? `https://www.youtube.com/embed/${video.url.includes('youtu.be') ? video.url.split('/').pop().split('?')[0] : video.url.split('v=')[1]?.split('&')[0]}`
                            : video.url}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${project.title} - Vídeo ${index + 1}`}
                        />
                      ) : (
                        <video
                          src={video.url}
                          controls
                          className="w-full h-full object-contain"
                        >
                          Seu navegador não suporta o elemento de vídeo.
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            
            {project.photos && project.photos.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-primary">
                  Galeria de Fotos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/20 group cursor-pointer"
                    >
                      <img
                        src={photo}
                        alt={`${project.title} - Foto ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            
            {project.additionalInfo && (
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold uppercase tracking-wider text-primary">
                  Informações Adicionais
                </h3>
                <div className="prose prose-invert max-w-none">
                  {typeof project.additionalInfo === 'string' ? (
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {project.additionalInfo}
                    </p>
                  ) : (
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {project.additionalInfo}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

