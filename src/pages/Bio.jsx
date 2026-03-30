import BioImage from '../assets/Bio.webp';
import BioImage2 from '../assets/Bio2.webp';
import BioImage3 from '../assets/Bio3.webp';
import BioIntro from '../components/bio/BioIntro';
import BioTrajectory from '../components/bio/BioTrajectory';
import BioFormation from '../components/bio/BioFormation';
import BioQuote from '../components/bio/BioQuote';
import { bioTimeline, bioFormations } from '../data/bio';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Bio = () => {
  useScrollToTop();

  return (
    <div className="pt-20 min-h-screen">
      <BioIntro portraitSrc={BioImage} galleryImageSrc={BioImage2} />
      <BioTrajectory trajectoryImageSrc={BioImage3} timeline={bioTimeline} />
      <BioFormation formations={bioFormations} />
      <BioQuote />
    </div>
  );
};

export default Bio;
