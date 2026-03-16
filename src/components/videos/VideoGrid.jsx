import VideoCard from './VideoCard';

const VideoGrid = ({ categories, onVideoClick }) => (
  <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
    <div className="max-w-[1400px] mx-auto">
      {categories.map((category, index) => (
        <div key={index} className="mb-20 last:mb-0">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
            {category.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.videos.map((video) => (
              <VideoCard key={video.id} video={video} onClick={onVideoClick} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default VideoGrid;

