import React from 'react';
import { Hero } from '../components/UI';

const About = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <Hero 
        title="About Us" 
        subtitle="The Voice of Industry"
        image="https://picsum.photos/1920/800?random=4" 
        height="half"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-12 shadow-lg rounded-xl border-l-4 border-navy-900">
           <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Who We Are</h2>
           <p className="text-slate-700 leading-relaxed font-light">
             The Federation of Trade and Industry of India (FTII) is a national organization that serves as the voice of India’s Trade and Industry.
           </p>
        </div>
      </div>
    </div>
  );
};

export default About;