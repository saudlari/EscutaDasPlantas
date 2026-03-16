import { useEffect, useState } from 'react';
import { useVideoCategories } from '../hooks/useVideoCategories';
import VideoHeader from '../components/videos/VideoHeader';
import VideoGrid from '../components/videos/VideoGrid';
import YoutubeCtaSection from '../components/videos/YoutubeCtaSection';
import VideoModal from '../components/videos/VideoModal';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { categories, loading, error } = useVideoCategories();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background-dark">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Carregando vídeos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background-dark">
        <p className="text-red-400 text-sm">
          Ocorreu um erro ao carregar os vídeos.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <VideoHeader />
      <VideoGrid categories={categories} onVideoClick={setSelectedVideo} />
      <YoutubeCtaSection />
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default Videos;

