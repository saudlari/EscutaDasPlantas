import { useEffect } from 'react';

const Agenda = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const events = [
    {
      id: 1,
      title: "LabDanza - Rio de Janeiro",
      date: "11-12 Abr 2025",
      location: "Rio de Janeiro, Brasil",
      type: "Workshop",
      description: "Workshop intensivo de 2 dias explorando práticas somáticas e conexão com ritmos biológicos. Inclui sessões práticas, observação botânica e criação de material coreográfico.",
      duration: "2 dias",
      price: "R$ 800"
    },
    {
      id: 2,
      title: "LabDanza - Florianópolis",
      date: "2-3 Mai 2025",
      location: "Florianópolis, Brasil",
      type: "Workshop",
      description: "Workshop intensivo de 2 dias explorando práticas somáticas e conexão com ritmos biológicos. Inclui sessões práticas, observação botânica e criação de material coreográfico.",
      duration: "2 dias",
      price: "R$ 800"
    },
    {
      id: 3,
      title: "LabDanza - Santiago",
      date: "6-7 Jun 2025",
      location: "Santiago, Chile",
      type: "Workshop",
      description: "Workshop intensivo de 2 dias explorando práticas somáticas e conexão com ritmos biológicos. Inclui sessões práticas, observação botânica e criação de material coreográfico.",
      duration: "2 dias",
      price: "CLP 150.000"
    },
    {
      id: 4,
      title: "LabDanza - Berlin",
      date: "1-3 Ago 2025",
      location: "Berlin, Alemanha",
      type: "Workshop",
      description: "Workshop intensivo de 3 dias explorando práticas somáticas e conexão com ritmos biológicos. Inclui sessões práticas, observação botânica e criação de material coreográfico.",
      duration: "3 dias",
      price: "€ 350"
    },
    {
      id: 5,
      title: "Immersive Lab - Costa Rica",
      date: "26-29 Nov 2025",
      location: "Costa Rica",
      type: "Retiro",
      description: "Retiro imersivo de 4 dias em espaço natural. Processo profundo de reconexão com o corpo e o ambiente através de práticas somáticas, observação botânica e criação performática.",
      duration: "4 dias",
      price: "US$ 1.200"
    },
    {
      id: 6,
      title: "Performance: Movement in Silence",
      date: "15 Set 2025",
      location: "São Paulo, Brasil",
      type: "Performance",
      description: "Apresentação da peça de resistência de 60 minutos explorando o corpo como condutor de vibrações ambientais.",
      duration: "60 minutos",
      price: "R$ 50"
    }
  ];

  const eventTypes = {
    Workshop: "bg-primary/20 text-primary",
    Retiro: "bg-green-500/20 text-green-400",
    Performance: "bg-purple-500/20 text-purple-400"
  };

  return (
    <div className="pt-20 min-h-screen">
      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Agenda
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Agenda 2025
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Descubra onde estaremos nos próximos meses. Workshops, retiros e performances em diferentes cidades 
              ao redor do mundo. Junte-se a nós nesta jornada de exploração somática e reconexão com o corpo e a natureza.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="border border-white/10 p-8 bg-background-dark hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest ${eventTypes[event.type]}`}>
                        {event.type}
                      </span>
                      <span className="text-primary font-black text-lg">{event.date}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-3">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-6 mb-4 text-gray-400">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {event.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {event.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div className="md:w-48 flex flex-col items-start md:items-end gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-black text-primary mb-1">{event.price}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">Investimento</p>
                    </div>
                    <a
                      href="/contact"
                      className="bg-primary hover:bg-primary/80 text-white px-6 py-2 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap"
                    >
                      Inscrever-se
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Informações Importantes
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed text-left">
            <p>
              <strong className="text-white">Inscrições:</strong> As vagas são limitadas. Para garantir sua participação, 
              entre em contato através do formulário de contato ou envie um email para hello@escutadasplantas.art
            </p>
            <p>
              <strong className="text-white">Pagamento:</strong> Aceitamos pagamento via transferência bancária, PIX (Brasil) 
              e cartão de crédito. Para eventos internacionais, aceitamos PayPal e transferência bancária.
            </p>
            <p>
              <strong className="text-white">Cancelamento:</strong> Em caso de cancelamento até 30 dias antes do evento, 
              reembolsamos 80% do valor pago. Cancelamentos com menos de 30 dias de antecedência não são reembolsáveis, 
              mas podem ser transferidos para outra pessoa.
            </p>
            <p>
              <strong className="text-white">Materiais:</strong> Todos os materiais necessários serão fornecidos. 
              Recomendamos trazer roupas confortáveis para movimento e um caderno para anotações.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/80 text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;

