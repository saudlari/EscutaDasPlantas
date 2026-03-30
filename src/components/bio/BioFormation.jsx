const BioFormation = ({ formations }) => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-7xl mx-auto">
      <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">// Formação</span>
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">Formação & Pesquisa</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all"
          >
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
);

export default BioFormation;
