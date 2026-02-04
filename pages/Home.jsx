import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  Zap,
  Award,
  Landmark,
  ArrowRight,
  Smartphone,
  Star,
  Rocket,
  Quote,
  UserCircle,
  CheckCircle,
  TrendingUp,
  Shield,
  Handshake,
  Building,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import MakeInIndia from "../assets/makeinindia.webp";
import azadi from "../assets/azadi.webp";
import tradeconnect from "../assets/tradeconnect.webp";
import bhaskarbharath from "../assets/bhaskarbharath.webp";
import odop from "../assets/odop.jpg";
import gatishakti from "../assets/gatishakti.png";
import forumLogo from "../assets/AITIF_new_logo.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const bulletAnimation = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const lineAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const iconAnimation = {
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const Home = () => {
  const initiatives = [
    {
      title: "Make in India",
      desc: "Encouraging manufacturing, innovation, and investment to boost India's industrial growth.",
      img: MakeInIndia,
      color: "border-[#0099ff]",
    },
    {
      title: "Azadi Ka Amrit Mahotsav",
      desc: "Celebrating 75+ years of independence through nation-building and economic empowerment.",
      img: azadi,
      color: "border-[#ff9933]",
    },
    {
      title: "Trade Connect",
      desc: "Strengthening domestic and global trade linkages for Indian businesses.",
      img: tradeconnect,
      color: "border-[#0047ab]",
    },
    {
      title: "Bharat Shreshtha Bharat",
      desc: "Promoting unity, cultural exchange, and economic collaboration across states.",
      img: bhaskarbharath,
      color: "border-[#138808]",
    },
    {
      title: "One District One Product",
      desc: "Promoting unique district-level products to support local industries and exports.",
      img: odop,
      color: "border-[#e11d48]",
    },
    {
      title: "PM Gati Shakti",
      desc: "A national master plan for integrated infrastructure and multi-modal connectivity.",
      img: gatishakti,
      color: "border-[#3b82f6]",
    },
  ];

  const whatWeDoItems = [
    {
      icon: Shield,
      text: "Policy representation & advocacy",
      description:
        "Acting as the voice of industry in policy-making processes and regulatory discussions.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      delay: 0,
    },
    {
      icon: Building,
      text: "Business facilitation & compliance support",
      description:
        "Providing guidance on regulatory requirements and simplifying business operations.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      delay: 0.1,
    },
    {
      icon: TrendingUp,
      text: "MSME & startup empowerment",
      description:
        "Supporting small businesses with resources, mentoring, and growth opportunities.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      delay: 0.2,
    },
    {
      icon: Target,
      text: "Trade awareness & capacity building",
      description:
        "Organizing workshops, training programs, and knowledge-sharing sessions for members.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      delay: 0.3,
    },
    {
      icon: Handshake,
      text: "Industry-government coordination",
      description:
        "Bridging communication between businesses and government agencies for mutual growth.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      delay: 0.4,
    },
    {
      icon: Users,
      text: "National & international trade partnerships",
      description:
        "Facilitating business connections and trade opportunities across borders.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      delay: 0.5,
    },
    {
      icon: Award,
      text: "Quality standards & certification support",
      description:
        "Assisting businesses in meeting quality benchmarks and obtaining necessary certifications.",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      delay: 0.6,
    },
    {
      icon: Zap,
      text: "Digital transformation initiatives",
      description:
        "Promoting technology adoption and digital solutions for modern business needs.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      delay: 0.7,
    },
  ];

  return (
    <div className="bg-white font-sans text-black-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-[#FFF8E1] min-h-[85vh] flex flex-col items-center pt-12 pb-0 border-[12px] border-[#DC2626] box-border">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#fff_0%,_#ffecb3_40%,_#ffe0b2_100%)] opacity-60"></div>
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg,_transparent_0deg,_transparent_2deg,_rgba(255,165,0,0.03)_2deg,_rgba(255,165,0,0.03)_4deg)] animate-[spin_60s_linear_infinite]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-4 overflow-hidden">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-[#5D2E18] mb-8 uppercase leading-tight px-4"
          >
            All India Trade and <br className="hidden lg:block" /> Industries
            Forum
          </motion.h1>

          {/* Tagline - Fixed Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full px-4 mb-12"
          >
            <div className="bg-[#047857] text-white px-6 py-4 font-bold uppercase tracking-widest shadow-lg rounded-lg max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative group"
                >
                  <span className="text-lg sm:text-xl md:text-2xl">
                    Empowering Trade
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>

                <div className="hidden sm:block">
                  <span className="text-yellow-300">•</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="relative group"
                >
                  <span className="text-lg sm:text-xl md:text-2xl">
                    Strengthening Industry
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>

                <div className="hidden sm:block">
                  <span className="text-yellow-300">•</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="relative group"
                >
                  <span className="text-lg sm:text-xl md:text-2xl">
                    Driving Growth
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              </div>

              {/* Mobile Version - Stacked */}
              <div className="sm:hidden mt-2">
                <div className="flex justify-center items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= GOVERNMENT INITIATIVES - 3 TOP, 3 BOTTOM ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-6xl mx-auto px-4 mb-16"
          >
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 text-center">
                Supporting National Initiatives
              </h3>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Aligning with Government of India's flagship programs to empower
                trade, boost industry, and drive economic growth across the
                nation.
              </p>
            </div>

            {/* Top Row - 3 Initiatives */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {initiatives.slice(0, 3).map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`rounded-xl p-6 border-t-4 ${item.color} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <div className="w-30 h-24 mb-4 flex items-center justify-center rounded-lg p-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - 3 Initiatives */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initiatives.slice(3, 6).map((item, index) => (
                <motion.div
                  key={index + 3}
                  variants={fadeUp}
                  className={`rounded-xl p-6 border-t-4 ${item.color} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <div className="w-30 h-24 mb-4 flex items-center justify-center rounded-lg p-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PRESIDENT'S MESSAGE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-sm font-bold tracking-widest uppercase text-blue-800">
                Leadership Message
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Message from the President
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading India's trade and industry towards a prosperous future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* President Photo & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  {/* President Photo Placeholder */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-amber-50 border-4 border-white shadow-lg mb-6 flex items-center justify-center">
                    <UserCircle className="w-32 h-32 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    C VENKATESH{" "}
                  </h3>
                  <p className="text-blue-700 font-semibold mb-1">President</p>
                  <p className="text-sm text-gray-600 mb-4">
                    All India Trade and Industries Forum
                  </p>

                  <div className="w-full border-t border-gray-200 pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        <span>25+ Years Industry Experience</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-green-600" />
                        <span>Advocate for MSME & Trade Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* President Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    "Building a Self-Reliant India Through Trade & Industry"
                  </h3>
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong>Dear Members & Well-wishers,</strong>
                  </p>

                  <p>
                    It gives me immense pleasure to welcome you to the{" "}
                    <strong>
                      All India Trade and Industries Forum (AITIF)
                    </strong>
                    . As we navigate through an era of unprecedented economic
                    transformation, our forum stands as a beacon of hope,
                    guidance, and collective strength for traders and
                    industrialists across the nation.
                  </p>

                  <p>
                    India is on a remarkable journey towards becoming a $5
                    trillion economy, and the role of our trade and industry
                    sector has never been more crucial. At AITIF, we are
                    committed to creating an ecosystem where every business—from
                    a small retailer to a large manufacturer—can thrive,
                    innovate, and contribute to national growth.
                  </p>

                  <p>
                    Our vision extends beyond mere advocacy. We are building
                    bridges between government policies and ground realities,
                    ensuring that regulations empower rather than impede growth.
                    Through strategic partnerships, capacity-building programs,
                    and policy interventions, we are shaping a business-friendly
                    environment that fosters entrepreneurship and job creation.
                  </p>

                  <p>
                    I invite each one of you to join us in this transformative
                    journey. Together, we can build a stronger, more resilient,
                    and self-reliant India where trade and industry become the
                    cornerstone of our nation's prosperity.
                  </p>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-right">
                      <strong>With warm regards,</strong>
                      <br />
                      <span className="text-blue-700 font-semibold">
                        C Venkatesh
                      </span>
                      <br />
                      <span className="text-sm text-gray-600">President</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                  Who We Are
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mt-3">
                  Welcome to{" "}
                  <span className="text-blue-700">
                    All India Trade and Industries Forum
                  </span>
                </h2>
                <p className="text-lg text-slate-500 mt-3">
                  The Premier Voice of India's Trade & Industry
                </p>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="prose prose-lg text-slate-600 text-justify leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-medium text-navy-900 mb-6 border-l-4 border-gold-500 pl-6 py-2 italic bg-gray-50 rounded-r-lg"
                >
                  "Our mission is to promote economic growth, job creation, and
                  entrepreneurship across the nation."
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6"
                >
                  The{" "}
                  <strong>All India Trade and Industries Forum (AITIF)</strong>{" "}
                  is a national, non-profit organization committed to
                  strengthening India's trade, commerce, and industrial
                  ecosystem. The forum represents traders, entrepreneurs, MSMEs,
                  startups, manufacturers, and service providers from across the
                  country.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6"
                >
                  AITIF acts as a unified platform connecting businesses with
                  policymakers and regulatory bodies, ensuring that industry
                  concerns are effectively represented. The forum actively works
                  on policy advocacy, regulatory simplification, business
                  facilitation, and capacity building.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6"
                >
                  Through collaboration with government departments, financial
                  institutions, and industry leaders, AITIF contributes to
                  innovation, investment, employment generation, and inclusive
                  economic development across India.
                </motion.p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 bg-gray-50 border rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Nationwide Network
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Presence across multiple states representing diverse trade
                      and industry sectors.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 bg-gray-50 border rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Policy Advocacy
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Active engagement with government bodies to represent
                      business interests.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 bg-gray-50 border rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Business Enablement
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Support through facilitation, awareness, and capacity
                      building initiatives.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 bg-gray-50 border rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Trusted Representation
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Recognized platform for ethical, credible, and inclusive
                      industry representation.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* OUR REACH SECTION - MOVED HERE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-14"
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1e3a8a]">
                    <Landmark className="w-5 h-5 text-red-500" />
                    Our Reach
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* States */}
                    <div className="border rounded-lg p-4 text-center hover:shadow-sm transition">
                      <p className="text-3xl font-bold text-red-600">20+</p>
                      <p className="text-xs uppercase tracking-wide mt-1 text-gray-600">
                        States Covered
                      </p>
                    </div>

                    {/* Members */}
                    <div className="border rounded-lg p-4 text-center hover:shadow-sm transition">
                      <p className="text-3xl font-bold text-red-600">10K+</p>
                      <p className="text-xs uppercase tracking-wide mt-1 text-gray-600">
                        Active Members
                      </p>
                    </div>

                    {/* Industries */}
                    <div className="border rounded-lg p-4 text-center hover:shadow-sm transition">
                      <p className="text-3xl font-bold text-red-600">50+</p>
                      <p className="text-xs uppercase tracking-wide mt-1 text-gray-600">
                        Industry Sectors
                      </p>
                    </div>

                    {/* Presence */}
                    <div className="border rounded-lg p-4 text-center hover:shadow-sm transition">
                      <p className="text-2xl font-bold text-red-600">
                        Pan India
                      </p>
                      <p className="text-xs uppercase tracking-wide mt-1 text-gray-600">
                        National Presence
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-14"
              >
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded shadow-lg hover:bg-blue-800 transition-all group"
                >
                  <Briefcase size={18} />
                  <span className="font-semibold">Become a Member</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="lg:col-span-4 space-y-8">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border-l-4 border-blue-700 p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To build a strong, inclusive, and self-reliant business
                  ecosystem by empowering traders and industries as key
                  contributors to India's economic growth.
                </p>
              </motion.div>

              {/* ANIMATED "WHAT WE DO" SECTION WITH PARALLAX EFFECT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              >
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-100 rounded-full opacity-20"></div>

                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 text-blue-600 animate-pulse" />
                  What We Do
                </h3>

                <motion.div
                  className="space-y-4 relative z-10"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {whatWeDoItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={bulletAnimation}
                      custom={index}
                      className="flex items-start gap-3 group cursor-pointer"
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Animated Bullet Point */}
                      <motion.div
                        variants={iconAnimation}
                        className={`flex-shrink-0 w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </motion.div>

                      {/* Text Content with Two Lines */}
                      <div className="flex-1">
                        <motion.p
                          className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
                          variants={bulletAnimation}
                        >
                          {item.text}
                        </motion.p>
                        <motion.p
                          className="text-xs text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300"
                          variants={bulletAnimation}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: item.delay + 0.1 }}
                        >
                          {item.description}
                        </motion.p>
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-2"
                          variants={lineAnimation}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: item.delay + 0.3 }}
                        />
                      </div>

                      {/* Check Mark on Hover */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="flex-shrink-0 ml-2"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Animation Effect */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-30"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-1/3 left-6 w-1.5 h-1.5 bg-red-400 rounded-full opacity-30"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
