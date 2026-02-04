import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Plane,
  Handshake,
  Map,
  Building,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Briefcase,
  Target,
  Shield,
  Clock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const International = () => {
  const upcomingInitiatives = [
    {
      icon: Globe,
      title: "Global Trade Partnerships",
      description:
        "Strategic alliances with international chambers of commerce and trade bodies across continents.",
      status: "In Progress",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Plane,
      title: "International Trade Delegations",
      description:
        "Organized business trips to key global markets for Indian exporters and importers.",
      status: "Planning Phase",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Handshake,
      title: "Bilateral Agreements",
      description:
        "MoUs and trade agreements with international business organizations.",
      status: "Under Discussion",
      color: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      icon: Map,
      title: "Market Intelligence Hub",
      description:
        "Comprehensive database of international market opportunities and regulations.",
      status: "Development Phase",
      color: "text-purple-700",
      bgColor: "bg-purple-50",
    },
  ];

  const globalNetworks = [
    {
      region: "Europe",
      countries: "Germany, France, UK, Italy",
      focus: "Technology & Manufacturing",
      icon: Building,
    },
    {
      region: "North America",
      countries: "USA, Canada, Mexico",
      focus: "IT Services & Agriculture",
      icon: Briefcase,
    },
    {
      region: "Asia Pacific",
      countries: "Japan, Singapore, Australia",
      focus: "Renewable Energy & Education",
      icon: Target,
    },
    {
      region: "Middle East",
      countries: "UAE, Saudi Arabia, Qatar",
      focus: "Construction & Healthcare",
      icon: Shield,
    },
  ];

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* ================= HEADER ================= */}
      <section className="relative py-24 bg-gradient-to-b from-[#fff4cc] via-[#fff1bf] to-[#ffedb3] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-red-600 rounded-full" />
              <span className="text-blue-800 font-bold tracking-widest text-sm uppercase">
                Global Initiatives
              </span>
              <div className="w-12 h-1 bg-red-600 rounded-full" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#5D2E18] mb-6">
              International Forum <br className="hidden md:block" />
              Connecting India to the World
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Bridging borders and expanding markets through strategic global partnerships
              and international trade collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= COMING SOON BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-center"
        >
          <div className="flex flex-col items-center">
            <Clock className="w-16 h-16 text-white mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Exciting Updates Coming Soon!
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Our International Forum section is currently under development. 
              We're working on bringing you comprehensive global trade insights, 
              international partnership opportunities, and much more.
            </p>
            {/* <div className="bg-white/20 px-6 py-3 rounded-full">
              <p className="text-white font-semibold">
                Expected Launch: Q1 2024
              </p>
            </div> */}
          </div>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border mb-16"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
              <Globe className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Global Vision
              </h2>
              <div className="w-20 h-1 bg-red-600" />
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-4">
            The <strong>AITIF International Forum</strong> is dedicated to 
            positioning Indian businesses on the global stage. We facilitate 
            international trade, foster cross-border collaborations, and 
            provide market access opportunities to our members.
          </p>

          <p className="text-gray-700 text-lg">
            Through strategic partnerships, trade delegations, and market 
            intelligence, we help Indian businesses expand their global 
            footprint and compete effectively in international markets.
          </p>
        </motion.div>

        {/* Upcoming Initiatives */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Upcoming Global Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${initiative.bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}
                  >
                    <initiative.icon className={`w-6 h-6 ${initiative.color}`} />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-700">
                    {initiative.status}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{initiative.title}</h4>
                <p className="text-gray-600 text-sm mb-3">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Global Networks */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Target Global Networks
            </h3>
            <div className="space-y-6">
              {globalNetworks.map((network, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <network.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {network.region}
                    </h4>
                  </div>
                  <div className="ml-14 space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Countries:</span>{" "}
                      {network.countries}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Focus Areas:</span>{" "}
                      {network.focus}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Benefits for Members
            </h3>
            <div className="space-y-4">
              {[
                "Access to international trade opportunities",
                "Market research and country-specific insights",
                "Networking with global business leaders",
                "Participation in trade delegations",
                "Support for export documentation",
                "Cross-border partnership facilitation",
                "International regulatory guidance",
                "Global brand visibility",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div> */}

        {/* Stay Updated Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 border mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Be the first to know about our international trade initiatives, 
              global partnership opportunities, and upcoming international events.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap">
                  Subscribe for Updates
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                We'll notify you when our International Forum is live
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* Contact for International Queries */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-xl p-8 text-center border"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have International Trade Queries?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              While we're building our comprehensive International Forum, 
              our team is available to assist with your global business inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg">
                <Plane size={20} />
                <span>International Desk: +91 98765 43230</span>
              </div>
              <div className="text-gray-600 font-medium">OR</div>
              <div className="flex items-center gap-3 px-6 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-lg">
                <Globe size={20} />
                <span>Email: international@aitif.org</span>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default International;