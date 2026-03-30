const PracticeStructuring = ({ items }) => (
  <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
    <div className="max-w-7xl mx-auto">
      <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
        // Estrutura
      </span>
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">O que estrutura este trabalho</h2>

      <ul className="space-y-8 max-w-3xl">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed">
            <span className="text-primary mt-1 shrink-0">•</span>
            <span>
              <strong className="text-white font-semibold">{item.title}:</strong> {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PracticeStructuring;
