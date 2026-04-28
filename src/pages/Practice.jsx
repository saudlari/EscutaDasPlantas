import practiceHeroImage from '../assets/Mentory2.webp';
import PracticeHero from '../components/practice/PracticeHero';
import PracticeStructuring from '../components/practice/PracticeStructuring';
import PracticeConductor from '../components/practice/PracticeConductor';
import PracticeTestimonials from '../components/practice/PracticeTestimonials';
import PracticeCta from '../components/practice/PracticeCta';
import { structuringItems, mentoriaCollectiveProjects, practiceTestimonials } from '../data/practice';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Practice = () => {
  useScrollToTop();

  return (
    <div className="pt-20 min-h-screen">
      <PracticeHero imageSrc={practiceHeroImage} />
      <PracticeStructuring items={structuringItems} />
      <PracticeConductor collectiveProjects={mentoriaCollectiveProjects} />
      <PracticeTestimonials testimonials={practiceTestimonials} />
      <PracticeCta />
    </div>
  );
};

export default Practice;
