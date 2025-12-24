import React, { useState } from 'react';

const MembershipRegistration = () => {
  const [selectedState, setSelectedState] = useState("");

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const districtsMap = {
    "Karnataka": [
      "Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru (Bangalore) Rural", "Bengaluru (Bangalore) Urban", 
      "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada", 
      "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi (Gulbarga)", "Kodagu", "Kolar", "Koppal", 
      "Mandya", "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi", 
      "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir"
    ],
    "Maharashtra": ["Mumbai City", "Mumbai Suburban", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
    "Kerala": ["Thiruvananthapuram", "Kollam", "Alappuzha", "Pathanamthitta", "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"]
  };

  const currentDistricts = selectedState && districtsMap[selectedState] ? districtsMap[selectedState].sort() : [];

  return (
    <div className="bg-slate-100 min-h-screen py-10 font-sans">
      <div className="max-w-4xl mx-auto bg-[#FFFBE6] shadow-2xl border border-gray-300 print:shadow-none print:border-0">
        <div className="bg-[#ED1C24] text-white p-6 relative">
             <div className="flex flex-col md:flex-row items-center gap-4">
                 <div className="w-24 h-24 bg-white rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md text-center">
                    <span className="text-[#ED1C24] font-bold text-3xl font-serif leading-none">FTII<br/><span className="text-[10px]">INDIA</span></span>
                 </div>
                 <div className="flex-grow text-center">
                     <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight">Federation of Trade and<br/>Industry of India</h1>
                 </div>
             </div>
             <div className="text-center mt-4 text-sm md:text-base font-medium space-y-1">
                 <p>B-1/67, Indira Chowk, Near Nanital Bank, New Kondli, New Delhi</p>
                 <p className="font-bold text-yellow-300 text-lg">(Karnataka Chapter)</p>
                 <p># 20, Millanium Business Bay, AM Road, KPN Extn., Bengaluru - 560 002</p>
                 <p>Email: ftiikarnataka@gmail.com</p>
             </div>
        </div>

        <div className="relative -mt-6 text-center mb-12 px-4">
             <span className="inline-block bg-[#0054A6] text-white font-bold text-xl md:text-2xl px-12 py-3 rounded-full shadow-lg border-4 border-white uppercase tracking-wide">
                Membership Application Form
             </span>
        </div>

        <div className="px-8 md:px-16 pb-16 text-navy-900">
             <div className="flex flex-col md:flex-row justify-between items-start mb-8 font-bold text-lg gap-4">
                 <div>
                     <p>TO,</p>
                     <p>THE PRESIDENT</p>
                     <p>FTII, KARNATAKA CHAPTER</p>
                 </div>
                 <div className="border border-gray-400 w-full md:w-48 h-12 flex items-center px-2 bg-white self-end md:self-auto">
                     <span className="text-red-500 mr-2">No.</span>
                     <input type="text" className="w-full h-full bg-transparent focus:outline-none" />
                 </div>
             </div>

             <div className="mb-8 font-bold">
                 <p>DEAR SIR,</p>
                 <div className="md:ml-16 mt-2">
                    <p>WE REQUEST YOU TO ENROLL US AS MEMBER OF</p>
                    <p>FEDERATION OF TRADE & INDUSTRY OF INDIA</p>
                 </div>
             </div>

             <form className="space-y-8 text-lg font-bold text-navy-900">
                 <div className="flex flex-col">
                     <div className="flex flex-col md:flex-row md:items-end gap-2">
                        <span className="whitespace-nowrap">1. COMPANY NAME</span>
                        <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                     </div>
                 </div>

                 <div className="flex flex-col gap-4">
                     <div className="flex flex-col md:flex-row md:items-end gap-2">
                        <span className="whitespace-nowrap">2. NAME OF THE PROPRIETOR / PARTNERS</span>
                        <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                     </div>
                     <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                 </div>

                 <div className="flex flex-col gap-4">
                     <div className="flex flex-col md:flex-row md:items-end gap-2">
                        <span className="whitespace-nowrap">3. ADDRESS</span>
                        <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                     </div>
                     <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                     
                     <div className="flex flex-wrap gap-4 mt-2">
                        <div className="flex-1 flex items-end gap-2 min-w-[200px]">
                            <span>TALUK</span>
                            <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                        </div>
                        <div className="flex-1 flex items-end gap-2 min-w-[200px]">
                            <span>DISTRICT</span>
                            <select 
                                className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2 appearance-none"
                                disabled={!selectedState}
                            >
                                <option value="" className="text-gray-400">
                                   {selectedState ? (currentDistricts.length > 0 ? "Select District" : "Other District") : "Select State First"}
                                </option>
                                {currentDistricts.map((district) => (
                                    <option key={district} value={district}>{district.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>
                     </div>
                     <div className="flex flex-wrap gap-4">
                        <div className="flex-1 flex items-end gap-2 min-w-[200px]">
                            <span>STATE</span>
                            <select 
                                className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2 appearance-none"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="" className="text-gray-400">Select State</option>
                                {indianStates.map((state) => (
                                    <option key={state} value={state}>{state.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1 flex items-end gap-2 min-w-[200px]">
                            <span>PIN</span>
                            <input type="text" className="w-full border-b-2 border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-navy-900 uppercase font-medium px-2" />
                        </div>
                     </div>
                 </div>

                 <div className="flex flex-col md:flex-row md:items-center gap-4">
                     <span className="whitespace-nowrap">4. MOBILE NUMBER</span>
                     <div className="flex gap-1 overflow-x-auto pb-2 md:pb-0">
                        {[...Array(10)].map((_, i) => (
                             <input key={i} type="text" maxLength={1} className="w-10 h-12 border border-gray-400 text-center bg-white text-xl" />
                        ))}
                     </div>
                 </div>

                 <div className="flex flex-col gap-4">
                     <div className="flex flex-col md:flex-row md:items-end gap-2">
                        <span className="whitespace-nowrap">5. MAJOR COMMODITY</span>
                        <input type="text" className="w-full border border-gray-400 h-10 bg-white px-2 uppercase font-medium" />
                     </div>
                     <input type="text" className="w-full border border-gray-400 h-10 bg-white px-2 uppercase font-medium" />
                 </div>

                 <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <span className="whitespace-nowrap">6. TYPE OF BUSINESS</span>
                     <div className="flex items-center gap-8">
                         <label className="flex items-center gap-3 cursor-pointer">
                             <span>WHOLESALE</span>
                             <div className="w-24 h-10 border border-gray-400 bg-white flex items-center justify-center">
                                 <input type="checkbox" className="w-6 h-6" />
                             </div>
                         </label>
                         <label className="flex items-center gap-3 cursor-pointer">
                             <span>RETAIL</span>
                             <div className="w-24 h-10 border border-gray-400 bg-white flex items-center justify-center">
                                <input type="checkbox" className="w-6 h-6" />
                             </div>
                         </label>
                     </div>
                 </div>

                 <div className="flex flex-col md:flex-row md:items-center gap-4">
                     <span className="whitespace-nowrap">7. GST No :</span>
                     <div className="flex gap-1 overflow-x-auto pb-2 md:pb-0">
                        {[...Array(15)].map((_, i) => (
                             <input key={i} type="text" maxLength={1} className="w-8 h-10 border border-gray-400 text-center bg-white" />
                        ))}
                     </div>
                 </div>

                 <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="whitespace-nowrap">8. EMAIL ID :</span>
                    <input type="email" className="w-full border border-gray-400 h-10 bg-white px-2 font-medium" />
                 </div>
             </form>
        </div>

        <div className="px-8 md:px-16 pb-16 pt-8 flex flex-col md:flex-row justify-between items-end gap-8 font-bold text-navy-900 text-lg">
             <div>
                 MEMBERSHIP FEE &nbsp;&nbsp; RS. 3,000/-
             </div>
             <div className="text-center w-full md:w-auto">
                 <div className="h-24 w-48 border-b-2 border-navy-900 mx-auto"></div> 
                 <div className="mt-2">SEAL & SIGN</div>
             </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-8 flex justify-center gap-4 print:hidden px-4">
          <button className="bg-navy-900 text-white px-8 py-3 rounded font-bold hover:bg-navy-900 shadow-lg" onClick={() => window.print()}>
             Print Form
          </button>
          <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded font-bold hover:bg-gold-400 shadow-lg">
             Submit Application
          </button>
      </div>
    </div>
  );
};

export default MembershipRegistration;