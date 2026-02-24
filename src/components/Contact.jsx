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
    <section className="py-32 px-6" id="contact">
      <div className="max-w-7xl mx-auto border border-white/10 rounded-3xl bg-white dark:bg-background-dark/50 p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] text-primary">contact_page</span>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Vamos Criar Ressonância
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-sm">
              Aberto para comissões, performances internacionais e workshops colaborativos.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@escutadasplantas.art"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </span>
                <span className="text-lg font-medium">escutadasplantas@gmail.com</span>
              </a>

              <button
                onClick={handleDownloadPressKit}
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">download</span>
                </span>
                <span className="text-lg font-medium uppercase tracking-widest">
                  Download Kit de Imprensa (PDF)
                </span>
              </button>
            </div>
          </div>

          <div className="bg-background-light dark:bg-white/5 p-8 rounded-2xl border border-black/5 dark:border-white/5">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest">Contato</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  className="w-full bg-transparent border-b border-gray-700 focus:border-primary outline-none py-2 transition-colors"
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
                  className="w-full bg-transparent border-b border-gray-700 focus:border-primary outline-none py-2 transition-colors"
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
                  className="w-full bg-transparent border-b border-gray-700 focus:border-primary outline-none py-2 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all"
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

