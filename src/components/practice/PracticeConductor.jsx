import { useId, useState } from 'react';
import PracticeProjectGallery from './PracticeProjectGallery';
import PracticeVideoPreview from './PracticeVideoPreview';

const PracticeConductor = ({ collectiveProjects }) => {
  const baseId = useId();
  const [open, setOpen] = useState(() => ({}));

  const toggle = (i) => {
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-background-dark border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg text-gray-300 font-light leading-relaxed mb-10 max-w-3xl">
          No campo da produção cultural, realizou e integrou obras coletivas de relevância no cenário paraense, entre as
          quais:
        </p>
        <ul className="list-none pl-0">
          {collectiveProjects.map((project, idx) => {
            const isOpen = !!open[idx];
            const panelId = `practice-proj-${baseId}-${idx}`;
            const labelId = `practice-proj-label-${baseId}-${idx}`;

            return (
              <li
                key={`${project.title}-${project.yearLabel}-${idx}`}
                className="border-b border-white/10 last:border-0"
              >
                <h3
                  id={labelId}
                  className="text-xl md:text-2xl font-black uppercase tracking-tight text-white m-0 py-5"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="group flex w-full items-start justify-between gap-4 text-left rounded-lg -mx-2 px-2 py-1 -my-1 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>
                      {project.title}{' '}
                      <span className="text-primary font-black normal-case">({project.yearLabel})</span>
                    </span>
                    <span
                      className="material-symbols-outlined shrink-0 text-2xl text-primary transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden
                    >
                      expand_more
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={labelId}
                    className="max-w-3xl pb-12 -mt-2"
                  >
                    {project.description && (
                      <p className="text-base text-gray-300 font-light leading-relaxed mb-4 max-w-3xl">
                        <span className="font-bold text-gray-200 not-italic">Descrição do projeto: </span>
                        {project.description}
                      </p>
                    )}
                    {project.role && (
                      <p className="text-base text-gray-300 font-light leading-relaxed mb-4 max-w-3xl">
                        <span className="font-bold text-gray-200 not-italic">
                          {project.roleHeading ?? 'Minha atuação'}:{' '}
                        </span>
                        {project.role}
                      </p>
                    )}
                    {project.videoUrl && (
                      <PracticeVideoPreview videoUrl={project.videoUrl} title={project.title} />
                    )}
                    {project.gallery?.length > 0 && (
                      <PracticeProjectGallery
                        images={project.gallery}
                        galleryFull={project.galleryFull}
                        label={project.galleryLabel ?? 'Galeria'}
                        imageAltPrefix={project.galleryAltPrefix ?? project.title}
                        previewLayout={project.galleryPreviewLayout ?? 'columns'}
                      />
                    )}
                    {!project.description && !project.role && !project.videoUrl && !project.gallery?.length && (
                      <p className="text-sm text-gray-500 italic">Sem detalhes adicionais para este projeto.</p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PracticeConductor;
