import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: 'Agendamento de Performance',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@escutadasplantas.art?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleDownloadPressKit = () => {
    console.log('Download press kit');
  };

  return (
    <section className="py-16 md:py-32 px-4 md:px-6" id="contact">
      <div className="max-w-7xl mx-auto border border-white/10 bg-white dark:bg-background-dark/50 p-6 md:p-12 lg:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 md:p-12 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[150px] md:text-[300px] text-primary">contact_page</span>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6">
              Vamos Criar Ressonância
            </h2>
            <p className="text-base md:text-xl text-gray-400 font-light mb-8 md:mb-12 max-w-sm">
              Aberto para comissões, performances internacionais e workshops colaborativos.
            </p>

            <div className="space-y-3 md:space-y-4">
              <a
                href="mailto:hello@escutadasplantas.art"
                className="flex items-center gap-3 md:gap-4 group"
              >
                <span className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-symbols-outlined text-lg md:text-xl">mail</span>
                </span>
                <span className="text-sm md:text-lg font-medium break-all">escutadasplantas@gmail.com</span>
              </a>

              <button
                onClick={handleDownloadPressKit}
                className="flex items-center gap-3 md:gap-4 group w-full"
              >
                <span className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-symbols-outlined text-lg md:text-xl">download</span>
                </span>
                <span className="text-sm md:text-lg font-medium uppercase tracking-widest text-left">
                  Download Kit de Imprensa (PDF)
                </span>
              </button>
            </div>
          </div>

          <div className="bg-background-light dark:bg-white/5 p-6 md:p-8 border border-black/5 dark:border-white/5">
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 uppercase tracking-widest">Contato</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase font-bold text-gray-500 mb-2">
                  Seu Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-primary outline-none py-2 text-sm md:text-base transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] uppercase font-bold text-gray-500 mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-primary outline-none py-2 text-sm md:text-base transition-colors"
                >
                  <option value="Agendamento de Performance">Performance</option>
                  <option value="Inquérito de Workshop"> Workshop</option>
                  <option value="Colaboração">Colaboração</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase font-bold text-gray-500 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-700 focus:border-primary outline-none py-2 text-sm md:text-base transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 md:py-4 font-black uppercase tracking-widest text-sm md:text-base hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Enviar 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

