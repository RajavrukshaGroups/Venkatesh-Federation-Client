import React from 'react';
import { Hero, SectionTitle, Button } from '../components/UI';

const Opinionator = () => {
  return (
    <div className="bg-slate-50">
      <Hero title="The Opinionator" subtitle="Your Voice Shapes Our Industry!" image="https://picsum.photos/1920/800?random=8" height="half" />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-gold-500">
              <SectionTitle title="Your Opinion" />
              <form className="space-y-6">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded outline-none" placeholder="Your Name" />
                <textarea rows={6} className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded outline-none" placeholder="Your message..."></textarea>
                <Button className="w-full py-4 text-lg">Submit Opinion</Button>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Opinionator;