import api from "@/services/api";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function MemberResetPassword() {
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!identifier || !otp || !newPassword) {
      return toast.error("All fields are required");
    }

    if (newPassword.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      const res = await api.post("/member/auth/reset-password", {
        identifier,
        otp,
        newPassword,
      });

      if (res?.success) {
        toast.success(res.message || "Password updated successfully");
        setIdentifier("");
        setOtp("");
        setNewPassword("");
      }
    } catch (err) {
      console.error("Reset Password Error:", err);
      toast.error(err?.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-xl font-bold mb-4">Reset Password</h2>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Email / Member ID"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        disabled={loading}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        disabled={loading}
      />

      <input
        className="w-full border p-2 mb-4"
        placeholder="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleReset}
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Updating..." : "Update Password"}
      </button>
    </div>
  );
}
