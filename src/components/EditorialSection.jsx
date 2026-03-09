import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EditorialSection = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
    const imageUrls = Object.values(imageModules).map(module => module.default);
    const sorted = imageUrls.sort((a, b) => (a || '').localeCompare(b || ''));
    setGalleryImages(sorted);
  }, []);

  // Excluir 1B1A0147 (usada en Bio) para no repetir fotos
  const editorialImages = galleryImages
    .filter((url) => !String(url).includes('1B1A0147'))
    .slice(0, 9);

  return (
    <section className="py-20 px-6 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {editorialImages[0] && (
            <div className="col-span-12 md:col-span-5 aspect-[3/4] min-h-[300px] md:min-h-0 group cursor-pointer overflow-hidden">
              <img
                src={editorialImages[0]}
                alt="O tempo da corpa é terra"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}
          
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 italic">
              // O tempo da corpa é terra
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Uma jornada de exploração da singularidade do selvagem
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Uma prática experimental que entende o movimento como narrativa somática: o invocar de uma dança que cria 
              rupturas, percorre novas subjetividades, e se deixa afetar por sensibilidades que evocam outras formas de existência.
            </p>
            <Link
              to="/bio"
              className="inline-block text-primary font-bold uppercase tracking-widest text-sm hover:underline"
            >
              Saiba mais →
            </Link>
          </div>

          {editorialImages[1] && (
            <div className="col-span-12 md:col-span-8 aspect-[4/3] min-h-[260px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
              <img
                src={editorialImages[1]}
                alt="Raízes e movimento"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}

          {editorialImages[2] && (
            <div className="col-span-12 md:col-span-4 aspect-[3/4] min-h-[300px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
              <img
                src={editorialImages[2]}
                alt="Filosofia do corpo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}

          {editorialImages.length >= 9 && (
            <>
              <div className="col-span-12 md:col-span-4 aspect-square min-h-[280px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
                <img
                  src={editorialImages[3]}
                  alt="Galeria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="col-span-12 md:col-span-4 aspect-[3/4] min-h-[280px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
                <img
                  src={editorialImages[4]}
                  alt="Galeria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="col-span-12 md:col-span-4 aspect-[4/3] min-h-[260px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
                <img
                  src={editorialImages[5]}
                  alt="Galeria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="col-span-12 md:col-span-8 aspect-[3/1] min-h-[200px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
                <img
                  src={editorialImages[6]}
                  alt="Galeria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="col-span-12 md:col-span-2 aspect-[3/4] min-h-[280px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
                <img
                  src={editorialImages[7]}
                  alt="Galeria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-12 md:col-span-2 aspect-[3/4] min-h-[280px] md:min-h-0 group cursor-pointer overflow-hidden mt-8 md:mt-0">
                <img
                  src={editorialImages[8]}
                  alt="Galeria"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;

