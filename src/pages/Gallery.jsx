import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
    const imageUrls = Object.values(imageModules).map(module => module.default);
    const shuffled = imageUrls.sort(() => Math.random() - 0.5);
    setImages(shuffled);
  }, []);

  const getImageSize = (index) => {
    const pattern = index % 8;
    switch (pattern) {
      case 0:
        return 'md:col-span-3 md:row-span-2 aspect-[3/4]'; 
      case 1:
        return 'md:col-span-2 aspect-square'; 
      case 2:
        return 'md:col-span-2 aspect-square'; 
      case 3:
        return 'md:col-span-3 md:row-span-1 aspect-[3/1]'; 
      case 4:
        return 'md:col-span-2 aspect-square'; 
      case 5:
        return 'md:col-span-2 aspect-square'; 
      case 6:
        return 'md:col-span-3 md:row-span-2 aspect-[3/4]'; 
      case 7:
        return 'md:col-span-2 aspect-square'; 
      default:
        return 'md:col-span-2 aspect-square';
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 italic">
              // Galeria
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
              Momentos Capturados
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Uma coleção visual de performances, processos de criação e momentos de conexão entre corpo e natureza. 
              Cada imagem conta uma história de ressonância e movimento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="gallery-grid">
            {images.map((imageUrl, index) => {
              const sizeClass = getImageSize(index);
              const isLargeVertical = sizeClass.includes('row-span-2');
              const isLargeHorizontal = sizeClass.includes('aspect-[3/1]');
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden cursor-pointer ${sizeClass} col-span-1`}
                  style={isLargeVertical ? { gridRow: 'span 2' } : isLargeHorizontal ? { gridColumn: 'span 3' } : {}}
                >
                  <img
                    src={imageUrl}
                    alt={`Imagem ${index + 1} da galeria Escuta das Plantas`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Quer Ver as Performances?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Explore os trabalhos selecionados e descubra mais sobre cada projeto.
          </p>
          <Link
            to="/#works"
            className="inline-block bg-primary hover:bg-primary/80 text-white px-12 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all"
          >
            Ver Performances
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

