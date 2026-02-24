import { useState } from 'react';
import Work1 from '../assets/Work1.webp';
import Work2 from '../assets/Work2.webp';
import Work3 from '../assets/Work3.webp';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      imageUrl: Work1,
      title: "Pulso Botânico",
      description: "Uma exploração de ritmos de fluxo de seiva traduzidos em micro-movimentos do sistema muscular humano.",
      extendedDescription: "Pulso Botânico é uma instalação imersiva que traduz os ritmos biológicos das plantas em movimento humano. Através de sensores conectados a plantas vivas, os dados de fluxo de seiva são convertidos em impulsos que guiam uma performance coreográfica contínua. A obra explora a comunicação silenciosa entre o reino vegetal e o corpo humano, criando uma ponte sensorial entre dois mundos aparentemente distantes.",
      category: "Instalação",
      number: "01",
      colSpan: "col-span-12 md:col-span-7",
      aspectRatio: "aspect-[4/5]",
      photos: [
        Work1,
      ],
      videos: [
      ],
      additionalInfo: "Duração: 45 minutos\nLocal: Galeria de Arte Contemporânea\nAno: 2024"
    },
    {
      id: 2,
      imageUrl: Work2,
      title: "Raízes Eterneas",
      description: "Performance site-specific investigando as redes myceliais e o equilíbrio comunitário.",
      extendedDescription: "Raízes Eterneas é uma performance site-specific que investiga as complexas redes de comunicação das micorrizas - associações simbióticas entre fungos e raízes de plantas. A obra acontece em espaços naturais, onde o corpo do performer se torna um condutor para as vibrações do ambiente, explorando como os sistemas biológicos criam redes de interdependência e comunicação.",
      category: "Site-Specific",
      number: "02",
      colSpan: "col-span-12 md:col-span-4 md:col-start-9 md:pt-32",
      aspectRatio: "aspect-[3/4]",
      photos: [
        Work2,
      ],
      videos: [
      ],
      additionalInfo: "Duração: 30 minutos\nLocais: Florestas e espaços naturais\nAno: 2023"
    },
    {
      id: 3,
      imageUrl: Work3,
      title: "Movement in Silence",
      description: "A 60-minute endurance piece exploring the body as a conductor for environmental vibrations. Performed in absolute silence to amplify the somatic experience.",
      extendedDescription: "Movement in Silence é uma peça de resistência de 60 minutos que explora o corpo como um condutor para vibrações ambientais. Realizada em silêncio absoluto para amplificar a experiência somática, a performance convida o público a uma jornada introspectiva através do movimento puro, onde cada micro-ajuste corporal responde às frequências imperceptíveis do espaço circundante.",
      category: "Performance",
      number: "03",
      colSpan: "col-span-12 md:col-span-10 md:col-start-2 py-20",
      aspectRatio: "aspect-video",
      isMasterpiece: true,
      photos: [
        Work3,
      ],
      videos: [
      ],
      additionalInfo: "Duração: 60 minutos\nLocal: Espaços diversos\nAno: 2024\nPrêmio: Melhor Performance Experimental 2024"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="works">
      <div className="flex flex-col mb-20">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 italic">
          // Portfólio
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          Trabalhos Selecionados        </h2>
      </div>

      <div className="editorial-grid">
        {projects.map((project) => (
          <div key={project.id} className={project.colSpan}>
            <ProjectCard
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              category={project.category}
              number={project.number}
              aspectRatio={project.aspectRatio}
              isMasterpiece={project.isMasterpiece}
              onClick={() => handleProjectClick(project)}
            />
            {!project.isMasterpiece && (
              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">
                  {project.number}. {project.category}
                </p>
                <h4 className="text-xl font-bold uppercase tracking-tight">{project.title}</h4>
              </div>
            )}
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Works;

