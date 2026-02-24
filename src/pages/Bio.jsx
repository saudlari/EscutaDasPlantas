import { useEffect, useState } from 'react';
import PhilosophyImage from '../assets/Philosophy.webp';
import Work1 from '../assets/Work1.webp';
import Work2 from '../assets/Work2.webp';
import Work3 from '../assets/Work3.webp';

const Bio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
    const imageUrls = Object.values(imageModules).map(module => module.default);
    setImages(imageUrls.slice(0, 12));
  }, []);

  const timeline = [
    {
      year: "2024",
      title: "Movement in Silence",
      description: "Peça de resistência de 60 minutos explorando o corpo como condutor de vibrações ambientais. Prêmio de Melhor Performance Experimental."
    },
    {
      year: "2023",
      title: "Raízes Eterneas",
      description: "Performance site-specific investigando redes micorrízicas e equilíbrio comunitário em espaços naturais."
    },
    {
      year: "2022",
      title: "Pulso Botânico",
      description: "Instalação imersiva traduzindo ritmos biológicos das plantas em movimento humano através de sensores conectados."
    },
    {
      year: "2020-2021",
      title: "Residências Artísticas",
      description: "Residências em Berlim, Santiago, Rio de Janeiro e Costa Rica, desenvolvendo pesquisa sobre comunicação planta-humano."
    }
  ];

  const formations = [
    {
      title: "Formação em Dança Contemporânea",
      institution: "Universidade das Artes",
      year: "2018"
    },
    {
      title: "Especialização em Práticas Somáticas",
      institution: "Instituto de Pesquisa Corporal",
      year: "2019"
    },
    {
      title: "Bioacústica e Comunicação Vegetal",
      institution: "Laboratório de Ecologia Sonora",
      year: "2021"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid mb-20">
            
            <div className="col-span-12 md:col-span-5 aspect-[3/4] group overflow-hidden rounded-xl">
              <img
                alt="Escuta das Plantas - Retrato"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={PhilosophyImage}
              />
            </div>

            
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 italic">
                // Bio
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
                Escuta das Plantas
              </h1>
              
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Artista de performance cuja pesquisa está na intersecção de ritmos biológicos e movimento humano. 
                  Seu trabalho é uma busca constante por ressonância—um estado onde o corpo físico dissolve suas 
                  fronteiras para vibrar em harmonia com o mundo natural.
                </p>
                <p>
                  Através de treinamento somático rigoroso e observação botânica, desenvolve coreografias que não são 
                  apenas sequências de passos, mas processos metabólicos feitos visíveis. Cada performance é um ato de 
                  ouvir—para o solo, a atmosfera, e o pulso interno da vida celular.
                </p>
              </div>
            </div>
          </div>

          
          {images.length > 0 && (
            <div className="gallery-grid">
              {images.slice(0, 6).map((imageUrl, index) => {
                const getImageSize = (idx) => {
                  const pattern = idx % 6;
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
                    default:
                      return 'md:col-span-2 aspect-square';
                  }
                };
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
                      alt={`Imagem ${index + 1} da bio`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid mb-16">
            <div className="col-span-12 md:col-span-6 aspect-[4/3] group overflow-hidden rounded-xl">
              <img
                src={Work3}
                alt="Movement in Silence"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
                // Trajetória
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                Trajetória Artística
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Uma jornada através de diferentes espaços e contextos, sempre investigando a relação entre corpo e natureza.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 border-b border-white/10 pb-12 last:border-0">
                <div className="md:w-1/4">
                  <span className="text-primary font-black text-2xl">{item.year}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold uppercase mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Formação
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
            Formação & Pesquisa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div key={index} className="border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                  {formation.year}
                </span>
                <h3 className="text-xl font-bold uppercase mb-3">{formation.title}</h3>
                <p className="text-gray-400 text-sm">{formation.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-light italic text-gray-300 leading-relaxed">
            "Por uma revolução concebida ao mover-se. Investigar gestos de insurgência e unguentos contra as marcas 
            de um sistema-mundo que forja corpos silenciados em seus instintos. A corpa em movimento como arma que sonha, 
            investe modos de desestabilização do habituado, inventa novos possíveis."
          </blockquote>
          <p className="mt-8 text-primary font-bold uppercase tracking-widest text-sm">
            — Escuta das Plantas
          </p>
        </div>
      </section>
    </div>
  );
};

export default Bio;

