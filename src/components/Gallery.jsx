import { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

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
    const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
    const imageUrls = Object.values(imageModules).map(module => module.default);
    const shuffled = [...imageUrls].sort(() => Math.random() - 0.5);
    const MAX_IMAGES = 24;
    const startIndex = 6;
    const limitedImages = shuffled.slice(startIndex, startIndex + MAX_IMAGES);
    setImages(limitedImages);
  }, []);

  const getImageSize = (index) => {
    const pattern = index % 8;
    switch (pattern) {
      case 0:
        return 'aspect-[4/5] md:col-span-3 md:row-span-2 md:aspect-[3/4]';
      case 1:
        return 'aspect-square md:col-span-2';
      case 2:
        return 'aspect-square md:col-span-2';
      case 3:
        return 'aspect-[4/3] md:col-span-3 md:row-span-1 md:aspect-[3/1]';
      case 4:
        return 'aspect-square md:col-span-2';
      case 5:
        return 'aspect-square md:col-span-2';
      case 6:
        return 'aspect-[4/5] md:col-span-3 md:row-span-2 md:aspect-[3/4]';
      case 7:
        return 'aspect-square md:col-span-2';
      default:
        return 'aspect-square md:col-span-2';
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
        </div>

        <div className="gallery-grid">
          {(() => {
            const shuffledPhrases = [...poeticPhrases].sort(() => Math.random() - 0.5);
            let phraseIndex = 0;
            let imageIndex = 0;
            
            return images.flatMap((imageUrl, index) => {
              const sizeClass = getImageSize(imageIndex);
              const isLargeVertical = sizeClass.includes('row-span-2');
              const isLargeHorizontal = sizeClass.includes('aspect-[3/1]');
              const shouldShowPhrase = imageIndex > 0 && imageIndex % 5 === 0;
              
              const elements = [];
              
              if (shouldShowPhrase && phraseIndex < shuffledPhrases.length) {
                elements.push(
                  <div
                    key={`phrase-${index}`}
                    className="col-span-12 md:col-span-5 flex items-center justify-center px-6 md:px-12 py-12"
                  >
                    <p className="text-2xl md:text-4xl font-light italic text-gray-300 text-center leading-relaxed">
                      {shuffledPhrases[phraseIndex]}
                    </p>
                  </div>
                );
                phraseIndex++;
              }
              
              elements.push(
                <div
                  key={index}
                  className={`group relative overflow-hidden cursor-pointer ${sizeClass} col-span-12 md:col-span-1`}
                  style={isLargeVertical ? { gridRow: 'span 2' } : isLargeHorizontal ? { gridColumn: 'span 3' } : {}}
                >
                  <img
                    src={imageUrl}
                    alt={`Imagem ${imageIndex + 1} da galeria Escuta das Plantas`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>
              );
              
              imageIndex++;
              return elements;
            });
          })()}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

