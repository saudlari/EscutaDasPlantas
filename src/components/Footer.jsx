const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Vimeo', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="py-12 border-t border-white/5 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">eco</span>
          <span className="font-black uppercase tracking-tighter">Escuta das Plantas</span>
        </div>

        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">
          © 2024 Artistry in Motion. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

