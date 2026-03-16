const VideoHeader = () => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-12 gap-6 mb-20">
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

        <div className="col-span-12 md:col-span-5 aspect-video bg-black/20 flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">play_circle</span>
            <p className="text-gray-400 text-sm">Vídeo em destaque</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoHeader;

