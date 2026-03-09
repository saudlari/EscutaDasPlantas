import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const MOBILE_BREAKPOINT = 768;

const GalleryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [targetRowHeight, setTargetRowHeight] = useState(320);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false);

  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      setTargetRowHeight(mobile ? 380 : 320);
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const poeticPhrases = [
    "o tempo da corpa é terra",
    "por uma revolução concebida ao mover-se",
    "a corpa em movimento como arma que sonha",
    "investigar gestos de insurgência",
    "conjurar um rito social de criação",
    "a vida que quer mais vida",
    "o invocar de uma dança que cria rupturas",
    "percorre novas subjetividades",
    "se deixa afetar por sensibilidades",
    "evocam outras formas de existência",
    "o corpo como condutor de vibrações",
    "ressonância entre dois mundos",
    "comunicação silenciosa",
    "ritmos biológicos traduzidos em movimento",
    "a ponte sensorial entre reino vegetal e humano"
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const loadImages = async () => {
      const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
      const imageUrls = Object.values(imageModules).map(module => module.default);
      
      // Remove duplicates by converting to Set and back to array
      const uniqueUrls = [...new Set(imageUrls)];
      // Sort alphabetically by filename for consistent, fixed order
      const sorted = uniqueUrls.sort((a, b) => {
        const nameA = a.split('/').pop() || '';
        const nameB = b.split('/').pop() || '';
        return nameA.localeCompare(nameB);
      });
      
      // Load images to get their dimensions (with timeout for faster loading)
      const photosWithDimensions = await Promise.all(
        sorted.map((src, idx) => {
          return new Promise((resolve) => {
            const img = new Image();
            const timeout = setTimeout(() => {
              // Fallback after 100ms if image hasn't loaded
              // Use balanced aspect ratios
              const aspectRatios = [
                { width: 4, height: 3 },   // Standard landscape
                { width: 3, height: 4 },    // Standard portrait
                { width: 5, height: 4 },     // Slightly wide
                { width: 4, height: 5 },    // Slightly tall
              ];
              const ratio = aspectRatios[idx % aspectRatios.length];
              resolve({
                src,
                width: ratio.width,
                height: ratio.height,
                id: `photo-${idx}-${src}`,
              });
            }, 100);
            
            img.onload = () => {
              clearTimeout(timeout);
              let width = img.naturalWidth;
              let height = img.naturalHeight;
              
              // Create subtle size variations for balanced gallery layout
              const variation = idx % 4;
              
              if (variation === 0) {
                // Slightly wider
                width = Math.round(width * 1.2);
                height = Math.round(height * 0.95);
              } else if (variation === 1) {
                // Slightly taller
                width = Math.round(width * 0.95);
                height = Math.round(height * 1.15);
              } else if (variation === 2) {
                // Slightly larger
                width = Math.round(width * 1.1);
                height = Math.round(height * 1.05);
              } else {
                // Keep original proportions
                // No modification
              }
              
              resolve({
                src,
                width,
                height,
                id: `photo-${idx}-${src}`,
              });
            };
            img.onerror = () => {
              clearTimeout(timeout);
              const aspectRatios = [
                { width: 4, height: 3 },   // Standard landscape
                { width: 3, height: 4 },    // Standard portrait
                { width: 5, height: 4 },     // Slightly wide
                { width: 4, height: 5 },    // Slightly tall
              ];
              const ratio = aspectRatios[idx % aspectRatios.length];
              resolve({
                src,
                width: ratio.width,
                height: ratio.height,
                id: `photo-${idx}-${src}`,
              });
            };
            img.src = src;
          });
        })
      );
      
      setPhotos(photosWithDimensions);
      setLoading(false);
    };
    
    loadImages();
  }, []);

  // Group photos into mini galleries and modify sizes for irregular layout
  const galleryGroups = useMemo(() => {
    // Use fixed order for phrases (no random shuffle)
    const fixedPhrases = [...poeticPhrases];
    const groups = [];
    const photosPerGroup = 12; // Más fotos por grupo para mejor distribución
    let phraseIndex = 0;
    
    for (let i = 0; i < photos.length; i += photosPerGroup) {
      const groupPhotos = photos.slice(i, i + photosPerGroup);
      
      // Modify each photo's dimensions within the group with subtle variations
      const modifiedPhotos = groupPhotos.map((photo, photoIndex) => {
        const baseWidth = photo.width;
        const baseHeight = photo.height;
        
        // Create subtle size variations within each group
        const variation = photoIndex % 4;
        let newWidth = baseWidth;
        let newHeight = baseHeight;
        
        if (variation === 0) {
          // Slightly wider
          newWidth = Math.round(baseWidth * 1.3);
          newHeight = Math.round(baseHeight * 0.95);
        } else if (variation === 1) {
          // Slightly taller
          newWidth = Math.round(baseWidth * 0.9);
          newHeight = Math.round(baseHeight * 1.2);
        } else if (variation === 2) {
          // Slightly larger
          newWidth = Math.round(baseWidth * 1.15);
          newHeight = Math.round(baseHeight * 1.1);
        } else {
          // Keep original proportions
          newWidth = baseWidth;
          newHeight = baseHeight;
        }
        
        return {
          ...photo,
          width: newWidth,
          height: newHeight,
        };
      });
      
      groups.push({
        type: 'gallery',
        photos: modifiedPhotos,
      });
      
      // Add phrase after each group (except the last one)
      if (i + photosPerGroup < photos.length && phraseIndex < fixedPhrases.length) {
        groups.push({
          type: 'phrase',
          text: fixedPhrases[phraseIndex],
        });
        phraseIndex++;
      }
    }
    
    return groups;
  }, [photos]);

  const renderImage = ({ index, photo, margin, left, top }) => {
    // Use unique ID or src as key to ensure uniqueness across all galleries
    const uniqueKey = photo.id || photo.src || `photo-${index}`;
    
    return (
      <div
        key={uniqueKey}
        style={{
          margin,
          position: 'relative',
          overflow: 'hidden',
          width: photo.width,
          height: photo.height,
        }}
        className="group cursor-pointer"
      >
        <img
          src={photo.src}
          alt={`Imagem da galeria Escuta das Plantas`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.7s ease',
          }}
          className="group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />
      </div>
    );
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
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <p className="text-gray-400">Carregando galeria...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {galleryGroups.map((group, groupIndex) => {
                if (group.type === 'phrase') {
                  return (
                    <div
                      key={`phrase-${groupIndex}`}
                      className="flex items-center justify-center px-6 md:px-12 py-8 md:py-12"
                    >
                      <p className="text-xl md:text-4xl font-light italic text-gray-300 dark:text-gray-400 text-center leading-relaxed max-w-4xl">
                        {group.text}
                      </p>
                    </div>
                  );
                }
                
                return (
                  <div key={`gallery-${groupIndex}`}>
                    {/* En mobile: columna a ancho completo para que las imágenes no se vean pequeñas */}
                    <div className="flex flex-col gap-4 md:hidden">
                      {group.photos.map((photo, idx) => (
                        <div
                          key={photo.id || photo.src || idx}
                          className="w-full min-h-[320px] overflow-hidden rounded-sm"
                        >
                          <img
                            src={photo.src}
                            alt={`Imagem da galeria ${idx + 1}`}
                            className="w-full h-full min-h-[320px] object-cover block group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    {/* En desktop: layout flex de react-photo-gallery */}
                    <div className="hidden md:block [&>div]:!flex [&>div]:!flex-wrap">
                      <Gallery
                        photos={group.photos}
                        renderImage={renderImage}
                        direction="row"
                        margin={8}
                        targetRowHeight={targetRowHeight}
                        limitNodeSearch={group.photos.length}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Conheça a Bio
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Descubra o trajeto artístico e acadêmico de Andréa Apolinário.
          </p>
          <Link
            to="/bio"
            className="inline-block bg-primary hover:bg-primary/80 text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all"
          >
            Ver Bio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

