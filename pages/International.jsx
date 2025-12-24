import React from 'react';
import { Hero, SectionTitle } from '../components/UI';
import { Globe, Plane, Handshake, Map } from 'lucide-react';

const International = () => {
  return (
    <div className="bg-slate-50">
      <Hero title="International Forum" subtitle="Bridging borders. Expanding markets." image="https://picsum.photos/1920/800?random=10" height="half" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Global Trade Routes" subtitle="Strategic partnerships across continents." />
          
          <div className="relative bg-navy-900 rounded-xl overflow-hidden shadow-2xl h-[500px] flex items-center justify-center mb-16">
            <img src="https://picsum.photos/1200/600?random=11" alt="World Map" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative z-10 text-center">
               <Globe className="w-24 h-24 text-gold-500 mx-auto mb-4 animate-pulse" />
               <h3 className="text-3xl font-serif text-white font-bold">Connecting India to the World</h3>
               <p className="text-gray-300 mt-2">Active delegations in 40+ countries</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Handshake, title: "Bilateral Partnerships", desc: "MoUs with leading global chambers of commerce." },
              { icon: Plane, title: "Trade Delegations", desc: "Regular business trips to emerging markets." },
              { icon: Map, title: "Market Intelligence", desc: "Country-specific opportunity reports." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded shadow border-b-4 border-gold-500 hover:-translate-y-1 transition-transform">
                <item.icon className="w-12 h-12 text-navy-900 mb-4" />
                <h4 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default International;