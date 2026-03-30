const PracticeHero = ({ imageSrc }) => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Prática
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Escuta das Plantas: Pesquisa, Práxis e Cuidado
          </h1>

          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              A Escuta das Plantas é uma pesquisa amazônida-paraense dedicada aos cuidados e à promoção da saúde por meio
              das plantas e das tecnologias de terreiro. Trata-se de uma prática somática que estabelece um diálogo
              profundo entre saúde, ecoafrofeminismo, tropismo, não monogamia, dança e ancestralidade.
            </p>
            <p>
              Nosso propósito é investigar a vivência dos terreiros como espaços legítimos de saber, reconhecidos pelo
              Conselho Nacional de Saúde (CNS) como práticas complementares ao SUS. Através de estímulos sutis e da
              relação com o campo do visível e do invisível, buscamos cultivar estados de{' '}
              <strong className="text-white font-normal">corpa</strong> que acessem dimensões materiais e orgânicas
              atravessadas pelas forças vitais que compartilhamos entre seres humanos e não humanos.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 aspect-[3/4] min-h-[320px] md:min-h-0 group overflow-hidden">
          <img
            alt="Escuta das Plantas — somatic practice"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  </section>
);

export default PracticeHero;
