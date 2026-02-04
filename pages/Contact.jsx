import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Globe,
  Building,
  Users,
  MessageSquare,
  Send,
  Shield,
  CheckCircle,
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

const Contact = () => {
  const contactDetails = [
    {
      icon: Building,
      title: "Registered Office",
      details: [
        "All India Trade and Industries Forum",
        "B- 1/67, Indira Chowk",
        "Near Nanital Bank, New Kondli",
        "Delhi - 110096, India",
      ],
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@aitif.org",
        "support@aitif.org",
        "membership@aitif.org",
        "media@aitif.org",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "+91 98765 43212",
        "Toll Free: 1800-123-4567",
      ],
      color: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday to Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Emergency: 24/7 Support Available",
      ],
      color: "text-purple-700",
      bgColor: "bg-purple-50",
    },
  ];

  const departmentContacts = [
    {
      department: "Membership & Enrollment",
      contact: "+91 98765 43213",
      email: "membership@aitif.org",
    },
    {
      department: "Policy Advocacy",
      contact: "+91 98765 43214",
      email: "advocacy@aitif.org",
    },
    {
      department: "Business Support",
      contact: "+91 98765 43215",
      email: "support@aitif.org",
    },
    {
      department: "Media & Communications",
      contact: "+91 98765 43216",
      email: "media@aitif.org",
    },
    {
      department: "Events & Workshops",
      contact: "+91 98765 43217",
      email: "events@aitif.org",
    },
    {
      department: "Technical Support",
      contact: "+91 98765 43218",
      email: "tech@aitif.org",
    },
  ];

  const regionalOffices = [
    {
      region: "Northern Region",
      location: "Delhi NCR",
      contact: "+91 98765 43220",
    },
    {
      region: "Western Region",
      location: "Mumbai, Maharashtra",
      contact: "+91 98765 43221",
    },
    {
      region: "Southern Region",
      location: "Bengaluru, Karnataka",
      contact: "+91 98765 43222",
    },
    {
      region: "Eastern Region",
      location: "Kolkata, West Bengal",
      contact: "+91 98765 43223",
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
                Get in Touch
              </span>
              <div className="w-12 h-1 bg-red-600 rounded-full" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#5D2E18] mb-6">
              Connect with AITIF <br className="hidden md:block" />
              Your Partner in Growth
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We're here to support your business journey. Reach out to us for
              expert guidance, membership inquiries, or partnership
              opportunities.
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
              <MessageSquare className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Commitment to You
              </h2>
              <div className="w-20 h-1 bg-red-600" />
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-4">
            At <strong>All India Trade and Industries Forum (AITIF)</strong>, we
            believe that effective communication is the foundation of successful
            partnerships. Our dedicated team is committed to providing timely
            and relevant support to all our stakeholders.
          </p>

          <p className="text-gray-700 text-lg">
            Whether you're seeking membership information, need business
            guidance, or want to collaborate on industry initiatives, we're here
            to help you navigate your business journey successfully.
          </p>
        </motion.div>

        {/* Contact Details Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((contact, index) => (
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
                  className={`${contact.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                >
                  <contact.icon className={`w-7 h-7 ${contact.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-4">{contact.title}</h4>
                <ul className="space-y-2">
                  {contact.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Department Contacts */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Department-wise Contacts
            </h3>
            <div className="space-y-4">
              {departmentContacts.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <h4 className="font-bold text-gray-800 mb-1">
                    {dept.department}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Phone size={14} />
                      {dept.contact}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Mail size={14} />
                      {dept.email}
                    </span>
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
              Regional Offices
            </h3>
            <div className="space-y-4">
              {regionalOffices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <h4 className="font-bold text-gray-800 mb-1">
                    {office.region}
                  </h4>
                  <div className="flex flex-col text-sm text-gray-600">
                    <span className="flex items-center gap-1 mb-1">
                      <MapPin size={14} />
                      {office.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={14} />
                      {office.contact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div> */}

        {/* How to Reach Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 border mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Multiple channels available for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Send className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Email Support</h4>
              <p className="text-gray-600">
                For detailed queries and documentation
              </p>
              <div className="mt-3">
                <span className="text-sm text-blue-700 font-semibold">
                  Response within 24 hours
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Phone Support</h4>
              <p className="text-gray-600">
                For immediate assistance and quick queries
              </p>
              <div className="mt-3">
                <span className="text-sm text-red-700 font-semibold">
                  24/7 Emergency support available
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">In-person Meetings</h4>
              <p className="text-gray-600">
                Scheduled meetings at our office locations
              </p>
              <div className="mt-3">
                <span className="text-sm text-green-700 font-semibold">
                  By appointment only
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Contact Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          className="bg-white rounded-2xl shadow-xl p-8 border mb-16"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Why Connect with AITIF?
              </h2>
              <div className="w-20 h-1 bg-red-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                "Expert guidance on industry regulations",
                "Access to exclusive business networks",
                "Policy advocacy support",
                "Training and capacity building programs",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Market intelligence and insights",
                "Business partnership opportunities",
                "Digital transformation support",
                "Representation in government forums",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-xl p-8 text-center border"
          style={{ marginBottom: "2rem" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our team is ready to help you with any queries or support you
              need. Feel free to reach out through any of our contact channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg">
                <Phone size={20} />
                <span>Call: +91 98765 43210</span>
              </div>
              <div className="text-gray-600 font-medium">OR</div>
              <div className="flex items-center gap-3 px-6 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-lg">
                <Mail size={20} />
                <span>Email: info@aitif.org</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We typically respond within 2 business hours during working days
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
