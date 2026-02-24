const ProjectCard = ({ 
  imageUrl, 
  title, 
  description, 
  category, 
  number, 
  aspectRatio = "aspect-[4/5]",
  isWide = false,
  isMasterpiece = false,
  onClick
}) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl ${aspectRatio} cursor-pointer`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`Ver detalhes de ${title}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        aria-label={description}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        {isMasterpiece && (
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">
            The Masterpiece
          </p>
        )}
        <h3 className={`${isMasterpiece ? 'text-4xl md:text-6xl' : 'text-3xl'} font-bold mb-2`}>
          {title}
        </h3>
        <p className={`${isMasterpiece ? 'text-lg leading-relaxed font-light' : 'text-sm'} text-gray-300 ${isMasterpiece ? 'max-w-2xl' : 'max-w-md'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

