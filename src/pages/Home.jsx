import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Gallery from '../components/Gallery';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';
import Work1 from '../assets/Work1.webp';
import Work2 from '../assets/Work2.webp';
import Work3 from '../assets/Work3.webp';
import PhilosophyImage from '../assets/Philosophy.webp';

const Home = () => {
  const location = useLocation();
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const imageModules = import.meta.glob('../assets/gallery/*.webp', { eager: true });
    const imageUrls = Object.values(imageModules).map(module => module.default);
    const shuffled = imageUrls.sort(() => Math.random() - 0.5);
    setGalleryImages(shuffled.slice(0, 6));
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = location.hash || window.location.hash;
      if (hash) {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashScroll();
  }, [location]);

  return (
    <>
      <Hero />
      
      <section className="py-20 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-5 aspect-[3/4] group cursor-pointer overflow-hidden rounded-xl">
              <img
                src={Work1}
                alt="Pulso Botânico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 italic">
                // O tempo da corpa é terra
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
                Uma jornada de exploração da singularidade do selvagem
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Uma prática experimental que entende o movimento como narrativa somática: o invocar de uma dança que cria 
                rupturas, percorre novas subjetividades, e se deixa afetar por sensibilidades que evocam outras formas de existência.
              </p>
              <Link
                to="/bio"
                className="inline-block text-primary font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Saiba mais →
              </Link>
            </div>

            <div className="col-span-12 md:col-span-8 aspect-[4/3] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
              <img
                src={Work2}
                alt="Raízes Eterneas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="col-span-12 md:col-span-4 aspect-[3/4] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
              <img
                src={PhilosophyImage}
                alt="Filosofia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {galleryImages.length >= 6 && (
              <>
                <div className="col-span-12 md:col-span-4 aspect-square group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
                  <img
                    src={galleryImages[0]}
                    alt="Galeria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="col-span-12 md:col-span-4 aspect-[3/4] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
                  <img
                    src={galleryImages[1]}
                    alt="Galeria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="col-span-12 md:col-span-4 aspect-[4/3] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
                  <img
                    src={galleryImages[2]}
                    alt="Galeria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="col-span-12 md:col-span-8 aspect-[3/1] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
                  <img
                    src={galleryImages[3]}
                    alt="Galeria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="col-span-12 md:col-span-2 aspect-[3/4] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
                  <img
                    src={galleryImages[4]}
                    alt="Galeria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="col-span-12 md:col-span-2 aspect-[3/4] group cursor-pointer overflow-hidden rounded-xl mt-8 md:mt-0">
                  <img
                    src={galleryImages[5]}
                    alt="Galeria"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Works />
      <Gallery />
      <Philosophy />
      <Contact />
    </>
  );
};

export default Home;

