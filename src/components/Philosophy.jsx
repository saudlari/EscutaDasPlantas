import PhilosophyImage from '../assets/Philosophy.webp';

const Philosophy = () => {
  const portraitUrl = PhilosophyImage;

  const stats = [
    { value: "12+", label: "Residências Globais" },
    { value: "45", label: "Performance" },
    { value: "03", label: "Prêmios Principais" }
  ];

  return (
    <section className="bg-background-dark py-32 overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 overflow-hidden aspect-[3/4] min-h-[320px] md:min-h-0 border border-white/10">
              <img
                alt="Professional Dancer Portrait"
                className="w-full h-full object-cover"
                src={portraitUrl}
                aria-label="Portrait of the artist Escuta das Plantas"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
              O Corpo em Resonância
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
              Ritmos Biológicos & Forma Humana
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              <p>
                Escuta das Plantas é um artista de performance cuja pesquisa está na intersecção de 
                ritmos biológicos e movimento humano. Seu trabalho é uma busca constante por ressonância—um 
                estado onde o corpo físico dissolve suas fronteiras para vibrar em harmonia com o mundo natural.
              </p>
              <p>
                Através de treinamento somático rigoroso e observação botânica, ela desenvolve coreografias que 
                não são apenas sequências de passos, mas processos metabólicos feitos visíveis. Cada performance é 
                um ato de ouvir—para o solo, a atmosfera, e o pulso interno da vida celular. A performance é uma forma de 
                ouvir o mundo natural e a vida interna do corpo.
              </p>

              <div className="pt-6 flex gap-8 items-center">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-8">
                    {index > 0 && <div className="h-10 w-px bg-gray-700"></div>}
                    <div className="text-center">
                      <p className="text-3xl font-black text-primary">{stat.value}</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

