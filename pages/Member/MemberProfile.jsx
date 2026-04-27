import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  User,
  Mail,
  Building,
  Key,
  Shield,
  Calendar,
  File,
  Bell,
  ExternalLink,
} from "lucide-react";

export default function MemberProfile() {
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
  console.log("member logs", member);

  /* ---------------- REFERRAL LINK ---------------- */
  // const referralLink = `http://localhost:3000/membership-registration/${member?.userId}`;
  // const referralLink = `https://test.aitif.in/membership-registration/${member?.userId}`;
  const referralLink = `https://aitif.in/membership-registration/${member?.userId}`;

  /* ---------------- VIEW CERTIFICATE ---------------- */
  const handleViewCertificate = (member) => {
    console.log("member info", member);
    window.open(
      // `http://localhost:8000/member/auth/user/certificate/${member?._id}`,
      `https://server.aitif.in/member/auth/user/certificate/${member?._id}`,
      "_blank",
    );
  };

  /* ---------------- COPY REFERRAL LINK ---------------- */
  const handleCopyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      alert("Referral link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  /* ---------------- FETCH NOTIFICATION COUNT ---------------- */
  const fetchNotificationCount = async () => {
    try {
      setNotificationCount(3); // mock data
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  /* ---------------- FETCH MEMBER DATA ---------------- */
  useEffect(() => {
    const fetchMemberData = () => {
      setIsLoading(true);
      const storedMember = localStorage.getItem("member");

      if (!storedMember) {
        navigate("/member/login");
      } else {
        setTimeout(() => {
          setMember(JSON.parse(storedMember));
          setIsLoading(false);
        }, 300);
      }
    };

    fetchMemberData();
    fetchNotificationCount();
  }, [navigate]);

  /* ---------------- LOADING STATE ---------------- */
  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!member) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6 sm:py-8 px-4 mt-5">
      <div className="max-w-5xl mx-auto">
        {/* ================= HEADER ================= */}
        {/* Fixed: Stacks vertically on mobile */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Profile
            </h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Manage your account information
            </p>
          </div>

          <Link
            to="/member/notifications"
            className="w-full sm:w-auto text-center inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm"
          >
            <Bell className="h-4 w-4" />
            Notifications
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ================= MAIN PROFILE CARD ================= */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">
              {/* Profile Header - Stacks on mobile */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                    {member.companyName?.charAt(0) || "M"}
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 break-words">
                      {member.companyName}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Member since {new Date().getFullYear()}
                    </p>
                  </div>
                </div>

                {/* Quick Action */}
                <Link
                  to="/member/notifications"
                  className="self-start sm:self-auto p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                >
                  <Bell className="h-5 w-5" />
                </Link>
              </div>

              {/* ================= PROFILE GRID ================= */}
              {/* Fixed: Better spacing + overflow handling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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

                {member?.membershipPlan !== "BASIC MEMBERSHIP PLAN" && (
                  <ProfileItem
                    icon={<File className="h-5 w-5" />}
                    label="Certificate"
                    value={
                      <button
                        onClick={() => handleViewCertificate(member)}
                        className="text-blue-600 hover:underline font-medium flex items-center gap-1 text-sm"
                      >
                        View Certificate
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    }
                    className="bg-purple-50"
                  />
                )}

                {/* Referral Link - FIXED MOBILE WRAP */}
                <ProfileItem
                  icon={<User className="h-5 w-5" />}
                  label="Referral Link"
                  value={
                    <div className="flex flex-col gap-2 w-full">
                      <span className="text-sm text-gray-700 break-all">
                        {referralLink}
                      </span>
                      <button
                        onClick={handleCopyReferralLink}
                        className="text-blue-600 hover:underline font-medium text-sm self-start"
                      >
                        Copy Referral Link
                      </button>
                    </div>
                  }
                  className="bg-teal-50"
                />

                {/* Notification Card */}
                <Link
                  to="/member/notifications"
                  className="border border-gray-200 rounded-xl p-4 sm:p-5 transition-all hover:shadow-md hover:border-blue-300 hover:bg-blue-50 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <Bell className="h-5 w-5 mr-2 text-blue-600" />
                        <p className="text-sm font-medium">Notifications</p>
                      </div>
                      <p className="font-semibold text-gray-900 text-base sm:text-lg">
                        View all notifications
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-blue-600 text-sm">
                      View
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= PROFILE ITEM COMPONENT ================= */
/* Fixed: Prevent text overflow on mobile */
const ProfileItem = ({ icon, label, value, badge, className = "" }) => (
  <div
    className={`border border-gray-200 rounded-xl p-4 sm:p-5 transition-all hover:shadow-md ${className}`}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="w-full">
        <div className="flex items-center text-gray-500 mb-2">
          {icon && <span className="mr-2">{icon}</span>}
          <p className="text-sm font-medium">{label}</p>
        </div>

        {/* break-words prevents overflow */}
        <div className="font-semibold text-gray-900 text-base sm:text-lg break-words">
          {value}
        </div>
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
