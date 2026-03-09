import { useEffect } from 'react';
import BioImage from '../assets/Bio.webp';
import BioImage2 from '../assets/Bio2.webp';
import BioImage3 from '../assets/Bio3.webp';
import BioGalleryExtra from '../assets/gallery/1B1A0147.webp';

const Bio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const timeline = [
    { year: "2025", title: "Nós em Nós", description: "Obra coletiva. Performer." },
    { year: "2025", title: "Laboratório de criação de energias e estados físicos para o ator-performer a partir de símbolos", description: "Performer." },
    { year: "2024", title: "Coral Matamba - a voz nascida do vento", description: "Performer." },
    { year: "2024", title: "Corpa-casa-gaiola", description: "Performer." },
    { year: "2024", title: "Rogai", description: "Performer." },
    { year: "2024", title: "Mulheres mães que cuidam e dançam", description: "Obra coletiva contemplada com a Lei Paulo Gustavo SECULT PA." },
    { year: "2022", title: "Laboratório voz e criação", description: "Performer." },
    { year: "2022", title: "Ava Amazonia Festival - festival internacional indígena", description: "Performer." },
    { year: "2022", title: "Gritos da terra", description: "Performer." },
    { year: "2020", title: "Curandeiras", description: "Obra coletiva. Prêmio Rede Virtual de Arte e Cultura do Governo do Estado do Pará - Fundação Cultural de Artes - Dart Edital 010/2020." },
    { year: "2019", title: "Vivência topos", description: "Performer." },
    { year: "2018", title: "Borboleta azul", description: "Performer." },
    { year: "2018", title: "Cosmogonia", description: "Performer." },
    { year: "2017-2018", title: "As mandiocas - mulheres raiz", description: "Obra coletiva. Prêmio de produção artística da Fundação Cultural Seiva." },
    { year: "2016", title: "Lugar de mulher é onde ela quiser", description: "Performer." },
    { year: "2013", title: "Serra Pelada", description: "Performer." }
  ];

  const formations = [
    {
      title: "Mestrado profissional em dança",
      institution: "PPGPDAN/FAV",
      year: "2022"
    },
    {
      title: "Bacharelado em Nutrição",
      institution: "Escola Superior da Amazônia (ESAMAS)",
      year: "2016-2019"
    },
    {
      title: "Pós-graduação em saúde pública; neurociência, aprendizagem e neuropsicologia",
      institution: "—",
      year: "—"
    },
    {
      title: "Intérprete/criadora em dança — Produção cultural e design",
      institution: "UFPA (eixo tecnólogo)",
      year: "2013-2018"
    },
    {
      title: "Nutricionista",
      institution: "CRN7 10728",
      year: "—"
    },
    {
      title: "Intérprete criadora em dança",
      institution: "Parecer CNE/CEBN 16/1999, Resolução 04/1999",
      year: "—"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-20">
            
            <div className="col-span-12 md:col-span-5 aspect-[3/4] min-h-[320px] md:min-h-0 group overflow-hidden">
              <img
                alt="Andréa Apolinário - Retrato"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={BioImage}
              />
            </div>

            
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 italic">
                // Bio
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
                Andréa Apolinário
              </h1>
              
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Andréa Apolinário, é Mestranda no mestrado profissional em dança PPGPDAN/FAV( 2022). Bacharela em nutrição pela Escola Superior da Amazônia Esamas (2016- 2019). Pós- graduada em saúde pública; neurociência- aprendizagem e neuropsicologia. É intérprete/criadora em dança no eixo tecnólogo produção cultural e design UFPA ( 2013- 2018) . Possui carreiras de  nutricionista CRN7 10728 e intérprete criadora em dança ( parecer CNE/ CEBN16/1999 resolução 04/1999) . O trajeto artístico/ acadêmico de Andréa Apolinário perpassa por um fazer de trabalhos na área da dança/ música contracoloniais, pesquisadora,bailarina, performer, carimbozeira e coralista afro-brasileira.  É  afro- amazônica,não monogâmica, ativista ambiental,umbandista, sacerdotisa do sagrado feminino, mãe de 2.
                </p>
                <p>
                  Realizou a obra coletiva    &quot;mulheres mães que cuidam e dançam&quot; contemplada com a lei Paulo Gustavo SECULT PA (2024). Foi contemplada com a obra coletiva As mandiocas &quot; mulheres raiz&quot; prêmio de produção artística da fundação cultural seiva ( 2017- 2018) : foi beneficiada com a obra coletiva  &quot;curandeiras&quot; prêmio rede virtual de arte e cultura do governo do estado do Pará- Fundação cultural de  artes -Dart Edital 010/2020 . Foi performer na obra coletiva &quot; Nós em Nós&quot;( 2025 ) : &quot; laboratório de criação de energias e estados físicos  para o ator - performer a partir  de símbolos ( 2025)  : &quot;coral matamba - a voz nascida do vento (2024) : &quot; corpa- casa- gaiola (2024):              &quot; rogai&quot; ( 2024) :   laboratório voz e criação&quot; ( 2022): &quot;avaamazoniafestival-&quot; festival internacional indígena (2022) : gritos da terra (2022) : curandeiras ( 2020): vivência topos ( 2019): borboleta azul (2018): cosmogonia(2018): lugar de mulher é onde ela quiser( 2016): Serra Pelada  (2013).
                </p>
              </div>
            </div>
          </div>

          {/* Galería de imágenes fijas — sin repetir fotos */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4 auto-rows-[minmax(320px,auto)] md:auto-rows-[minmax(200px,auto)] mt-20">
            <div className="col-span-12 md:col-span-4 aspect-[3/4] min-h-[280px] md:min-h-0 group overflow-hidden cursor-pointer">
              <img
                src={BioImage2}
                alt="Andréa Apolinário - Galeria 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-square min-h-[280px] md:min-h-0 group overflow-hidden cursor-pointer">
              <img
                src={BioGalleryExtra}
                alt="Andréa Apolinário - Galeria 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-6 aspect-[4/3] min-h-[280px] md:min-h-0 group overflow-hidden">
              <img
                src={BioImage3}
                alt="Andréa Apolinário - Trajetória"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
                // Trajetória
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                Trajetória Artística
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Realizou a obra coletiva &quot;Mulheres mães que cuidam e dançam&quot; contemplada com a Lei Paulo Gustavo SECULT PA (2024). Foi contemplada com a obra coletiva As mandiocas &quot;mulheres raiz&quot; — prêmio de produção artística da Fundação Cultural Seiva (2017-2018). Foi beneficiada com a obra coletiva &quot;Curandeiras&quot; — prêmio Rede Virtual de Arte e Cultura do Governo do Estado do Pará, Fundação Cultural de Artes - Dart Edital 010/2020.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 border-b border-white/10 pb-12 last:border-0">
                <div className="md:w-1/4">
                  <span className="text-primary font-black text-2xl">{item.year}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold uppercase mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Formação
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
            Formação & Pesquisa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div key={index} className="border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                  {formation.year}
                </span>
                <h3 className="text-xl font-bold uppercase mb-3">{formation.title}</h3>
                <p className="text-gray-400 text-sm">{formation.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-light italic text-gray-300 leading-relaxed">
            &quot;Por uma revolução concebida ao mover-se. Investigar gestos de insurgência e unguentos contra as marcas 
            de um sistema-mundo que forja corpos silenciados em seus instintos. A corpa em movimento como arma que sonha, 
            investe modos de desestabilização do habituado, inventa novos possíveis.&quot;
          </blockquote>
          <p className="mt-8 text-primary font-bold uppercase tracking-widest text-sm">
            — Andréa Apolinário
          </p>
        </div>
      </section>
    </div>
  );
};

export default Bio;

