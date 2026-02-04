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
      setError(err || "Error connecting to server");
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
      <div className="bg-white font-sans min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading membership plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white font-sans min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Error Loading Plans
          </h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchMembershipPlans}
            className="px-6 py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
                Join Our Community
              </span>
              <div className="w-12 h-1 bg-red-600 rounded-full" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#5D2E18] mb-6">
              Membership Plans <br className="hidden md:block" />
              Grow With AITIF
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the membership plan that best fits your business needs and
              unlock exclusive benefits, networking opportunities, and growth
              support.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                to="/membership-registration"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors group"
              >
                <span>Registration Form</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
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
              <Building className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Why Join AITIF?
              </h2>
              <div className="w-20 h-1 bg-red-600" />
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            As a member of the{" "}
            <strong>All India Trade and Industries Forum (AITIF)</strong>, you
            become part of India's premier business community. We provide the
            platform, resources, and support you need to grow your business,
            navigate challenges, and seize new opportunities.
          </p>

          <p className="text-gray-700 text-lg">
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
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Membership Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div
                  className={`${benefit.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Plans */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Membership Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the plan that aligns with your business goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
                className={`border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  index === 1
                    ? "border-blue-700 border-2 relative"
                    : "border-gray-200"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-blue-700 text-white px-4 py-2 rounded-bl-lg">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-bold">POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div
                  className={`p-8 ${index === 1 ? "bg-blue-50" : "bg-gray-50"} border-b`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          index === 1 ? "bg-blue-100" : "bg-gray-100"
                        }`}
                      >
                        {index === 0 ? (
                          <Briefcase className="w-5 h-5 text-gray-700" />
                        ) : (
                          <Crown className="w-5 h-5 text-blue-700" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-gray-900">
                        ₹{plan.amount}
                      </div>
                      {plan.durationInDays && (
                        <div className="text-sm text-gray-600">
                          {plan.durationInDays} days
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700">{plan.description}</p>
                </div>

                {/* Plan Benefits */}
                <div className="p-8">
                  <h4 className="text-lg font-semibold mb-6 text-gray-800">
                    Plan Benefits:
                  </h4>
                  <ul className="space-y-4">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit._id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: benefitIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{benefit.title}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to={`/membership-registration`}>
                    <button
                      className={`w-full mt-8 py-3 rounded-lg font-bold transition-colors ${
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
          className="bg-white rounded-2xl shadow-xl p-8 border mb-16 overflow-hidden"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 font-semibold text-gray-700">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan._id}
                      className="text-center py-4 font-bold text-gray-900"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 text-gray-700">Number of Benefits</td>
                  {plans.map((plan) => (
                    <td key={plan._id} className="text-center py-4">
                      <span className="font-semibold">
                        {plan.benefits.length}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-4 text-gray-700">Membership Fee</td>
                  {plans.map((plan) => (
                    <td key={plan._id} className="text-center py-4">
                      <span className="font-bold text-gray-900">
                        ₹{plan.amount}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-gray-700">Best For</td>
                  {plans.map((plan, index) => (
                    <td key={plan._id} className="text-center py-4">
                      <span className="text-gray-700">
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
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 border mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Join AITIF
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Simple steps to become a valued member of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  1
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Select Plan</h4>
              <p className="text-gray-600">
                Choose the membership plan that fits your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  2
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Fill Form</h4>
              <p className="text-gray-600">
                Complete the membership registration form
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  3
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Make Payment</h4>
              <p className="text-gray-600">
                Complete payment for your selected plan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  4
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Get Access</h4>
              <p className="text-gray-600">
                Receive confirmation and access all benefits
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-xl p-8 text-center border"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join AITIF?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Take the first step towards growing your business with India's 
              premier trade and industry forum. Join thousands of successful 
              businesses who trust AITIF for their growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership-registration">
                <button className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors">
                  Register Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                  Contact for Help
                </button>
              </Link>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Membership;
