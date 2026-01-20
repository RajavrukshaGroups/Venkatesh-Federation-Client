import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function MemberLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      return toast.error("All fields are required");
    }

    try {
      const res = await api.post("/member/auth/login", {
        identifier,
        password,
      });

      if (res?.success) {
        localStorage.setItem("memberToken", res.token);
        localStorage.setItem("member", JSON.stringify(res.data));

        toast.success(res.message || "Login successful");
        setTimeout(() => {
          navigate("/member/profile");
        }, 2500);
      }
    } catch (err) {
      toast.error(err || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Member Login</h2>

        {/* Identifier */}
        <input
          type="text"
          placeholder="Email address or Member ID"
          className="w-full border p-3 rounded mb-4"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />

        {/* Password with Eye Icon */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border p-3 rounded pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded font-bold hover:bg-blue-800"
        >
          Login
        </button>

        <div className="text-right mt-4">
          <button
            type="button"
            onClick={() => navigate("/member/forgot-password")}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
}
