import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Building,
  FileText,
  Lightbulb,
  Mic,
  Cpu,
  Users2,
  Network,
  Megaphone,
  Briefcase,
  Scale,
  Calendar,
  BookOpen,
  Zap,
  BarChart,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

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

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Expert Advisory Services",
      description:
        "Comprehensive guidance on GST compliance, Legal Metrology requirements, and Labor laws to ensure regulatory adherence and operational efficiency.",
      points: [
        "GST registration, filing, and advisory",
        "Legal metrology compliance",
        "Labor law compliance and HR advisory",
        "Regulatory framework understanding",
      ],
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lightbulb,
      title: "Knowledge & Growth Solutions",
      description:
        "Providing strategic insights and knowledge resources that empower businesses to grow and compete effectively in dynamic markets.",
      points: [
        "Market intelligence reports",
        "Competitive analysis",
        "Growth strategy workshops",
        "Industry trend insights",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Mic,
      title: "Policy Advocacy & Representation",
      description:
        "Representing the collective voice of members to influence policies and regulations at both central and state government levels.",
      points: [
        "Policy representation forums",
        "Government liaison services",
        "Regulatory advocacy",
        "Collective bargaining support",
      ],
      color: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description:
        "Assisting businesses in adopting digital technologies to streamline operations, enhance productivity, and stay competitive.",
      points: [
        "Digital strategy consultation",
        "Technology implementation support",
        "E-commerce enablement",
        "Process digitization",
      ],
      color: "text-purple-700",
      bgColor: "bg-purple-50",
    },
    {
      icon: Calendar,
      title: "Learning & Development",
      description:
        "Platform for continuous learning through workshops, seminars, and expert committee interactions to enhance business knowledge.",
      points: [
        "Industry workshops",
        "Expert seminars",
        "Technical training programs",
        "Knowledge sharing sessions",
      ],
      color: "text-amber-700",
      bgColor: "bg-amber-50",
    },
    {
      icon: Network,
      title: "Business Networking",
      description:
        "Connecting members through networking events to explore and expand business opportunities across industries and regions.",
      points: [
        "Industry networking events",
        "Business matchmaking",
        "Partnership facilitation",
        "Market expansion support",
      ],
      color: "text-cyan-700",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Megaphone,
      title: "Promotion & Visibility",
      description:
        "Enhancing member visibility through directories, events, and promotional activities to increase market presence.",
      points: [
        "Business directory listings",
        "Event participation",
        "Brand promotion",
        "Media visibility",
      ],
      color: "text-pink-700",
      bgColor: "bg-pink-50",
    },
    {
      icon: Briefcase,
      title: "Comprehensive Business Support",
      description:
        "End-to-end business support services covering legal, financial, operational, and strategic aspects of business management.",
      points: [
        "Business registration support",
        "Financial advisory",
        "Operational efficiency",
        "Strategic planning",
      ],
      color: "text-indigo-700",
      bgColor: "bg-indigo-50",
    },
  ];

  const keyBenefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce compliance risks and legal complications",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Access to growth opportunities and market expansion",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Connect with industry peers and experts",
    },
    {
      icon: Award,
      title: "Credibility",
      description: "Enhanced business credibility and trust",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined operations through digital solutions",
    },
    {
      icon: BarChart,
      title: "Market Insights",
      description: "Access to valuable market data and intelligence",
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
                Our Services
              </span>
              <div className="w-12 h-1 bg-red-600 rounded-full" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#5D2E18] mb-6">
              Comprehensive Services for <br className="hidden md:block" />
              Business Excellence
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering businesses with expert guidance, strategic support, and
              growth opportunities to thrive in today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
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
              <Briefcase className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Service Philosophy
              </h2>
              <div className="w-20 h-1 bg-red-600" />
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-4">
            At <strong>All India Trade and Industries Forum (AITIF)</strong>, we
            understand that businesses need more than just representation—they
            need comprehensive support systems to navigate challenges and seize
            opportunities.
          </p>

          <p className="text-gray-700 text-lg">
            Our services are designed to provide end-to-end solutions, from
            regulatory compliance to business growth strategies, ensuring our
            members stay ahead in an ever-evolving business environment.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Key Benefits for Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
                  <benefit.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed to address every aspect of your
              business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
                className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Header */}
                <div className={`p-6 ${service.bgColor} border-b`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.bgColor}`}
                    >
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        </div>
                        <span className="text-gray-600">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Deliver Value */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 border mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Deliver Value
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our multi-faceted approach ensures comprehensive support for our
              members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Personalized Approach</h4>
              <p className="text-gray-600">
                Tailored solutions based on individual business needs and
                challenges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users2 className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Expert Network</h4>
              <p className="text-gray-600">
                Access to industry experts, consultants, and thought leaders
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
              <p className="text-gray-600">
                Regular updates, workshops, and knowledge sharing sessions
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-xl p-8 text-center border"
          style={{ marginBottom: "3rem" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Join AITIF today and access our comprehensive suite of services
              designed to help your business grow, comply, and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Become a Member */}
              <Link to="/membership">
                <button className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors">
                  Become a Member
                </button>
              </Link>

              {/* Contact */}
              <Link to="/contact">
                <button className="px-8 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
