import { Link } from 'react-router-dom';
import PortadaHero from '../assets/PortadaHero.webp';

const Hero = () => {
  const heroImageUrl = PortadaHero;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${heroImageUrl}")`
        }}
        aria-label="Dancer in a high speed dynamic pose in low light"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 to-background-dark/90" />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-4 leading-none uppercase">
          Escuta das<br />
          <span className="text-primary">Plantas</span>
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-[0.5em] uppercase text-white/70">
          Movimento • Corpo • Ressonância
        </p>
      </div>

      <Link
        to="/#works"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to works"
      >
        <span className="material-symbols-outlined text-white/30 text-4xl">expand_more</span>
      </Link>
    </section>
  );
};

export default Hero;

