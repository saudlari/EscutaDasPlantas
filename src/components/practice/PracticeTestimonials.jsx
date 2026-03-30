const PracticeTestimonials = ({ testimonials }) => (
  <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
    <div className="max-w-7xl mx-auto">
      <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
        // Depoimentos
      </span>
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">O Que Dizem</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-white/10 p-8 bg-background-dark">
            <p className="text-gray-300 italic leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p>
            <div>
              <p className="font-bold text-white">{testimonial.author}</p>
              <p className="text-sm text-gray-400">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeTestimonials;
