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
} from "lucide-react";

const YLF = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section Recreating the Image */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E1] min-h-[85vh] flex flex-col items-center pt-12 pb-0 border-[12px] border-[#DC2626] box-border">
        {/* Background Sunburst */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#fff_0%,_#ffecb3_40%,_#ffe0b2_100%)] opacity-60"></div>
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg,_transparent_0deg,_transparent_2deg,_rgba(255,165,0,0.03)_2deg,_rgba(255,165,0,0.03)_4deg)] animate-[spin_60s_linear_infinite]"></div>
        </div>

        {/* YLF Logo Top Right */}
        <div className="absolute top-8 right-8 z-30 hidden md:block">
          <div className="bg-white/80 px-4 py-3 rounded-xl shadow-sm backdrop-blur-sm border border-pink-100 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center">
              <Users size={24} className="text-pink-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-pink-900 font-bold uppercase leading-none tracking-widest">
                Young Leaders
              </span>
              <span className="text-xs text-pink-900 font-bold uppercase leading-none tracking-widest">
                Forum
              </span>
            </div>
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
                    All India Trade and Industries Forum
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Title Text - Responsive Font Sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#5D2E18] mb-8 tracking-wide leading-tight uppercase drop-shadow-sm max-w-6xl mx-auto px-2 break-words">
            All India Trade and Industries Forum
          </h1>

          {/* Green Banner - Flexible Layout */}
          <div className="bg-[#047857] text-white px-6 py-3 md:px-16 lg:px-24 md:py-4 text-sm sm:text-lg md:text-3xl font-bold tracking-widest uppercase shadow-lg mb-12 w-auto inline-block transform -skew-x-12 mx-2 max-w-[95vw]">
            <div className="transform skew-x-12 flex flex-wrap justify-center gap-x-3 md:gap-x-8 text-center whitespace-normal">
              <span>Promoting</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>Protecting</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>Progressing</span>
            </div>
          </div>

          {/* Logos Section - Two Rows */}
          <div className="w-full max-w-4xl flex flex-col items-center gap-8 mb-24 md:mb-12 relative z-20">
            {/* Row 1: Big Logos (G20, B20, Azadi) */}
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

            {/* Row 2: Small Logos Strip - Scrollable on mobile if needed */}
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

          {/* Person Image - Adjust positioning to prevent overlap on smaller screens */}
          <div className="hidden lg:block absolute bottom-0 right-0 z-30 pointer-events-none">
            <div className="relative h-[450px] xl:h-[550px] w-[350px] xl:w-[400px]">
              {/* Person Placeholder - Indian Corporate Look */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="YLF Leader"
                className="h-full w-full object-cover object-top mask-image-b"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
              {/* Award Graphic Simulation */}
              <div className="absolute bottom-1/4 left-0 transform -translate-x-4 rotate-[-5deg]">
                <div className="w-28 h-36 bg-gradient-to-br from-[#DAA520] via-[#FFD700] to-[#B8860B] rounded-lg shadow-2xl border-4 border-[#FFF8DC] flex flex-col items-center justify-center text-center p-2 relative overflow-hidden group">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/30 skew-x-12 translate-x-[-150%] animate-[shimmer_2s_infinite]"></div>

                  <span className="text-[8px] font-bold text-amber-900 tracking-widest">
                    INDIA'S
                  </span>
                  <span className="text-2xl font-black text-amber-900 leading-none my-1">
                    TOP
                  </span>
                  <span className="text-[8px] font-bold text-amber-900 tracking-tighter">
                    100 BRANDS
                  </span>
                  <div className="w-full h-px bg-amber-800/50 my-1"></div>
                  <span className="text-lg font-bold text-white drop-shadow-md">
                    2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Young Leaders Forum"
          subtitle="Cultivating the next generation of business icons."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="prose prose-lg text-slate-600 text-justify">
            <p className="mb-4">
              The <strong>Young Leaders Forum (YLF)</strong> is a platform
              created by the All India Trade and Industries Forum for young
              entrepreneurs and professionals to engage in discussions and
              activities related to business, innovation, and leadership.
            </p>
            <p className="mb-4">
              The FTII aims to provide a space for young leaders to network,
              learn from each other, promoting entrepreneurship and innovation,
              and contribute to the growth of the Indian economy. It also serves
              as a bridge between the older generation of business leaders and
              the younger generation, facilitating knowledge transfer and
              mentorship.
            </p>
            <p className="mb-4">
              In addition, the FTII seeks to create opportunities for young
              leaders to engage with policymakers, industry experts, and other
              stakeholders, both domestically and internationally. Through these
              interactions, members of the YLF can gain valuable insights into
              global trends and best practices, which they can apply to their
              own businesses and careers.
            </p>
            <p className="mb-4">
              One of the flagship annual programs of the FTII is the Young
              Entrepreneurship Award, which recognizes and rewards young
              entrepreneurs who have demonstrated exceptional innovation and
              leadership in their businesses.
            </p>
            <p className="mb-4">
              Joining to YLF chapter is open to young professionals and
              entrepreneurs between the ages of 21 and 45 who are members of
              FTII.
            </p>
            <p className="mb-4">
              The YLF will be instrumental in advocating for policies that
              support the growth of SMEs and promote entrepreneurship as a
              viable career option. By providing a platform for young leaders to
              engage with policymakers, industry experts, and other
              stakeholders, the FTII is helping to shape the discourse around
              entrepreneurship and innovation in India. The FTII has very high
              expectations from young leaders who can take challenges and
              opportunities to create more dynamic and inclusive ecosystem for
              entrepreneurship and innovation in India.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 border-l-4 border-navy-900 rounded hover:shadow-md transition-shadow">
                <span className="block text-3xl font-bold text-navy-900 mb-1">
                  21-45
                </span>
                <span className="text-sm text-gray-500 uppercase font-bold">
                  Age Group
                </span>
              </div>
              <div className="bg-slate-50 p-4 border-l-4 border-gold-500 rounded hover:shadow-md transition-shadow">
                <span className="block text-3xl font-bold text-navy-900 mb-1">
                  YEA
                </span>
                <span className="text-xs text-gray-500 uppercase font-bold">
                  Young Entrepreneurship Award
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Visuals */}
          <div className="space-y-8 sticky top-24">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Networking Event"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-gold-400 font-bold text-sm uppercase tracking-wider mb-2">
                    Connect • Collaborate • Create
                  </p>
                  <p className="text-white font-bold text-xl leading-snug">
                    "Networking is the net worth of the future."
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-gold-50 p-6 rounded-xl border-l-4 border-gold-500 shadow-md">
              <p className="italic text-navy-800 font-serif text-lg leading-relaxed">
                "We are instrumental in advocating for policies that support the
                growth of SMEs and promote entrepreneurship as a viable career
                option."
              </p>
            </div>
          </div>
        </div>

        {/* Initiatives */}
        <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-20 -mt-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-center mb-12 text-gold-400">
              YLF Key Initiatives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Startup Incubation",
                  desc: "Providing seed funding guidance and workspace for budding startups.",
                  icon: Zap,
                },
                {
                  title: "Policy Advocacy",
                  desc: "Representing youth interests in national trade policies.",
                  icon: Target,
                },
                {
                  title: "Global Delegations",
                  desc: "Organizing study tours to Silicon Valley, Europe, and Asia.",
                  icon: Users,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-gold-500">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gold-500 text-navy-900 px-10 py-4 rounded-full font-bold hover:bg-gold-400 transition-colors inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                Join YLF Today <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YLF;
