import React from "react";
import { SectionTitle, Button } from "../components/UI";
import {
  Check,
  Globe,
  Users,
  BookOpen,
  Award,
  ShieldCheck,
  Briefcase,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="bg-white font-sans">
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Corporate Conference Room"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4 fade-in flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2">
            Membership
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <Link to="/membership-registration">
            <Button className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-bold px-10 py-4 rounded-full shadow-xl">
              Registration Form
            </Button>
          </Link>
        </div>
      </div>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Membership Details"
            subtitle="Choose the tier that best aligns with your organizational goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all relative flex flex-col bg-slate-50">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                Associate Member
              </h3>
              <div className="text-4xl font-serif font-bold text-navy-900 mb-8">
                ₹5,000
                <span className="text-sm font-sans font-normal text-gray-400">
                  /year
                </span>
              </div>
              <Link to="/membership-registration" className="mt-auto">
                <button className="w-full py-3 rounded-lg border-2 border-navy-900 text-navy-900 font-bold hover:bg-navy-900 hover:text-white transition-colors">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
