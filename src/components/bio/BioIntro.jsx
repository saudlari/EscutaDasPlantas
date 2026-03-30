const BioIntro = ({ portraitSrc, galleryImageSrc }) => (
  <section className="py-32 px-6 bg-background-dark">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 md:col-span-5 aspect-[3/4] min-h-[320px] md:min-h-0 group overflow-hidden">
          <img
            alt="Andréa Apolinário - Retrato"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={portraitSrc}
          />
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 italic">// Bio</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
            Andréa Apolinário
          </h1>

          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Andréa Apolinário, é Mestranda no mestrado profissional em dança PPGPDAN/FAV( 2022). Bacharela em nutrição
              pela Escola Superior da Amazônia Esamas (2016- 2019). Pós- graduada em saúde pública; neurociência-
              aprendizagem e neuropsicologia. É intérprete/criadora em dança no eixo tecnólogo produção cultural e design
              UFPA ( 2013- 2018) . Possui carreiras de nutricionista CRN7 10728 e intérprete criadora em dança ( parecer
              CNE/ CEBN16/1999 resolução 04/1999) . O trajeto artístico/ acadêmico de Andréa Apolinário perpassa por um
              fazer de trabalhos na área da dança/ música contracoloniais, pesquisadora,bailarina, performer,
              carimbozeira e coralista afro-brasileira. É afro- amazônica,não monogâmica, ativista ambiental,umbandista,
              sacerdotisa do sagrado feminino, mãe de 2.
            </p>
            <p>
              Realizou a obra coletiva &quot;mulheres mães que cuidam e dançam&quot; contemplada com a lei Paulo Gustavo
              SECULT PA (2024). Foi contemplada com a obra coletiva As mandiocas &quot; mulheres raiz&quot; prêmio de
              produção artística da fundação cultural seiva ( 2017- 2018) : foi beneficiada com a obra coletiva &quot;
              curandeiras&quot; prêmio rede virtual de arte e cultura do governo do estado do Pará- Fundação cultural de
              artes -Dart Edital 010/2020 . Foi performer na obra coletiva &quot; Nós em Nós&quot;( 2025 ) : &quot;
              laboratório de criação de energias e estados físicos para o ator - performer a partir de símbolos ( 2025) :
              &quot;coral matamba - a voz nascida do vento (2024) : &quot; corpa- casa- gaiola (2024): &quot;
              rogai&quot; ( 2024) : laboratório voz e criação&quot; ( 2022): &quot;avaamazoniafestival-&quot; festival
              internacional indígena (2022) : gritos da terra (2022) : curandeiras ( 2020): vivência topos ( 2019):
              borboleta azul (2018): cosmogonia(2018): lugar de mulher é onde ela quiser( 2016): Serra Pelada (2013).
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4 auto-rows-[minmax(320px,auto)] md:auto-rows-[minmax(200px,auto)] mt-20">
        <div className="col-span-12 md:col-span-4 aspect-[3/4] min-h-[280px] md:min-h-0 group overflow-hidden cursor-pointer relative">
          <img
            src={galleryImageSrc}
            alt="Andréa Apolinário - Galeria 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        </div>
      </div>
    </div>
  </section>
);

export default BioIntro;
