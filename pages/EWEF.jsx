import React from "react";
import { SectionTitle } from "../components/UI";
import {
  Users,
  Zap,
  Target,
  ArrowRight,
  Globe,
  Smartphone,
  Landmark,
  Star,
  Rocket,
  Award,
  Heart,
} from "lucide-react";

const EWEF = () => {
  return (
    <div className="bg-white font-sans">
      {/* 1. BLACK HEADER STRIP */}
      <div className="bg-black text-white text-center py-4 md:py-6 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide uppercase">
          Emerging Women Entrepreneurs Forum (EWEF)
        </h1>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E1] min-h-[85vh] flex flex-col items-center pt-12 pb-0 border-x-[12px] border-b-[12px] border-[#DC2626] box-border border-t-0">
        {/* Background Sunburst */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#fff_0%,_#ffecb3_40%,_#ffe0b2_100%)] opacity-60"></div>
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg,_transparent_0deg,_transparent_2deg,_rgba(255,165,0,0.03)_2deg,_rgba(255,165,0,0.03)_4deg)] animate-[spin_60s_linear_infinite]"></div>
        </div>

        {/* EWEF Logo Top Right */}
        <div className="absolute top-8 right-8 z-30 hidden md:block">
          <div className="bg-pink-50/90 px-6 py-4 rounded-xl shadow-lg border border-pink-200 flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="text-4xl font-thin text-slate-800 tracking-[0.2em] mb-1">
              EWEF
            </div>
            <div className="h-px w-full bg-pink-400 mb-1"></div>
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest text-center">
              Emerging Women
              <br />
              Entrepreneur Forum
            </span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-4 h-full">
          {/* FTII Logo */}
          <div className="mb-6 relative transform scale-75 md:scale-100 lg:scale-110 origin-center transition-transform">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 border-[6px] border-white">
              <div className="absolute inset-0 rounded-full border-[12px] md:border-[16px] border-[#1e3a8a] shadow-inner"></div>
              <div className="absolute inset-0 z-20 flex items-center justify-between px-3">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="relative z-20 flex flex-col items-center justify-center bg-white w-20 h-20 md:w-24 md:h-24 rounded-full shadow-sm pt-2">
                <span className="font-serif font-black text-2xl md:text-4xl text-[#DC2626] tracking-tighter">
                  AITIF
                </span>
              </div>
              {/* Spinning Text */}
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
                    All India Trade and Industries Forum
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Title Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#5D2E18] mb-8 tracking-wide leading-tight uppercase drop-shadow-sm max-w-6xl mx-auto px-2 break-words">
            All India Trade and Industries Forum
          </h1>

          {/* Green Banner */}
          <div className="bg-[#047857] text-white px-6 py-3 md:px-16 lg:px-24 md:py-4 text-sm sm:text-lg md:text-3xl font-bold tracking-widest uppercase shadow-lg mb-12 w-auto inline-block transform -skew-x-12 mx-2 max-w-[95vw]">
            <div className="transform skew-x-12 flex flex-wrap justify-center gap-x-3 md:gap-x-8 text-center whitespace-normal">
              <span>Promoting</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>Protecting</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>Progressing</span>
            </div>
          </div>

          {/* Logos Section */}
          <div className="w-full max-w-4xl flex flex-col items-center gap-8 mb-24 md:mb-12 relative z-20">
            {/* Row 1: Big Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 pb-6 border-b border-gray-300/50 w-full">
              {/* G20 */}
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
              <div className="h-16 w-px bg-gray-400/50 hidden md:block"></div>
              {/* B20 */}
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
                  <div className="text-[6px] text-gray-500 leading-none mt-0.5">
                    Responsible, Accelerated,
                    <br />
                    Innovative, Sustainable
                  </div>
                </div>
              </div>
              <div className="h-16 w-px bg-gray-400/50 hidden md:block"></div>
              {/* Azadi */}
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

            {/* Row 2: Small Logos Strip */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full opacity-90 grayscale hover:grayscale-0 transition-all duration-500 px-2">
              <div className="flex items-center gap-2">
                <Smartphone className="text-blue-600 w-6 h-6" />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-gray-800">
                    Digital India
                  </span>
                  <span className="text-[8px] text-gray-500">
                    Power To Empower
                  </span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-orange-500 border-dashed animate-spin-slow"></div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-blue-900 uppercase">
                    Invest India
                  </span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-gray-600" />
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] font-bold text-gray-800">
                    Ministry of Commerce
                  </span>
                  <span className="text-[7px] text-gray-500">
                    Govt. of India
                  </span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <div className="bg-red-800 text-white text-[10px] font-bold px-1 py-0.5">
                  ODOP
                </div>
                <span className="text-[8px] font-bold text-gray-800 max-w-[50px] leading-none">
                  One District One Product
                </span>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <div className="text-center leading-none">
                  <span className="text-[10px] text-blue-800 font-bold">
                    <span className="text-orange-500">PM</span> GatiShakti
                  </span>
                  <br />
                  <span className="text-[6px] text-gray-500">
                    National Master Plan
                  </span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-gray-800">
                    GeM
                  </span>
                  <span className="text-[7px] text-gray-500">
                    Govt eMarketplace
                  </span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-orange-500" />
                <span className="text-[10px] font-bold text-gray-800">
                  #startupindia
                </span>
              </div>
            </div>
          </div>

          {/* Person Image (Woman) */}
          <div className="hidden lg:block absolute bottom-0 right-0 z-30 pointer-events-none">
            <div className="relative h-[450px] xl:h-[550px] w-[350px] xl:w-[400px]">
              {/* Person Placeholder - Professional Woman */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="EWEF Leader"
                className="h-full w-full object-cover object-top mask-image-b"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Empowering Women in Business"
          subtitle="Leading with resilience, innovation, and vision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="prose prose-lg text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Emerging Women Entrepreneurs Forum (EWEF)</strong> is
              a pivotal wing of FTII, dedicated to nurturing and empowering
              women entrepreneurs across India. We believe that economic
              independence for women is the cornerstone of a developed nation.
            </p>
            <p className="mb-4">
              EWEF focuses on policy advocacy for women-led businesses, easing
              access to capital, and providing specialized mentorship programs.
              We bridge the gap between aspiring women entrepreneurs and
              established industry leaders.
            </p>
            <p className="mb-4">
              From navigating government schemes to digital literacy workshops,
              EWEF provides a comprehensive support system. We celebrate the
              achievements of women who have broken glass ceilings and are
              paving the way for future generations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 border-l-4 border-pink-600 rounded hover:shadow-md transition-shadow">
                <span className="block text-3xl font-bold text-pink-900 mb-1">
                  30%
                </span>
                <span className="text-sm text-pink-800 uppercase font-bold">
                  Women in Biz
                </span>
              </div>
              <div className="bg-purple-50 p-4 border-l-4 border-purple-600 rounded hover:shadow-md transition-shadow">
                <span className="block text-3xl font-bold text-purple-900 mb-1">
                  Global
                </span>
                <span className="text-xs text-purple-800 uppercase font-bold">
                  Network Access
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Visuals */}
          <div className="space-y-8 sticky top-24">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Women Network"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl leading-snug">
                  "When women succeed, nations prosper."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-pink-500 hover:-translate-y-2 transition-transform">
            <Heart className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Mentorship Programs
            </h3>
            <p className="text-slate-600">
              Connecting aspiring entrepreneurs with seasoned women leaders for
              guidance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 hover:-translate-y-2 transition-transform">
            <Award className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Awards & Recognition
            </h3>
            <p className="text-slate-600">
              Annual awards celebrating excellence in women-led enterprises.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 hover:-translate-y-2 transition-transform">
            <Globe className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Global Trade
            </h3>
            <p className="text-slate-600">
              Facilitating participation in international trade fairs and
              delegations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EWEF;
