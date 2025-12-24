import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Mock data for the specific flour products shown in screenshot
  const products = [
    { name: 'Wheat Bran', color: 'bg-amber-700', image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/YI/IO/QV/3382760/wheat-bran.jpeg' },
    { name: 'Sooji', color: 'bg-yellow-400', image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/KC/XQ/VO/125301384/sooji.jpg' },
    { name: 'Maida', color: 'bg-red-600', image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/QO/UT/GL/125301384/maida.jpg' },
    { name: 'Dalia', color: 'bg-green-600', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/346853384/Dalia-500x500.jpeg' },
    { name: 'Atta', color: 'bg-yellow-500', image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/UY/OA/XM/125301384/atta.jpg' },
    { name: 'Besan', color: 'bg-orange-400', image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/NS/QI/QY/125301384/besan.jpg' },
  ];

  return (
    <div className="bg-white font-sans min-h-screen pb-20">
      
      {/* 1. Hero Section matching screenshot */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-blue-950 flex items-center justify-center overflow-hidden">
         {/* Abstract/Office Background with overlay */}
         <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
               alt="Corporate Background" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-950/95"></div>
         </div>
         
         <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white uppercase tracking-wider drop-shadow-lg">
               Products Promotion
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mt-4 rounded-full opacity-50"></div>
         </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
         
         {/* Tabs Section */}
         <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-100 flex justify-center md:justify-end px-8 pt-4">
             {['All', 'Products', 'More'].map((tab) => (
                <button
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`px-8 py-4 text-lg font-bold transition-all relative ${
                      activeTab === tab 
                      ? 'text-cyan-600' 
                      : 'text-gray-400 hover:text-cyan-500'
                   }`}
                >
                   {tab}
                   {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-green-500"></div>
                   )}
                </button>
             ))}
         </div>

         {/* Grid Layout */}
         <div className="bg-white p-6 md:p-12 shadow-xl rounded-b-xl min-h-[600px]">
            <div className="flex flex-col xl:flex-row gap-12">
               
               {/* Left Column: Vendor Profile Banner */}
               <div className="w-full xl:w-[40%] flex-shrink-0">
                  <div className="border-2 border-dashed border-gray-200 p-6 rounded-xl bg-slate-50 relative overflow-hidden group hover:border-blue-200 transition-colors">
                     
                     {/* Logos Row */}
                     <div className="flex justify-between items-start mb-8">
                        <div className="flex flex-col items-center">
                           <span className="font-bold text-[#2874f0] text-lg italic">Flipkart</span>
                           <div className="bg-[#fff000] text-[#2874f0] text-xs font-bold px-1 rounded flex items-center mt-1">
                              Plus <span className="ml-1 text-white">+</span>
                           </div>
                        </div>
                        
                        {/* Brand Logo Centerpiece */}
                        <div className="relative -mt-4 transform hover:scale-105 transition-transform duration-300">
                           <div className="w-40 h-24 bg-red-700 rounded-lg shadow-lg border-4 border-yellow-400 flex flex-col items-center justify-center text-white relative overflow-hidden">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-800"></div>
                              <span className="font-serif font-bold text-2xl relative z-10 drop-shadow-md">Sarvopari</span>
                              <div className="w-24 h-0.5 bg-yellow-400 mt-1 relative z-10"></div>
                              <div className="w-full h-4 bg-yellow-400 absolute bottom-0"></div>
                           </div>
                        </div>

                        <div className="flex items-center">
                           <span className="font-bold text-gray-800 text-xl">amazon</span>
                        </div>
                     </div>

                     {/* Product Collage */}
                     <div className="flex justify-center items-end -space-x-4 mb-8 h-48">
                        {products.slice(0,3).map((p, i) => (
                           <div key={i} className={`relative w-24 h-32 ${i === 1 ? 'z-20 w-32 h-40 -mb-2' : 'z-10 opacity-90'}`}>
                               <img src={p.image} alt={p.name} className="w-full h-full object-contain drop-shadow-xl" />
                           </div>
                        ))}
                     </div>

                     {/* Contact Details */}
                     <div className="text-center space-y-3 relative z-10">
                        <h2 className="text-red-600 font-extrabold text-xl md:text-2xl uppercase tracking-tight">
                           RAMA MILK FOOD (UNIT: FLOUR MILL)
                        </h2>
                        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
                        <p className="text-blue-600 font-bold text-xs md:text-sm uppercase max-w-sm mx-auto">
                           SIDCO INDUSTRIAL COMPLEX, BARI BRAHMANA, JAMMU - 181133
                        </p>
                        <p className="text-red-600 text-sm font-bold flex items-center justify-center gap-1">
                           <Mail size={16} /> Email - sarvoparionline@gmail.com
                        </p>
                        
                        {/* Social Row */}
                        <div className="flex justify-center items-center gap-3 py-2">
                           <a href="#" className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
                           <a href="#" className="p-2 bg-pink-100 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"><Instagram size={18} /></a>
                           <a href="#" className="p-2 bg-blue-100 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white transition-colors"><Linkedin size={18} /></a>
                           <a href="#" className="p-2 bg-sky-100 rounded-full text-sky-500 hover:bg-sky-500 hover:text-white transition-colors"><Twitter size={18} /></a>
                           <span className="text-blue-600 font-bold text-sm ml-1">: SarvopariOnline</span>
                        </div>

                        <p className="text-green-600 font-bold text-sm md:text-base border-t border-dashed border-green-200 pt-3 mt-2 inline-block">
                           Mob. No - 9419181912 , 9419189180 , 7780836375
                        </p>
                     </div>

                     {/* Background decoration */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full filter blur-3xl opacity-50 -z-0 translate-x-1/2 -translate-y-1/2"></div>
                  </div>
               </div>

               {/* Right Column: Product Grid */}
               <div className="w-full xl:w-[60%]">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                     {products.map((product, index) => (
                        <div key={index} className="group flex flex-col items-center">
                           <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white border border-gray-100 p-4 flex items-center justify-center">
                              {/* Product Image */}
                              <img 
                                 src={product.image} 
                                 alt={product.name} 
                                 className="w-full h-full object-contain"
                              />
                              
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                 <button className="bg-white text-navy-900 px-6 py-2 rounded-full font-bold text-sm transform scale-90 group-hover:scale-100 transition-transform">
                                    View Details
                                 </button>
                              </div>
                              
                              {/* Brand Tag */}
                              <div className="absolute top-2 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-r shadow-sm">
                                 Sarvopari
                              </div>
                              <div className="absolute top-2 right-2">
                                 <div className="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center p-[2px]">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                 </div>
                              </div>
                           </div>
                           
                           <h3 className="font-bold text-navy-900 text-lg group-hover:text-blue-600 transition-colors">{product.name}</h3>
                           <p className="text-gray-400 text-xs uppercase tracking-wide">Premium Quality</p>
                        </div>
                     ))}
                  </div>

                  {/* Contact Button */}
                  <div className="mt-16 text-center">
                     <Link to="/contact">
                        <button className="bg-[#4CAF50] hover:bg-[#43a047] text-white text-lg font-bold py-3 px-16 rounded shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                           Contact Us
                        </button>
                     </Link>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
};

export default Products;