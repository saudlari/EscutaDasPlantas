import { useEffect } from 'react';

const Videos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const videoCategories = [
    {
      title: "Performances Completas",
      videos: [
        {
          id: 1,
          title: "Movement in Silence - Performance Completa",
          description: "Peça de resistência de 60 minutos explorando o corpo como condutor de vibrações ambientais.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          youtubeId: "dQw4w9WgXcQ",
          duration: "60:00",
          year: "2024"
        },
        {
          id: 2,
          title: "Raízes Eterneas - Site-Specific",
          description: "Performance site-specific investigando redes micorrízicas em espaço natural.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          youtubeId: "dQw4w9WgXcQ",
          duration: "30:00",
          year: "2023"
        }
      ]
    },
    {
      title: "Documentários & Processos",
      videos: [
        {
          id: 3,
          title: "Pulso Botânico - Processo de Criação",
          description: "Documentário sobre o processo de criação da instalação Pulso Botânico.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          youtubeId: "dQw4w9WgXcQ",
          duration: "15:30",
          year: "2022"
        },
        {
          id: 4,
          title: "Residência Artística - Berlim",
          description: "Registro do processo de residência artística em Berlim, Alemanha.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          youtubeId: "dQw4w9WgXcQ",
          duration: "12:45",
          year: "2021"
        }
      ]
    },
    {
      title: "Workshops & Mentorias",
      videos: [
        {
          id: 5,
          title: "Workshop: Práticas Somáticas",
          description: "Demonstração de práticas somáticas desenvolvidas nos workshops.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          youtubeId: "dQw4w9WgXcQ",
          duration: "8:20",
          year: "2024"
        },
        {
          id: 6,
          title: "Mentoria Individual - Depoimento",
          description: "Depoimento de participante sobre o processo de mentoria individual.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          youtubeId: "dQw4w9WgXcQ",
          duration: "5:15",
          year: "2024"
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid mb-20">
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
                // Vídeos
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
                Vídeos
              </h1>
              
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Explore performances completas, documentários sobre processos de criação, workshops e muito mais. 
                Uma janela para o universo da Escuta das Plantas através do movimento, da pesquisa e da prática somática.
              </p>
            </div>
            
            <div className="col-span-12 md:col-span-5 aspect-video bg-black/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">play_circle</span>
                <p className="text-gray-400 text-sm">Vídeo em destaque</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.videos.map((video) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
                    }}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-black ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                        {video.year}
                      </span>
                      <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Quer Ver Mais?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Inscreva-se em nosso canal do YouTube para receber notificações sobre novos vídeos e conteúdos exclusivos.
          </p>
          <a
            href="https://www.youtube.com/@escutadasplantas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/80 text-white px-12 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all"
          >
            Inscrever-se no YouTube
          </a>
        </div>
      </section>
    </div>
  );
};

export default Videos;

