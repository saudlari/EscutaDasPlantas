const BioTrajectory = ({ trajectoryImageSrc, timeline }) => (
  <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-6 aspect-[4/3] min-h-[280px] md:min-h-0 group overflow-hidden">
          <img
            src={trajectoryImageSrc}
            alt="Andréa Apolinário - Trajetória"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center px-6 md:px-12">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Trajetória
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Trajetória Artística</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Realizou a obra coletiva &quot;Mulheres mães que cuidam e dançam&quot; contemplada com a Lei Paulo Gustavo
            SECULT PA (2024). Foi contemplada com a obra coletiva As mandiocas &quot;mulheres raiz&quot; — prêmio de
            produção artística da Fundação Cultural Seiva (2017-2018). Foi beneficiada com a obra coletiva
            &quot;Curandeiras&quot; — prêmio Rede Virtual de Arte e Cultura do Governo do Estado do Pará, Fundação
            Cultural de Artes - Dart Edital 010/2020.
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
);

export default BioTrajectory;
