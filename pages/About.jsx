// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Target,
//   Users,
//   Shield,
//   TrendingUp,
//   Globe,
//   Award,
//   Building,
// } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const fadeRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//   },
// };

// const About = () => {
//   const coreValues = [
//     {
//       icon: Shield,
//       title: "Integrity",
//       description:
//         "Maintaining highest ethical standards in all activities and representations.",
//       color: "text-blue-700",
//       bgColor: "bg-blue-50",
//     },
//     {
//       icon: Target,
//       title: "Excellence",
//       description:
//         "Striving for superior performance and setting industry benchmarks.",
//       color: "text-red-600",
//       bgColor: "bg-red-50",
//     },
//     {
//       icon: Users,
//       title: "Inclusivity",
//       description:
//         "Representing businesses of all sizes, sectors, and regions across India.",
//       color: "text-blue-700",
//       bgColor: "bg-blue-50",
//     },
//     {
//       icon: TrendingUp,
//       title: "Innovation",
//       description:
//         "Embracing change and fostering innovative business solutions.",
//       color: "text-red-600",
//       bgColor: "bg-red-50",
//     },
//   ];

//   return (
//     <div className="bg-white font-sans min-h-screen">
//       {/* ================= HEADER ================= */}
//       <section className="relative py-24 bg-gradient-to-b from-[#fff4cc] via-[#fff1bf] to-[#ffedb3] overflow-hidden">
//         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_60%)]" />

//         <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-3 mb-4">
//               <div className="w-12 h-1 bg-red-600 rounded-full" />
//               <span className="text-blue-800 font-bold tracking-widest text-sm uppercase">
//                 About Organization
//               </span>
//               <div className="w-12 h-1 bg-red-600 rounded-full" />
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold text-[#5D2E18] mb-6">
//               About All India Trade and <br className="hidden md:block" />
//               Industries Forum
//             </h1>

//             <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//               The premier national platform representing India's trade and
//               industry ecosystem through advocacy, empowerment, and strategic
//               partnerships.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
//         {/* Who We Are - Fades in from left */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeLeft}
//           className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border mb-16"
//         >
//           <div className="flex items-start gap-4 mb-8">
//             <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
//               <Building className="w-8 h-8 text-blue-700" />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 Who We Are
//               </h2>
//               <div className="w-20 h-1 bg-red-600" />
//             </div>
//           </div>

//           <p className="text-gray-700 text-lg mb-4">
//             <strong>All India Trade and Industries Forum (AITIF)</strong> is a
//             national, non-profit organization dedicated to strengthening
//             India's trade, commerce, and industrial ecosystem.
//           </p>

//           <p className="text-gray-700 text-lg">
//             We act as a strategic bridge between industry and government,
//             ensuring effective policy representation and sustainable economic
//             development.
//           </p>
//         </motion.div>

//         {/* Mission & Vision - Alternating animations */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeRight}
//             className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border shadow-lg"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-gray-900">
//               Our Mission
//             </h3>
//             <p className="text-gray-700">
//               To promote economic growth, entrepreneurship, and employment by
//               empowering businesses and advocating progressive trade policies.
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeLeft}
//             className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border shadow-lg"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-gray-900">
//               Our Vision
//             </h3>
//             <p className="text-gray-700">
//               To build a resilient, inclusive, and globally competitive
//               business ecosystem contributing to India's economic leadership.
//             </p>
//           </motion.div>
//         </div>

//         {/* Core Values - Fades in from bottom */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeUp}
//           className="bg-white rounded-2xl p-8 shadow-xl mb-16"
//         >
//           <h2 className="text-3xl font-bold text-center mb-10">
//             Our Guiding Principles
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {coreValues.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.5, delay: index * 0.1 },
//                   },
//                 }}
//                 className="border rounded-xl p-6 hover:shadow-lg transition"
//               >
//                 <div
//                   className={`${value.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
//                 >
//                   <value.icon className={`w-7 h-7 ${value.color}`} />
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">{value.title}</h4>
//                 <p className="text-gray-600 text-sm">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* National Footprint - Fades in from right */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeRight}
//           className="bg-white rounded-2xl p-8"
//           style={{ marginBottom: "3rem" }}
//         >
//           <h2 className="text-3xl font-bold text-center mb-10">
//             National Footprint
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { number: "20+", label: "States & UTs" },
//               { number: "10,000+", label: "Active Members" },
//               { number: "50+", label: "Industry Sectors" },
//               { number: "Pan-India", label: "Presence" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={{
//                   hidden: { opacity: 0, scale: 0.9 },
//                   visible: {
//                     opacity: 1,
//                     scale: 1,
//                     transition: { duration: 0.4, delay: index * 0.1 },
//                   },
//                 }}
//                 className="text-center border rounded-xl p-6 hover:shadow-md transition"
//               >
//                 <div className="text-3xl font-bold text-blue-800 mb-2">
//                   {item.number}
//                 </div>
//                 <div className="text-gray-700 font-semibold">
//                   {item.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Shield,
  TrendingUp,
  Building,
} from "lucide-react";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Maintaining highest ethical standards in all activities.",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Striving for superior performance and setting industry benchmarks.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description:
        "Representing businesses of all sizes across India.",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Fostering innovative and sustainable business solutions.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <section className="relative py-14 sm:py-16 md:py-24 bg-gradient-to-b from-[#fff4cc] via-[#fff1bf] to-[#ffedb3] overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 sm:w-12 h-1 bg-red-600 rounded-full" />
              <span className="text-blue-800 font-bold tracking-widest text-xs sm:text-sm uppercase">
                About Organization
              </span>
              <div className="w-8 sm:w-12 h-1 bg-red-600 rounded-full" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#5D2E18] mb-4 sm:mb-6 leading-tight">
              About All India Trade and
              <br className="hidden sm:block" />
              Industries Forum
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              The premier national platform representing India's trade and
              industry ecosystem through advocacy and empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 mt-8 sm:mt-10 md:-mt-16 relative z-20">

        {/* WHO WE ARE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border mb-10 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-xl flex items-center justify-center">
              <Building className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Who We Are
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-red-600" />
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
            <strong>AITIF</strong> is a national, non-profit organization
            dedicated to strengthening India's trade and industrial ecosystem.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            We act as a bridge between industry and government to ensure
            sustainable economic development.
          </p>
        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="bg-blue-50 rounded-2xl p-6 sm:p-8 shadow-md"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              To promote economic growth and empower businesses through
              progressive trade policies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="bg-red-50 rounded-2xl p-6 sm:p-8 shadow-md"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              To build a globally competitive and inclusive business ecosystem.
            </p>
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-10 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            Our Guiding Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="border rounded-xl p-5 sm:p-6 hover:shadow-md transition"
              >
                <div
                  className={`${value.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;