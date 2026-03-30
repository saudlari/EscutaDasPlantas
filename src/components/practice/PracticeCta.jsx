const PracticeCta = () => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Pronto para Começar?</h2>
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        Entre em contato para agendar uma sessão inicial e descobrir como podemos trabalhar juntos.
      </p>
      <a
        href="/contact"
        className="inline-block bg-primary hover:bg-primary/80 text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all"
      >
        Agendar Sessão
      </a>
    </div>
  </section>
);

export default PracticeCta;
