import { useEffect } from 'react';
import ContactSection from '../components/Contact';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <ContactSection />
    </div>
  );
};

export default Contact;
