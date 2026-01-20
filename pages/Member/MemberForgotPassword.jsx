import api from "@/services/api";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function MemberForgotPassword() {
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!identifier.trim()) {
      return toast.error("Please enter Email or Member ID");
    }

    try {
      setLoading(true);
      const res = await api.post("/member/auth/forgot-password", {
        identifier,
      });

      if (res?.success) {
        toast.success("OTP sent to registered email");
        setStep(2);
      }
    } catch (err) {
      toast.error(err || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      return toast.error("OTP and New Password are required");
    }

    try {
      setLoading(true);
      const res = await api.post("/member/auth/reset-password", {
        identifier,
        otp,
        newPassword,
      });

      if (res?.success) {
        toast.success("Password updated successfully. Redirecting to login...");

        setTimeout(() => {
          navigate("/member/login");
        }, 2500);
      }
    } catch (err) {
      toast.error(err || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-xl font-bold mb-4">
        {step === 1 ? "Forgot Password" : "Reset Password"}
      </h2>

      {/* Identifier */}
      <input
        className="w-full border p-2 mb-4"
        placeholder="Email address or Member ID"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        disabled={loading || step === 2}
      />

      {step === 2 && (
        <>
          <input
            className="w-full border p-2 mb-4"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          {/* New Password with Eye */}
          <div className="relative mb-4">
            <input
              className="w-full border p-2 rounded pr-10"
              placeholder="Create new password"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </>
      )}

      {step === 1 ? (
        <button
          onClick={handleSendOtp}
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      ) : (
        <button
          onClick={handleResetPassword}
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      )}
    </div>
  );
}
