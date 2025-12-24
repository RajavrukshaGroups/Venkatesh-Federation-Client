import React from 'react';
import { Hero } from '../components/UI';
import { MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      <Hero title="Contact Us" image="https://picsum.photos/1920/800?random=9" height="half" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                 <h2 className="text-4xl font-bold text-blue-700 mb-6">Connect With Us</h2>
                 <p className="text-slate-800 leading-relaxed mb-8">FTII is dedicated to working with its members to create an environment conducive to growth.</p>
                 <div className="space-y-6">
                    <div className="flex items-center"><Mail size={24} className="mr-4 text-red-600" /> ftiiassociation@gmail.com</div>
                    <div className="flex items-center"><MapPin size={24} className="mr-4 text-red-600" /> New Kondli, Delhi-110096.</div>
                 </div>
              </div>
              <form className="space-y-6">
                 <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Name" />
                 <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Email" />
                 <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded" placeholder="Message"></textarea>
                 <button className="px-8 py-3 bg-navy-900 text-white font-bold rounded">Submit</button>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;