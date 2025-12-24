import React from 'react';

export const Hero = ({ title, subtitle, image, align = 'center', height = 'half' }) => {
  return (
    <section className={`relative w-full ${height === 'full' ? 'h-screen' : 'h-[60vh]'} flex items-center`}>
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light slide-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4 inline-block relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gold-500 after:mx-auto after:mt-2">
      {title}
    </h2>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-sm font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-md";
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 border border-transparent",
    outline: "bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white",
    white: "bg-white text-navy-900 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};