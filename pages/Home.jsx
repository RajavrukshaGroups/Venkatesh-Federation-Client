import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  Zap,
  Award,
  CheckCircle,
  Landmark,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Globe,
  Smartphone,
  Star,
  Rocket,
} from "lucide-react";

const Home = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      <section className="relative w-full overflow-hidden bg-[#FFF8E1] min-h-[85vh] flex flex-col items-center pt-12 pb-0 border-[12px] border-[#DC2626] box-border">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#fff_0%,_#ffecb3_40%,_#ffe0b2_100%)] opacity-60"></div>
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg,_transparent_0deg,_transparent_2deg,_rgba(255,165,0,0.03)_2deg,_rgba(255,165,0,0.03)_4deg)] animate-[spin_60s_linear_infinite]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-4 h-full">
          <div className="mb-6 relative transform scale-75 md:scale-100 lg:scale-110 origin-center transition-transform">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 border-[6px] border-white">
              <div className="absolute inset-0 rounded-full border-[12px] md:border-[16px] border-[#1e3a8a] shadow-inner"></div>
              <div className="relative z-20 flex flex-col items-center justify-center bg-white w-20 h-20 md:w-24 md:h-24 rounded-full shadow-sm pt-2">
                <span className="font-serif font-black text-2xl md:text-4xl text-[#DC2626] tracking-tighter">
                  FTII
                </span>
              </div>
              <svg
                className="absolute w-full h-full pointer-events-none z-30 animate-[spin_40s_linear_infinite_reverse]"
                viewBox="0 0 100 100"
              >
                <path
                  id="curve"
                  d="M 14 50 A 36 36 0 1 1 86 50"
                  fill="transparent"
                />
                <text className="text-[4px] font-bold fill-white uppercase tracking-widest opacity-90">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    FEDERATION OF TRADE AND INDUSTRY OF INDIA
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#5D2E18] mb-8 tracking-wide leading-tight uppercase drop-shadow-sm max-w-6xl mx-auto px-2 break-words">
            Federation of Trade and <br className="hidden lg:block" /> Industry
            of India
          </h1>

          <div className="bg-[#047857] text-white px-6 py-3 md:px-16 lg:px-24 md:py-4 text-sm sm:text-lg md:text-3xl font-bold tracking-widest uppercase shadow-lg mb-12 w-auto inline-block transform -skew-x-12 mx-2 max-w-[95vw]">
            <div className="transform skew-x-12 flex flex-wrap justify-center gap-x-3 md:gap-x-8 text-center whitespace-normal">
              <span>Promoting</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>Protecting</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>Progressing</span>
            </div>
          </div>

          <div className="w-full max-w-4xl flex flex-col items-center gap-8 mb-24 md:mb-12 relative z-20">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 pb-6 border-b border-gray-300/50 w-full">
              <div className="flex flex-col items-center transform scale-75 md:scale-100">
                <div className="flex items-center">
                  <span className="text-5xl md:text-6xl font-bold text-[#FF671F]">
                    G2
                  </span>
                  <Globe className="w-10 h-10 md:w-12 md:h-12 text-[#2B328C] mx-1" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#2B328C] mt-1 border-t-2 border-[#2B328C] w-full text-center">
                  BHARAT 2023 INDIA
                </span>
              </div>

              <div className="flex flex-col items-center transform scale-75 md:scale-100">
                <div className="flex items-center">
                  <span className="text-5xl md:text-6xl font-bold text-[#2B328C]">
                    B2
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#FF671F] flex items-center justify-center mx-1 bg-white relative overflow-hidden">
                    <div className="w-full h-full bg-[#138808] opacity-20 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-center text-[#2B328C] leading-tight mt-1">
                  <span>BHARAT 2023 INDIA</span>
                </div>
              </div>

              <div className="flex flex-col items-center transform scale-75 md:scale-100">
                <div className="relative">
                  <span className="text-5xl md:text-6xl font-bold text-[#FF671F]">
                    75
                  </span>
                </div>
                <div className="text-center leading-none mt-1">
                  <span className="text-xs font-bold text-black block">
                    Azadi Ka
                  </span>
                  <span className="text-xs font-bold text-black block">
                    Amrit Mahotsav
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full opacity-90 grayscale hover:grayscale-0 transition-all duration-500 px-2">
              <div className="flex items-center gap-2">
                <Smartphone className="text-blue-600 w-6 h-6" />
                <span className="text-[10px] font-bold text-gray-800">
                  Digital India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-gray-600" />
                <span className="text-[9px] font-bold text-gray-800">
                  Ministry of Commerce
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-[10px] font-bold text-gray-800">GeM</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-orange-500" />
                <span className="text-[10px] font-bold text-gray-800">
                  #startupindia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-7/12">
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-8 h-1 bg-gold-500 rounded-full"></span>
                  <span className="text-gold-600 font-bold tracking-widest uppercase text-xs">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">
                  Welcome to <span className="text-blue-700">FTII</span>
                </h2>
                <p className="text-lg font-medium text-slate-500">
                  The Premier Voice of India's Trade & Industry
                </p>
              </div>

              <div className="prose prose-lg text-slate-600 text-justify leading-relaxed">
                <p className="text-xl font-medium text-navy-900 mb-6 border-l-4 border-gold-500 pl-6 py-2 italic bg-gray-50 rounded-r-lg">
                  "Our mission is to promote economic growth, job creation, and
                  entrepreneurship in the country."
                </p>
                <p className="mb-6">
                  At FTII, we understand the challenges faced by businesses in
                  today’s rapidly changing economy.
                </p>
                <div className="flex flex-wrap gap-4 mt-10">
                  <Link
                    to="/membership"
                    className="bg-navy-900 text-white px-8 py-4 rounded shadow-lg hover:bg-blue-800 transition-all flex items-center gap-2 group"
                  >
                    <Briefcase size={18} />
                    <span className="font-semibold">Become a Member</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
