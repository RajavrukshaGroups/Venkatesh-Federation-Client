import React, { useEffect } from 'react';
// @ts-ignore
import { useSearchParams } from 'react-router-dom';
import { Hero, SectionTitle } from '../components/UI';
import { Download, FileText, Image as ImageIcon, BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Media = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'blog';

  const tabs = [
    { id: 'blog', label: 'Blog & Updates' },
    { id: 'magazine', label: 'Magazine Vyapar Trends' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const renderContent = () => {
    switch (currentTab) {
      case 'magazine':
        return <MagazineContent />;
      case 'gallery':
        return <GalleryContent />;
      case 'blog':
      default:
        return <BlogContent />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title={tabs.find(t => t.id === currentTab)?.label || 'Media Room'} 
        subtitle="Stay updated with the latest from FTII."
        image="https://picsum.photos/1920/800?random=16" 
        height="half" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
           {/* Sidebar Navigation */}
           <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                 <div className="bg-navy-900 p-4">
                    <h3 className="text-white font-serif font-bold text-lg">Media Room</h3>
                 </div>
                 <div className="flex flex-col">
                    {tabs.map((tab) => (
                       <button
                          key={tab.id}
                          onClick={() => setSearchParams({ tab: tab.id })}
                          className={`text-left px-5 py-4 text-sm font-medium border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors flex items-center justify-between group ${currentTab === tab.id ? 'bg-gold-50 text-gold-600 border-l-4 border-l-gold-500' : 'text-slate-600 border-l-4 border-l-transparent'}`}
                       >
                          {tab.label}
                       </button>
                    ))}
                 </div>
              </div>

              {/* Quick Links Sidebar Box */}
              <div className="bg-navy-900 text-white p-6 rounded-lg shadow-lg mt-8 sticky top-24">
                 <h4 className="font-serif font-bold text-lg mb-4 text-gold-400">Press Contact</h4>
                 <p className="text-sm text-gray-300 mb-4">For media inquiries, interviews, and official statements.</p>
                 <div className="space-y-3 text-sm">
                    <p className="flex items-center"><span className="font-bold w-16">Email:</span> media@ftii.in</p>
                    <p className="flex items-center"><span className="font-bold w-16">Phone:</span> +91 11 9876 5432</p>
                 </div>
              </div>
           </div>

           {/* Main Content */}
           <div className="lg:w-3/4">
              <div className="bg-white p-8 rounded-lg shadow-lg min-h-[500px]">
                 {renderContent()}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-components for each section ---

const BlogContent = () => (
  <div>
    <SectionTitle title="Latest Updates" subtitle="News, press releases, and articles." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-slate-50 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
             <div className="h-48 overflow-hidden relative">
                <img src={`https://picsum.photos/600/400?random=${20+i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="News" />
                <div className="absolute top-4 left-4 bg-navy-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {i % 2 === 0 ? 'Press Release' : 'Event'}
                </div>
             </div>
             <div className="p-6">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                   <Calendar size={12} className="mr-1" />
                   <span>October {10 + i}, 2025</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3 leading-snug group-hover:text-gold-600 transition-colors">
                   FTII Annual Summit 2025: Key Takeaways & Strategic Goals
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                   Leading industrialists gathered in New Delhi to discuss the roadmap for 2030, focusing on sustainable manufacturing and digital exports.
                </p>
                <button className="text-navy-900 font-bold text-sm flex items-center hover:text-gold-600 transition-colors">
                   Read Full Story <ArrowRight size={14} className="ml-1" />
                </button>
             </div>
          </div>
       ))}
    </div>
    
    <div className="mt-16 pt-8 border-t border-gray-100">
       <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
          <FileText className="mr-2 text-gold-500" /> Documents & Downloads
       </h3>
       <div className="space-y-3">
          {['Annual Report 2024.pdf', 'Budget Analysis 2025.pdf', 'Membership Brochure.pdf'].map((file, i) => (
             <div key={i} className="flex items-center justify-between bg-slate-50 p-4 rounded border border-gray-100 hover:border-gold-300 transition cursor-pointer group">
                <div className="flex items-center">
                   <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-red-500 mr-3 shadow-sm group-hover:bg-red-50">
                      <FileText size={16} />
                   </div>
                   <span className="font-medium text-slate-700 group-hover:text-navy-900">{file}</span>
                </div>
                <button className="text-gray-400 hover:text-gold-600 transition-colors">
                   <Download size={20} />
                </button>
             </div>
          ))}
       </div>
    </div>
  </div>
);

const MagazineContent = () => (
  <div>
    <SectionTitle title="Magazine Vyapar Trends" subtitle="The official monthly publication of FTII." />
    
    <div className="bg-navy-900 text-white rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
       <div className="w-full md:w-1/3 shrink-0">
          <div className="aspect-[3/4] bg-gray-800 rounded-lg shadow-2xl overflow-hidden border-4 border-white/10 relative group">
             <img src="https://picsum.photos/600/800?random=magazine" alt="Latest Issue" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="border-2 border-white px-6 py-2 uppercase tracking-widest font-bold text-sm">Read Now</span>
             </div>
          </div>
       </div>
       <div>
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">Latest Issue</span>
          <h3 className="text-3xl font-serif font-bold mb-4">October 2025: The Digital Revolution in Manufacturing</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
             In this issue, we explore how AI and IoT are transforming traditional Indian industries. Exclusive interviews with tech pioneers and policy makers.
          </p>
          <div className="flex flex-wrap gap-4">
             <button className="bg-gold-500 text-navy-900 px-6 py-3 rounded font-bold hover:bg-gold-400 transition-colors flex items-center">
                <Download size={18} className="mr-2" /> Download PDF
             </button>
             <button className="border border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-navy-900 transition-colors flex items-center">
                <BookOpen size={18} className="mr-2" /> Read Online
             </button>
          </div>
       </div>
    </div>

    <h3 className="text-xl font-bold text-navy-900 mb-6 border-b pb-2">Archives</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {['September', 'August', 'July', 'June'].map((month, i) => (
          <div key={i} className="group cursor-pointer">
             <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-3 shadow-md relative">
                <img src={`https://picsum.photos/400/530?random=${50+i}`} alt={`${month} Issue`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors"></div>
             </div>
             <h4 className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors">{month} 2025</h4>
             <p className="text-xs text-gray-500">Vol. 4 Issue {10-i}</p>
          </div>
       ))}
    </div>
  </div>
);

const GalleryContent = () => (
  <div>
    <SectionTitle title="Photo Gallery" subtitle="Moments from our events and delegations." />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
       {[
          { size: 'row-span-2', img: 60 },
          { size: '', img: 61 },
          { size: '', img: 62 },
          { size: 'col-span-2', img: 63 },
          { size: '', img: 64 },
          { size: '', img: 65 },
          { size: 'col-span-2 row-span-2', img: 66 },
          { size: '', img: 67 },
       ].map((item, i) => (
          <div key={i} className={`relative rounded-lg overflow-hidden group shadow-md ${item.size}`}>
             <img 
               src={`https://picsum.photos/800/800?random=${item.img}`} 
               alt="Gallery Item" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">Event Title {i + 1}</p>
                <p className="text-gold-400 text-xs uppercase tracking-wider">New Delhi</p>
             </div>
             <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <ImageIcon size={20} />
             </div>
          </div>
       ))}
    </div>
    
    <div className="mt-8 text-center">
       <button className="border-2 border-navy-900 text-navy-900 px-8 py-3 rounded font-bold hover:bg-navy-900 hover:text-white transition-all">
          Load More Memories
       </button>
    </div>
  </div>
);

export default Media;