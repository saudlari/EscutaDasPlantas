import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';
import EditorialSection from '../components/EditorialSection';
import useHashScroll from '../hooks/useHashScroll';

const Home = () => {
  useHashScroll();

  return (
    <>
      <Hero />
      <EditorialSection />
      <Gallery maxImages={12} />
      <Philosophy />
      <Contact />
    </>
  );
};

export default Home;

