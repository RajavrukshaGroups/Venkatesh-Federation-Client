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

  const referralLink = `http://localhost:3000/membership-registration/${member?.userId}`;

  const handleViewCertificate = (member) => {
    console.log("member info", member);
    window.open(
      // `http://localhost:8000/member/auth/user/certificate/${member?._id}`,
      `https://server.aitif.in/member/auth/user/certificate/${member?._id}`,
      "_blank",
    );
  };

  const handleCopyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      alert("Referral link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  // Fetch notification count (you can integrate with your API)
  const fetchNotificationCount = async () => {
    try {
      // Replace with your actual API call
      // const response = await api.get('/member/notifications/unread-count');
      // setNotificationCount(response.data.count);
      setNotificationCount(3); // Mock data for now
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
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
    fetchNotificationCount();
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 mt-5">
      <div className="max-w-5xl mx-auto">
        {/* Header with Notification */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-2">
              Manage your account information
            </p>
          </div>

          {/* Notification Button */}
          <Link
            to="/member/notifications"
            className="relative inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow"
          >
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
            {/* {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )} */}
          </Link>
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

                {/* Quick Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    to="/member/notifications"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors relative"
                    title="View Notifications"
                  >
                    <Bell className="h-5 w-5" />
                    {/* {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {notificationCount > 9 ? "9+" : notificationCount}
                      </span>
                    )} */}
                  </Link>
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
                      className="text-blue-600 hover:underline font-medium flex items-center gap-1"
                    >
                      View Certificate
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  }
                  className="bg-purple-50"
                />
                <ProfileItem
                  icon={<User className="h-5 w-5" />}
                  label="Referral Link"
                  value={
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-700 break-all">
                        {referralLink}
                      </span>
                      <button
                        onClick={handleCopyReferralLink}
                        className="self-start text-blue-600 hover:underline font-medium"
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
                  className="border border-gray-200 rounded-xl p-5 transition-all hover:shadow-md hover:border-blue-300 hover:bg-blue-50 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <Bell className="h-5 w-5 mr-2 text-blue-600" />
                        <p className="text-sm font-medium">Notifications</p>
                      </div>
                      <p className="font-semibold text-gray-900 text-lg">
                        View all notifications
                      </p>
                      {/* {notificationCount > 0 && (
                        <p className="text-sm text-gray-600 mt-1">
                          {notificationCount} unread notification{notificationCount !== 1 ? 's' : ''}
                        </p>
                      )} */}
                    </div>
                    <span className="flex items-center gap-1 text-blue-600">
                      View
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Additional Section for Quick Links */}
              {/* <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/member/notification"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                  >
                    <Bell className="h-4 w-4" />
                    Notifications
                    {notificationCount > 0 && (
                      <span className="ml-1 px-2 py-0.5 bg-white text-blue-600 text-xs font-bold rounded-full">
                        {notificationCount}
                      </span>
                    )}
                  </Link>
                  
                  <button
                    onClick={() => handleViewCertificate(member)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
                  >
                    <File className="h-4 w-4" />
                    View Certificate
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Side Panel - Notification Preview */}
          {/* <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Notifications
                </h3>
                <Link
                  to="/member/notification"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  View All
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
              
              {notificationCount > 0 ? (
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm font-medium text-gray-900">
                      New referral registered
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ABC Company joined using your referral link
                    </p>
                    <p className="text-xs text-gray-400 mt-2">2 hours ago</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <p className="text-sm font-medium text-gray-900">
                      Payment received
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ₹1,000 received from referral commission
                    </p>
                    <p className="text-xs text-gray-400 mt-2">1 day ago</p>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <p className="text-sm font-medium text-gray-900">
                      Membership renewal reminder
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Your membership expires in 30 days
                    </p>
                    <p className="text-xs text-gray-400 mt-2">3 days ago</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No new notifications</p>
                  <p className="text-sm text-gray-400 mt-1">
                    You're all caught up!
                  </p>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  to="/member/notification"
                  className="w-full block text-center px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-200"
                >
                  View All Notifications
                </Link>
              </div>
            </div>
          </div> */}
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
