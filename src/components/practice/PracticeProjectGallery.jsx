import { useCallback, useEffect, useMemo, useState } from 'react';

function getBentoPreviewClass(index) {
  const pattern = index % 8;
  const mobileMin = 'min-h-[220px] md:min-h-0';
  switch (pattern) {
    case 0:
      return `col-span-2 md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-[3/4] ${mobileMin}`;
    case 1:
      return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
    case 2:
      return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
    case 3:
      return `col-span-2 md:col-span-3 aspect-[4/3] md:aspect-[3/1] ${mobileMin}`;
    case 4:
      return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
    case 5:
      return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
    case 6:
      return `col-span-2 md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-[3/4] ${mobileMin}`;
    case 7:
      return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
    default:
      return `col-span-1 md:col-span-2 aspect-[4/5] md:aspect-square ${mobileMin}`;
  }
}

const PracticeProjectGallery = ({
  images,
  galleryFull,
  label = 'Registos',
  imageAltPrefix = 'Galeria',
  previewLayout = 'columns',
}) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxSource, setLightboxSource] = useState(null);
  const [fullModalOpen, setFullModalOpen] = useState(false);

  const hasExtendedGallery =
    Array.isArray(galleryFull) && galleryFull.length > (images?.length ?? 0);

  const activeLightboxList = useMemo(() => {
    if (lightboxSource === 'full' && galleryFull?.length) return galleryFull;
    if (lightboxSource === 'preview' && images?.length) return images;
    return [];
  }, [lightboxSource, galleryFull, images]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setLightboxSource(null);
  }, []);

  const closeFullModal = useCallback(() => setFullModalOpen(false), []);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const len = activeLightboxList.length;
    if (len === 0) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % len);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + len) % len);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex, closeLightbox, activeLightboxList.length]);

  useEffect(() => {
    if (!fullModalOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') closeFullModal();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [fullModalOpen, closeFullModal]);

  if (!images?.length) return null;

  const openPreviewLightbox = (i) => {
    setLightboxSource('preview');
    setLightboxIndex(i);
  };

  const openFullLightbox = (i) => {
    setFullModalOpen(false);
    setLightboxSource('full');
    setLightboxIndex(i);
  };

  return (
    <>
      <div className="mt-10 pt-8 border-t border-white/10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">{label}</p>
        {previewLayout === 'bento' ? (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => openPreviewLightbox(i)}
                className={`group relative overflow-hidden rounded-none ring-1 ring-white/10 bg-black/20 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 ${getBentoPreviewClass(i)}`}
              >
                <img
                  src={src}
                  alt={`${imageAltPrefix} — imagem ${i + 1} de ${images.length}`}
                  className="absolute inset-0 h-full w-full object-cover rounded-none transition duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 [column-gap:0.65rem] sm:[column-gap:0.85rem]">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => openPreviewLightbox(i)}
                className="break-inside-avoid mb-[0.65rem] sm:mb-[0.85rem] w-full rounded-none overflow-hidden ring-1 ring-white/10 bg-black/20 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 group"
              >
                <img
                  src={src}
                  alt={`${imageAltPrefix} — imagem ${i + 1} de ${images.length}`}
                  className="w-full h-auto object-cover rounded-none transition duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs text-gray-500 font-light">
          Clica numa imagem para ver em tamanho maior.
          {hasExtendedGallery && (
            <>
              {' '}
              Há mais fotos na{' '}
              <button
                type="button"
                onClick={() => setFullModalOpen(true)}
                className="text-primary font-semibold hover:underline underline-offset-2"
              >
                galeria completa ({galleryFull.length} fotos)
              </button>
              .
            </>
          )}
        </p>
        {hasExtendedGallery && (
          <button
            type="button"
            onClick={() => setFullModalOpen(true)}
            className="mt-4 inline-flex items-center gap-2 border border-primary/60 bg-primary/10 px-5 py-3 text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">grid_view</span>
            Ver todas as {galleryFull.length} fotos
          </button>
        )}
      </div>

      {fullModalOpen && hasExtendedGallery && (
        <div
          className="fixed inset-0 z-[90] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria completa — ${imageAltPrefix}`}
        >
          <div className="shrink-0 flex items-center justify-between gap-4 px-4 py-4 sm:px-6 border-b border-white/10">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">
              Galeria completa — {imageAltPrefix}{' '}
              <span className="text-primary font-bold normal-case">({galleryFull.length})</span>
            </h4>
            <button
              type="button"
              onClick={closeFullModal}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar galeria completa"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <div
            className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6"
            onClick={(e) => e.target === e.currentTarget && closeFullModal()}
          >
            <div
              className={
                previewLayout === 'bento'
                  ? 'mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3'
                  : 'mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3'
              }
            >
              {galleryFull.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openFullLightbox(i)}
                  className={
                    previewLayout === 'bento'
                      ? `group relative overflow-hidden rounded-none ring-1 ring-white/10 bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${getBentoPreviewClass(i)}`
                      : 'rounded-none overflow-hidden ring-1 ring-white/10 bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group min-h-[100px]'
                  }
                >
                  <img
                    src={src}
                    alt={`${imageAltPrefix} — foto ${i + 1} de ${galleryFull.length}`}
                    className={
                      previewLayout === 'bento'
                        ? 'absolute inset-0 h-full w-full object-cover rounded-none transition duration-500 group-hover:brightness-110'
                        : 'w-full h-full min-h-[100px] object-cover rounded-none transition duration-500 group-hover:brightness-110'
                    }
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxIndex !== null && activeLightboxList.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-8 bg-black/92 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da imagem"
          onClick={closeLightbox}
        >
          <div className="absolute top-4 right-4 left-4 flex justify-between items-center gap-4 pointer-events-none">
            <span className="text-xs uppercase tracking-widest text-gray-400 pointer-events-none">
              {lightboxIndex + 1} / {activeLightboxList.length}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <button
            type="button"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[101] hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Imagem anterior"
            onClick={(e) => {
              e.stopPropagation();
              const len = activeLightboxList.length;
              setLightboxIndex((i) => (i - 1 + len) % len);
            }}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            type="button"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[101] hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Imagem seguinte"
            onClick={(e) => {
              e.stopPropagation();
              const len = activeLightboxList.length;
              setLightboxIndex((i) => (i + 1) % len);
            }}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <img
            src={activeLightboxList[lightboxIndex]}
            alt=""
            className="max-h-[82vh] max-w-full object-contain rounded-none shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PracticeProjectGallery;
