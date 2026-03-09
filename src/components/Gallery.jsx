import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GalleryGrid from './GalleryGrid';

const Gallery = ({ maxImages = null }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
    const imageUrls = Object.values(imageModules).map(module => module.default);
    const sorted = imageUrls.sort((a, b) => (a || '').localeCompare(b || ''));
    // Excluir 1B1A0147 (usada en Bio). En Home (maxImages) mostramos más; en sección full sin maxImages usamos solo las no usadas en EditorialSection
    const filtered = sorted.filter((url) => !String(url).includes('1B1A0147'));
    setImages(filtered);
  }, []);

  const displayImages = maxImages != null ? images.slice(0, maxImages) : images.slice(9);
  const isPreview = maxImages != null;

  const getImageSize = (index) => {
    const pattern = index % 8;
    const mobileMin = 'min-h-[300px] md:min-h-0';
    switch (pattern) {
      case 0:
        return `col-span-1 md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-[3/4] ${mobileMin}`;
      case 1:
        return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
      case 2:
        return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
      case 3:
        return `col-span-1 md:col-span-3 aspect-[4/3] md:aspect-[3/1] ${mobileMin}`;
      case 4:
        return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
      case 5:
        return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
      case 6:
        return `col-span-1 md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-[3/4] ${mobileMin}`;
      case 7:
        return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
      default:
        return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
    }
  };

  return (
    <section className="py-20 px-6 bg-background-dark" id="gallery">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 italic">
            // Galeria
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Momentos Capturados
          </h2>
          {maxImages != null && (
            <p className="text-gray-400 mt-4 max-w-xl">
              Uma amostra visual. Acesse a galeria completa para ver todo o acervo.
            </p>
          )}
        </div>

        <GalleryGrid images={displayImages} getImageSize={getImageSize} showPhrases={true} />

        {isPreview && (
          <div className="mt-16 text-center">
            <Link
              to="/gallery"
              className="inline-block bg-primary hover:bg-primary/80 text-white px-10 py-4 text-sm font-black uppercase tracking-widest transition-all"
            >
              Ver galeria completa
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

