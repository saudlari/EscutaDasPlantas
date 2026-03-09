const GalleryGrid = ({ images, getImageSize, showPhrases = true }) => {
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

  const shuffledPhrases = showPhrases ? [...poeticPhrases].sort(() => Math.random() - 0.5) : [];
  let phraseIndex = 0;
  let imageIndex = 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4">
      {images.flatMap((imageUrl, index) => {
        const sizeClass = getImageSize(imageIndex);
        const shouldShowPhrase = showPhrases && (imageIndex === 0 || imageIndex % 3 === 0);
        
        const elements = [];
        
        if (shouldShowPhrase && phraseIndex < shuffledPhrases.length) {
          elements.push(
            <div
              key={`phrase-${index}`}
              className="col-span-1 md:col-span-6 flex items-center justify-center px-6 md:px-12 py-8 md:py-12"
            >
              <p className="text-xl md:text-4xl font-light italic text-gray-300 text-center leading-relaxed">
                {shuffledPhrases[phraseIndex]}
              </p>
            </div>
          );
          phraseIndex++;
        }
        
        elements.push(
          <div
            key={index}
            className={`group relative overflow-hidden cursor-pointer min-h-[280px] md:min-h-0 ${sizeClass}`}
          >
            <img
              src={imageUrl}
              alt={`Imagem ${imageIndex + 1} da galeria Escuta das Plantas`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />
          </div>
        );
        
        imageIndex++;
        return elements;
      })}
    </div>
  );
};

export default GalleryGrid;
