import { useEffect } from 'react';
import MentoryImage1 from '../assets/Mentory1.webp';
import MentoryImage2 from '../assets/Mentory2.webp';

const Mentoria = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const mentorshipTypes = [
    {
      title: "Mentoria Individual",
      duration: "Sessões de 90 minutos",
      description: "Processo personalizado de investigação somática e desenvolvimento coreográfico. Trabalho profundo de escuta corporal e conexão com ritmos biológicos.",
      includes: [
        "Análise de movimento e padrões corporais",
        "Desenvolvimento de práticas somáticas personalizadas",
        "Orientação para criação de material coreográfico",
        "Acompanhamento de processos artísticos"
      ],
      price: "Sob consulta"
    },
    {
      title: "Mentoria em Grupo",
      duration: "Workshops de 3-4 horas",
      description: "Espaço coletivo de exploração e compartilhamento de práticas. Investigação em grupo sobre comunicação planta-humano e movimento somático.",
      includes: [
        "Práticas de escuta e ressonância",
        "Exercícios de conexão com o ambiente",
        "Criação colaborativa",
        "Compartilhamento de processos"
      ],
      price: "Sob consulta"
    },
    {
      title: "Mentoria Intensiva",
      duration: "Retiros de 3-5 dias",
      description: "Imersão profunda em espaços naturais. Processo intensivo de reconexão com o corpo e o ambiente através de práticas somáticas e observação botânica.",
      includes: [
        "Práticas diárias de movimento",
        "Sessões de observação botânica",
        "Criação de material performático",
        "Alimentação e hospedagem inclusas"
      ],
      price: "Sob consulta"
    }
  ];

  const testimonials = [
    {
      quote: "Um processo de entrega que me levou através das minhas sombras, traumas, medos, toda minha dor e vulnerabilidade - até a aceitação, o renascimento e amor próprio. Uma experiência profunda de reconexão comigo mesma, que me mudou para sempre.",
      author: "Maria Silva",
      location: "São Paulo, Brasil"
    },
    {
      quote: "Eu bem conhecia as cargas emotivas que levava comigo durante a vida, mas certamente não imaginava que as tinha tão à flor da pele. Com a Escuta das Plantas passamos a percorrer caminhos que nos deslizavam sutilmente a lugares inimagináveis de nossas vidas.",
      author: "Ana Costa",
      location: "Lisboa, Portugal"
    },
    {
      quote: "Eu fui capaz de soltar minhas tensões, tristezas, culpas e medos através das práticas que fizemos juntas durante o retiro. Eu pude perceber as similaridades que nós compartilhamos como mulheres, e as batalhas que nós lutamos separadamente enquanto deveríamos/poderíamos estar juntas.",
      author: "Sophie Martin",
      location: "Paris, França"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-20">
            
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
                // Mentorias Individuais
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
                Mentorias Individuais
              </h1>
              
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Uma jornada de exploração da singularidade do selvagem, que reverencia a natureza como território 
                  ritualístico na convocação e reconexão com o saber do corpo.
                </p>
                <p>
                  Uma prática experimental que entende o movimento como narrativa somática: o invocar de uma dança que cria 
                  rupturas, percorre novas subjetividades, e se deixa afetar por sensibilidades que evocam outras formas de existência.
                </p>
              </div>
            </div>

            
            <div className="col-span-12 md:col-span-5 aspect-[3/4] min-h-[320px] md:min-h-0 group overflow-hidden">
              <img
                alt="Processo de Mentoria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={MentoryImage2}
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Modalidades
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
            Modalidades de Mentoria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipTypes.map((type, index) => (
              <div key={index} className="border border-white/10 p-8 bg-background-dark hover:border-primary/50 transition-all">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                  {type.duration}
                </span>
                <h3 className="text-2xl font-bold uppercase mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {type.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-primary font-bold text-lg">{type.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6">
            
            <div className="col-span-12 md:col-span-8 aspect-[4/3] min-h-[280px] md:min-h-0 group overflow-hidden">
              <img
                alt="Processo de Mentoria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={MentoryImage1}
              />
            </div>

            
            <div className="col-span-12 md:col-span-4 flex flex-col justify-center px-6 md:px-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
                // Processo
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Como Funciona
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  O processo de mentoria é construído de forma personalizada, respeitando o ritmo e as necessidades 
                  específicas de cada pessoa.
                </p>
                <p>
                  Através de práticas somáticas, exercícios de movimento, observação botânica e criação coreográfica, 
                  desenvolvemos um processo que permite a reconexão com o corpo e o ambiente de forma profunda e transformadora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block italic">
            // Depoimentos
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
            O Que Dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-white/10 p-8 bg-background-dark">
                <p className="text-gray-300 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Entre em contato para agendar uma sessão inicial e descobrir como podemos trabalhar juntos.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/80 text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all"
          >
            Agendar Sessão
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mentoria;

