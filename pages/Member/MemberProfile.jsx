import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Building,
  Key,
  Shield,
  Calendar,
  File,
} from "lucide-react";

export default function MemberProfile() {
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleViewCertificate = (member) => {
    console.log("member info", member);
    window.open(
      `http://localhost:8000/member/auth/user/certificate/${member?._id}`,
      "_blank",
    );
  };

  useEffect(() => {
    const fetchMemberData = () => {
      setIsLoading(true);
      const storedMember = localStorage.getItem("member");

      if (!storedMember) {
        navigate("/member/login"); // 🔒 protect route
      } else {
        // Simulate API loading delay for better UX
        setTimeout(() => {
          setMember(JSON.parse(storedMember));
          setIsLoading(false);
        }, 300);
      }
    };

    fetchMemberData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!member) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account information</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Profile Card */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {member.companyName?.charAt(0) || "M"}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {member.companyName}
                    </h2>
                    <p className="text-gray-500">
                      Member since {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileItem
                  icon={<Building className="h-5 w-5" />}
                  label="Company Name"
                  value={member.companyName}
                  className="bg-blue-50"
                />
                <ProfileItem
                  icon={<Key className="h-5 w-5" />}
                  label="Member ID"
                  value={member.userId}
                  className="bg-indigo-50"
                />
                <ProfileItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email Address"
                  value={member.email}
                  className="bg-emerald-50"
                />
                <ProfileItem
                  icon={<Shield className="h-5 w-5" />}
                  label="Membership Plan"
                  value={member.membershipPlan || "Basic Plan"}
                  badge={member.membershipPlan ? "active" : "inactive"}
                  className="bg-amber-50"
                />
                <ProfileItem
                  icon={<Calendar className="h-5 w-5" />}
                  label="Account Status"
                  value="Active"
                  badge="active"
                  className="bg-green-50"
                />
                <ProfileItem
                  icon={<File className="h-5 w-5" />}
                  label="Certificate"
                  value={
                    <button
                      onClick={() => handleViewCertificate(member)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View Certificate
                    </button>
                  }
                  badge="active"
                  className="bg-green-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileItem = ({ icon, label, value, badge, className = "" }) => (
  <div
    className={`border border-gray-200 rounded-xl p-5 transition-all hover:shadow-md ${className}`}
  >
    <div className="flex items-start justify-between">
      <div>
        <div className="flex items-center text-gray-500 mb-2">
          {icon && <span className="mr-2">{icon}</span>}
          <p className="text-sm font-medium">{label}</p>
        </div>
        <p className="font-semibold text-gray-900 text-lg">{value}</p>
      </div>
      {badge && (
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            badge === "active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {badge}
        </span>
      )}
    </div>
  </div>
);
