import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Hero, SectionTitle } from '../components/UI';
import { MapPin, Award, Briefcase } from 'lucide-react';

const Team = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'council';

  const tabs = [
    { id: 'council', label: 'FTII Council' },
    { id: 'state_presidents', label: 'State Presidents' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
       <Hero title="Leadership" subtitle="Meet our visionaries." image="https://picsum.photos/1920/600?random=team" height="half" />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
               <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSearchParams({ tab: tab.id })}
                      className={`w-full text-left px-5 py-4 text-sm font-medium border-b border-gray-100 ${currentTab === tab.id ? 'bg-gold-50 text-gold-600 border-l-4 border-gold-500' : 'text-slate-600'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
               </div>
            </div>
            <div className="lg:w-3/4">
               <div className="bg-white p-8 rounded-lg shadow-lg">
                  <SectionTitle title={tabs.find(t => t.id === currentTab)?.label} />
                  <p className="text-gray-500 italic mt-4">Leadership members for {currentTab} category will appear here.</p>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default Team;