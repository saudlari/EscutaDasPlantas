import { Link } from 'react-router-dom';

const PracticeConductor = ({ imageSrc, collectiveWorks }) => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-8 aspect-[4/3] min-h-[280px] md:min-h-0 group overflow-hidden">
          <img
            alt="Escuta das Plantas — practice setting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={imageSrc}
          />
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-center px-6 md:px-12">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Quem conduz
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Andréa Apolinário</h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
            Este trabalho é conduzido por Andréa Apolinário. Na página Bio você encontra trajetória, formação, linha do
            tempo e obras.
          </p>
          <Link
            to="/bio"
            className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-4 text-sm font-black uppercase tracking-widest transition-all text-center"
          >
            Ver bio
          </Link>
        </div>
      </div>

      <div className="mt-16 md:mt-24 max-w-3xl mx-auto px-6 md:px-12 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
        <p>
          No campo da produção cultural, realizou e integrou obras coletivas de relevância no cenário paraense, como:
        </p>
        <ul className="space-y-3 list-none pl-0">
          {collectiveWorks.map((title, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PracticeConductor;
