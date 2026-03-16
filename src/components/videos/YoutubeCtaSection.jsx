const YoutubeCtaSection = () => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Quer Ver Mais?</h2>
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
);

export default YoutubeCtaSection;

