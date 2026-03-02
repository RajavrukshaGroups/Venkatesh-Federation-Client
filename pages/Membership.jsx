import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Users,
  Shield,
  Award,
  TrendingUp,
  Building,
  Globe,
  Zap,
  Target,
  Briefcase,
  Star,
  Crown,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "@/services/api";

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

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMembershipPlans();
  }, []);

  const fetchMembershipPlans = async () => {
    try {
      setLoading(true);
      const response = await api.get(
        "/admin/businessplans/view-membershipplans/regform",
      );

      if (response.success) {
        setPlans(response.data);
      } else {
        setError("Failed to load membership plans");
      }
    } catch (err) {
      setError(err?.message || "Error connecting to server");
      console.error("Error fetching membership plans:", err);
    } finally {
      setLoading(false);
    }
  };

  const membershipBenefits = [
    {
      icon: Shield,
      title: "Policy Advocacy",
      description: "Representation in government policy discussions",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with industry leaders and peers",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Industry awards and recognition programs",
      color: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Business growth opportunities and support",
      color: "text-purple-700",
      bgColor: "bg-purple-50",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "International trade opportunities",
      color: "text-amber-700",
      bgColor: "bg-amber-50",
    },
    {
      icon: Zap,
      title: "Digital Tools",
      description: "Access to business tools and resources",
      color: "text-cyan-700",
      bgColor: "bg-cyan-50",
    },
  ];

  if (loading) {
    return (
      <div className="bg-white font-sans min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">Loading membership plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white font-sans min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Error Loading Plans
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchMembershipPlans}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* ================= HEADER ================= */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#fff4cc] via-[#fff1bf] to-[#ffedb3] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-red-600 rounded-full" />
              <span className="text-blue-800 font-bold tracking-widest text-xs sm:text-sm uppercase">
                Join Our Community
              </span>
              <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-red-600 rounded-full" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#5D2E18] mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Membership Plans <br className="hidden sm:block" />
              <span className="block sm:inline">Grow With AITIF</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-2 sm:px-4">
              Choose the membership plan that best fits your business needs and
              unlock exclusive benefits, networking opportunities, and growth
              support.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8"
            >
              <Link
                to="/membership-registration"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors group text-sm sm:text-base"
              >
                <span>Registration Form</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-16 relative z-20">
        {/* Introduction Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-10 border mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-700" />
            </div>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Why Join AITIF?
              </h2>
              <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-red-600" />
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6">
            As a member of the{" "}
            <strong className="font-semibold">All India Trade and Industries Forum (AITIF)</strong>, you
            become part of India's premier business community. We provide the
            platform, resources, and support you need to grow your business,
            navigate challenges, and seize new opportunities.
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700">
            Our membership plans are designed to cater to businesses of all
            sizes, from startups to established enterprises, offering tailored
            benefits to meet diverse business needs.
          </p>
        </motion.div>

        {/* Key Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-10">
            Membership Benefits
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {membershipBenefits.map((benefit, index) => (
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
                className="border rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className={`${benefit.bgColor} w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4`}
                >
                  <benefit.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${benefit.color}`} />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{benefit.title}</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Plans */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-6 sm:mb-8 lg:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Choose Your Membership Plan
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Select the plan that aligns with your business goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
                className={`h-full flex flex-col border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  index === 1
                    ? "border-blue-700 border-2 relative"
                    : "border-gray-200"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-2  right-2 sm:top-0 sm:right-0 bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-bl-lg text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-bold ">POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div
                  className={`p-4 pt-8 sm:p-6 lg:p-8 ${index === 1 ? "bg-blue-50" : "bg-gray-50"} border-b`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          index === 1 ? "bg-blue-100" : "bg-gray-100"
                        }`}
                      >
                        {index === 0 ? (
                          <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-gray-700" />
                        ) : (
                          <Crown className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-blue-700" />
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 whitespace-nowrap">
                        ₹{plan.amount}
                      </div>
                      {plan.durationInDays && (
                        <div className="text-xs sm:text-sm text-gray-600">
                          {plan.durationInDays} days
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700">{plan.description}</p>
                </div>

                {/* Plan Benefits */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                    Plan Benefits:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit._id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: benefitIndex * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-green-600" />
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700 break-words">
                          {benefit.title}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to="/membership-registration" className="mt-auto">
                    <button
                      className={`w-full mt-4 sm:mt-6 lg:mt-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-bold transition-colors text-xs sm:text-sm lg:text-base ${
                        index === 1
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "border-2 border-blue-700 text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      Select This Plan
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border mb-8 sm:mb-12 lg:mb-16 overflow-hidden"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] sm:min-w-0">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 sm:py-3 lg:py-4 font-semibold text-gray-700 text-xs sm:text-sm lg:text-base">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan._id}
                      className="text-center py-2 sm:py-3 lg:py-4 font-bold text-gray-900 text-xs sm:text-sm lg:text-base"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 sm:py-3 lg:py-4 text-gray-700 text-xs sm:text-sm lg:text-base">
                    Number of Benefits
                  </td>
                  {plans.map((plan) => (
                    <td key={plan._id} className="text-center py-2 sm:py-3 lg:py-4">
                      <span className="font-semibold text-xs sm:text-sm lg:text-base">
                        {plan.benefits.length}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-2 sm:py-3 lg:py-4 text-gray-700 text-xs sm:text-sm lg:text-base">
                    Membership Fee
                  </td>
                  {plans.map((plan) => (
                    <td key={plan._id} className="text-center py-2 sm:py-3 lg:py-4">
                      <span className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">
                        ₹{plan.amount}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2 sm:py-3 lg:py-4 text-gray-700 text-xs sm:text-sm lg:text-base">
                    Best For
                  </td>
                  {plans.map((plan, index) => (
                    <td key={plan._id} className="text-center py-2 sm:py-3 lg:py-4">
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        {index === 0
                          ? "Startups & Small Businesses"
                          : "Growing & Established Businesses"}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* How to Join Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 xl:p-12 border mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              How to Join AITIF
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
              Simple steps to become a valued member of our community
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-md">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm sm:text-base lg:text-lg">
                    {step}
                  </div>
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-1 sm:mb-2">
                  {step === 1 && "Select Plan"}
                  {step === 2 && "Fill Form"}
                  {step === 3 && "Make Payment"}
                  {step === 4 && "Get Access"}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  {step === 1 && "Choose the membership plan that fits your needs"}
                  {step === 2 && "Complete the membership registration form"}
                  {step === 3 && "Complete payment for your selected plan"}
                  {step === 4 && "Receive confirmation and access all benefits"}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;