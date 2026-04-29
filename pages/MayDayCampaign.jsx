import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";

const MayDayCampaign = () => {
  /* =========================
     ADDRESS STATES
  ========================= */
  const { referrerId } = useParams();
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluk, setTaluk] = useState("");
  const [street, setStreet] = useState("");

  /* =========================
     FORM STATES
  ========================= */
  const [companyName, setCompanyName] = useState("");
  const [proprietors, setProprietors] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [majorCommodities, setMajorCommodities] = useState(["", ""]);

  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategoryName, setCustomCategoryName] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  /* =========================
     BUSINESS STATES
  ========================= */
  const [categories, setCategories] = useState([]);
  const [businessCategory, setBusinessCategory] = useState("");
  const [businessType, setBusinessType] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);

  const [businessNature, setBusinessNature] = useState({
    manufacturer: {
      isManufacturer: false,
      scale: [],
    },
    trader: {
      isTrader: false,
      type: [],
    },
    professional: {
      isProfessional: true,
    },
    other: {
      isOther: false,
    },
  });

  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [skipBankDetails, setSkipBankDetails] = useState(false);

  /* =========================
     MEMBERSHIP PLAN STATES
  ========================= */
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [membershipAmount, setMembershipAmount] = useState(0);
  const [planLoading, setPlanLoading] = useState(false);
  const [showPlanBenefits, setShowPlanBenefits] = useState(false);
  const [selectedPlanBenefits, setSelectedPlanBenefits] = useState([]);

  const [errors, setErrors] = useState({});

  const categoryOptions = [
    ...categories.map((cat) => ({
      value: cat._id,
      label: cat.name,
    })),
    { value: "__CUSTOM__", label: "+ Add new business category" },
  ];

  const selectedCategoryOptions =
    categoryOptions.find((opt) => opt.value === businessCategory) || null;

  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH CATEGORIES & MEMBERSHIP PLANS
  ========================= */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoryLoading(true);
        const res = await api.get("/admin/category/getCategories");
        if (res.success) {
          const categoryList = res.data || [];
          setCategories(categoryList);
          const defaultCategory = categoryList.find(
            (cat) => cat.name?.toLowerCase() === "2w technician",
          );
          if (defaultCategory) {
            setBusinessCategory(defaultCategory._id);
          }
        }
      } catch (err) {
        toast.error("Failed to load categories");
      } finally {
        setCategoryLoading(false);
      }
    };

    const fetchMembershipPlans = async () => {
      try {
        setPlanLoading(true);
        const response = await api.get(
          "/admin/businessplans/view-membershipplans/regform",
        );
        if (response.success) {
          const plans = response.data || [];
          const promoPlans = plans.filter((p) =>
            p.name?.toLowerCase().includes("promo kit"),
          );
          setMembershipPlans(promoPlans);
        } else {
          toast.error("Failed to load membership plans");
        }
      } catch (error) {
        console.error("Error fetching membership plans:", error);
        toast.error("Failed to load membership plans");
      } finally {
        setPlanLoading(false);
      }
    };

    fetchCategories();
    fetchMembershipPlans();
  }, []);

  /* =========================
     FETCH ADDRESS BY PIN
  ========================= */
  const fetchAddressByPin = async (pincode) => {
    if (pincode.length !== 6) return;
    try {
      setPinLoading(true);
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`,
      );
      const data = await res.json();
      if (data[0]?.Status === "Success") {
        const info = data[0].PostOffice[0];
        setState(info.State);
        setDistrict(info.District);
        setTaluk(info.Block || "");
      } else {
        resetAddress();
        toast.error("Invalid PIN Code");
      }
    } catch {
      resetAddress();
      toast.error("Failed to fetch address");
    } finally {
      setPinLoading(false);
    }
  };

  const resetAddress = () => {
    setState("");
    setDistrict("");
    setTaluk("");
  };

  /* =========================
     BUSINESS TYPE HANDLERS
  ========================= */
  const toggleBusinessType = (type) => {
    setBusinessType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const toggleManufacturerScale = (value) => {
    setBusinessNature((prev) => {
      const scale = prev.manufacturer.scale.includes(value)
        ? prev.manufacturer.scale.filter((v) => v !== value)
        : [...prev.manufacturer.scale, value];
      return {
        ...prev,
        manufacturer: { ...prev.manufacturer, scale },
      };
    });
  };

  const toggleTraderType = (value) => {
    setBusinessNature((prev) => {
      const type = prev.trader.type.includes(value)
        ? prev.trader.type.filter((v) => v !== value)
        : [...prev.trader.type, value];
      return {
        ...prev,
        trader: { ...prev.trader, type },
      };
    });
  };

  /* =========================
     MEMBERSHIP PLAN HANDLERS
  ========================= */
  const handlePlanToggle = (plan) => {
    setSelectedPlans((prev) => {
      const exists = prev.find((p) => p._id === plan._id);
      let updatedPlans;
      if (exists) {
        updatedPlans = prev.filter((p) => p._id !== plan._id);
      } else {
        updatedPlans = [...prev, plan];
      }
      const total = updatedPlans.reduce((sum, p) => sum + Number(p.amount), 0);
      setMembershipAmount(total);
      return updatedPlans;
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderPlanOption = (plan) => {
    return (
      <div className="py-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800">{plan.name}</span>
          <span className="font-bold text-blue-600">
            {formatCurrency(plan.amount)}
          </span>
        </div>
        {plan.description && (
          <p className="text-xs text-gray-600 mt-1 truncate">
            {plan.description}
          </p>
        )}
        {plan.benefits && plan.benefits.length > 0 && (
          <div className="text-xs text-gray-500 mt-1">
            Benefits: {plan.benefits.length} included
          </div>
        )}
      </div>
    );
  };

  /* =========================
     VALIDATION & SUBMIT
  ========================= */
  const validateForm = () => {
    const newErrors = {};

    const isManufacturer = businessNature.manufacturer.isManufacturer;
    const isTrader = businessNature.trader.isTrader;
    const isProfessional = businessNature.professional.isProfessional;
    const isOther = businessNature.other.isOther;

    if (!isManufacturer && !isTrader && !isProfessional && !isOther) {
      newErrors.businessNature = "Please select at least one business nature";
    }

    if (!companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!proprietors.trim())
      newErrors.proprietors = "Proprietor / Partner name is required";

    if (!mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    else if (mobileNumber.length !== 10)
      newErrors.mobileNumber = "Mobile number must be 10 digits";

    if (!businessCategory && !customCategoryName.trim()) {
      newErrors.businessCategory = "Business category is required";
    }

    if (selectedPlans.length === 0) {
      newErrors.selectedPlans = "Select at least one plan";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return Object.values(newErrors)[0];
    }
    return null;
  };

  const resetForm = () => {
    setPin("");
    setState("");
    setDistrict("");
    setTaluk("");
    setStreet("");
    setCompanyName("");
    setProprietors("");
    setMobileNumber("");
    setEmail("");
    setGstNumber("");
    const defaultCategory = categories.find(
      (cat) => cat.name?.toLowerCase() === "2w technician",
    );
    if (defaultCategory) {
      setBusinessCategory(defaultCategory._id);
    }
    setBusinessType([]);
    setMajorCommodities(["", ""]);
    setBusinessNature({
      manufacturer: { isManufacturer: false, scale: [] },
      trader: { isTrader: false, type: [] },
      professional: { isProfessional: true },
      other: { isOther: false },
    });
    setBankName("");
    setAccountNumber("");
    setIfscCode("");
    setSkipBankDetails(false);
    setSelectedPlans([]);
    setMembershipAmount(0);
    setSelectedPlanBenefits([]);
    setShowPlanBenefits(false);
    setIsCustomCategory(false);
    setCustomCategoryName("");
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      setLoading(true);

      const registrationData = {
        companyName,
        proprietors,
        address: { street, pin, state, district, taluk },
        mobileNumber,
        email,
        businessCategory,
        customBusinessCategory: isCustomCategory
          ? customCategoryName.trim().toUpperCase()
          : null,
        businessType,
        businessNature,
        majorCommodities: majorCommodities.filter(Boolean),
        gstNumber,
        bankDetails:
          !skipBankDetails && (bankName || accountNumber || ifscCode)
            ? { bankName, accountNumber, ifscCode }
            : undefined,
        referral: referrerId
          ? { source: "USER", referredByUserId: referrerId }
          : { source: "ADMIN" },
      };

      let orderRes;
      try {
        orderRes = await api.post("/admin/payment/mayday/create-order", {
          formData: { ...registrationData, selectedPlans },
          amount: membershipAmount,
        });
      } catch (err) {
        console.log("error", err);
        const data = err;

        // if (data) {
        //   setGeneratedId(data);
        //   setShowSuccessModal(true);
        //   return;
        // }

        const msg = data || "Something went wrong. Please try again.";
        toast.error(msg);
      }

      if (!orderRes.success) {
        toast.error("Failed to initiate payment");
        return;
      }

      if (orderRes.message) {
        toast.success(orderRes.message);
      }

      const options = {
        key: orderRes.key,
        amount: orderRes.amount * 100,
        currency: "INR",
        name: "All India Trade and Industries Forum",
        description: selectedPlans.map((p) => p.name).join(", "),
        order_id: orderRes.orderId,
        handler: async function (response) {
          try {
            toast.success("Payment successful!");

            // 🔥 Retry function to wait for webhook
            const fetchUniqueId = async (retries = 6) => {
              try {
                const res = await api.get(
                  `/admin/payment/mayday/order/${orderRes.orderId}`,
                );
                console.log("response", res);

                const uniqueId = res.data?.uniqueId;

                if (uniqueId) {
                  // ✅ SUCCESS → SHOW MODAL
                  setGeneratedId(uniqueId);
                  setShowSuccessModal(true);
                  return;
                }

                // ⏳ Retry if not ready
                if (retries > 0) {
                  setTimeout(() => fetchUniqueId(retries - 1), 1500);
                } else {
                  toast.error(
                    "Payment done, but ID not generated yet. Please contact support.",
                  );
                }
              } catch (err) {
                console.error(err);
              }
            };

            // 🚀 Start polling
            fetchUniqueId();
          } catch (err) {
            console.error(err);
          }
        },
        prefill: {
          name: companyName,
          email,
          contact: mobileNumber,
        },
        theme: {
          color: "#0054A6",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.log("Payment error:", err);
      toast.error(err || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  const PLAN_PRICING = {
    "NGK PROMO KIT": { mrp: 3550, total: 2000, advance: 500, remaining: 1500 },
    "SKAS PROMO KIT": { mrp: 3080, total: 2000, advance: 500, remaining: 1500 },
    "KING QUALITY PROMO KIT": {
      mrp: 3065,
      total: 2000,
      advance: 500,
      remaining: 1500,
    },
    "EV CURE PROMO KIT": {
      mrp: 25000,
      total: 10000,
      advance: 2000,
      remaining: 8000,
    },
  };

  // ----- FULLY RESPONSIVE UI (No functional changes) -----
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8 md:py-12 px-4 sm:px-6 font-sans">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#0B5FA5] to-[#0a4a7a] text-white px-4 sm:px-8 py-6 sm:py-8 text-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight">
              All India Trade and Industries Forum
            </h1>
            <div className="h-0.5 w-20 sm:w-24 bg-yellow-400 mx-auto my-3 sm:my-4"></div>
            <p className="text-base sm:text-lg md:text-xl font-medium text-blue-100">
              Karnataka Two Wheeler Workshop Owner’s & Technicians Association
              (R.)
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mt-4 sm:mt-6 uppercase tracking-wide">
              Auto Expo & May Day
            </h2>
            <div className="mt-3 sm:mt-4 inline-block bg-red-600 px-6 sm:px-8 py-2 rounded-md shadow-md transform -rotate-1">
              <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-wide">
                Celebration 2026
              </span>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 text-sm sm:text-base font-medium text-blue-100">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>1st May 2026, Friday - 9 AM</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Kings Court Palace Grounds, Bangalore</span>
              </div>
            </div>
          </div>

          {/* LUCKY DRAW SECTION */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-100 border-y border-amber-300 px-4 sm:px-8 py-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4">
              🎁 Lucky Draw Prizes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-bold text-gray-800">🥇 Bumper Prize</p>
                <p className="text-green-700 font-semibold">E.V Bike</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-bold text-gray-800">🥈 2nd Prize</p>
                <p className="text-blue-700 font-semibold">
                  Philips Mixer Grinder
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-bold text-gray-800">🥉 3rd Prize</p>
                <p className="text-purple-700 font-semibold">Suitcase</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-bold text-gray-800">🎯 Consolation</p>
                <p className="text-gray-700 font-semibold">
                  Bike Remote System (90 Nos)
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 font-medium">
              🎉 Lucky draw every hour during the event!
            </p>
            <p className="mt-2 text-sm text-red-600 font-semibold">
              Register now by paying ₹500 advance & secure your promo kit.
            </p>
          </div>

          {/* FORM */}
          <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* 1. COMPANY NAME */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  1. NAME OF THE SERVICE CENTRE{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    setErrors((prev) => ({ ...prev, companyName: null }));
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.companyName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your registered company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* 2. PROPRIETORS */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  2. NAME OF THE PROPRIETOR / PARTNERS{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={proprietors}
                  onChange={(e) => {
                    setProprietors(e.target.value);
                    setErrors((prev) => ({ ...prev, proprietors: null }));
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.proprietors
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Full name(s) of proprietor or partners"
                />
                {errors.proprietors && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.proprietors}
                  </p>
                )}
              </div>

              {/* 3. ADDRESS */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  3. ADDRESS
                </label>
                <textarea
                  rows={3}
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Street, Area, Locality"
                />
              </div>

              {/* 4. MOBILE NUMBER */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  4. MOBILE NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={mobileNumber}
                  maxLength={10}
                  onChange={(e) => {
                    setMobileNumber(e.target.value.replace(/\D/g, ""));
                    setErrors((prev) => ({ ...prev, mobileNumber: null }));
                  }}
                  className={`w-full sm:w-1/2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.mobileNumber
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="10-digit mobile number"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>

              {/* 5. BUSINESS NATURE */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  5. BUSINESS NATURE
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="professionalCheck"
                    checked={businessNature.professional?.isProfessional}
                    onChange={(e) =>
                      setBusinessNature((prev) => ({
                        ...prev,
                        professional: { isProfessional: e.target.checked },
                      }))
                    }
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="professionalCheck"
                    className="text-gray-800 font-medium"
                  >
                    PROFESSIONAL
                  </label>
                </div>
                {errors.businessNature && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessNature}
                  </p>
                )}
              </div>

              {/* 6. BUSINESS CATEGORY */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  6. BUSINESS CATEGORY <span className="text-red-500">*</span>
                </label>
                <Select
                  options={categoryOptions}
                  isLoading={categoryLoading}
                  placeholder="Search & select category"
                  value={
                    isCustomCategory
                      ? {
                          value: "__CUSTOM__",
                          label: "+ Add new business category",
                        }
                      : selectedCategoryOptions
                  }
                  onChange={(opt) => {
                    if (opt?.value === "__CUSTOM__") {
                      setIsCustomCategory(true);
                      setBusinessCategory("");
                    } else {
                      setIsCustomCategory(false);
                      setCustomCategoryName("");
                      setBusinessCategory(opt.value);
                    }
                    setErrors((prev) => ({ ...prev, businessCategory: null }));
                  }}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={{
                    control: (base, { isFocused }) => ({
                      ...base,
                      borderColor: errors.businessCategory
                        ? "#ef4444"
                        : isFocused
                          ? "#3b82f6"
                          : "#d1d5db",
                      boxShadow: isFocused ? "0 0 0 1px #3b82f6" : "none",
                      borderRadius: "0.5rem",
                      minHeight: "48px",
                    }),
                  }}
                />
                {isCustomCategory && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Enter your business category"
                      value={customCategoryName}
                      onChange={(e) => {
                        setCustomCategoryName(e.target.value);
                        setErrors((prev) => ({
                          ...prev,
                          businessCategory: null,
                        }));
                      }}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                        errors.businessCategory
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                )}
                {errors.businessCategory && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessCategory}
                  </p>
                )}
              </div>

              {/* 7. SELECT PROMO KIT */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  7. SELECT PROMO KIT <span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  {membershipPlans.map((plan) => {
                    const isChecked = selectedPlans.some(
                      (p) => p._id === plan._id,
                    );
                    const pricing = PLAN_PRICING[plan.name] || {
                      mrp: plan.amount,
                      total: plan.amount,
                      advance: plan.amount,
                      remaining: 0,
                    };
                    return (
                      <div
                        key={plan._id}
                        className={`p-4 border rounded-xl cursor-pointer transition ${
                          isChecked
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300"
                        }`}
                        onClick={() => handlePlanToggle(plan)}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handlePlanToggle(plan)}
                              onClick={(e) => e.stopPropagation()}
                              className="w-5 h-5"
                            />
                            <span className="font-semibold text-gray-800">
                              {plan.name}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
                            <div className="text-gray-500 line-through">
                              MRP: {formatCurrency(pricing.mrp)}
                            </div>
                            <div className="font-semibold text-gray-800">
                              Offer: {formatCurrency(pricing.total)}
                            </div>
                            <div className="text-blue-600 font-bold">
                              Pay Now: {formatCurrency(pricing.advance)}
                            </div>
                            <div className="text-gray-500">
                              Pay Later: {formatCurrency(pricing.remaining)}
                            </div>
                          </div>
                        </div>
                        {plan.description && (
                          <p className="text-sm text-gray-600 mt-3">
                            {plan.description}
                          </p>
                        )}
                        <div className="mt-2 text-xs text-gray-600">
                          You pay {formatCurrency(pricing.advance)} now.
                          Remaining {formatCurrency(pricing.remaining)} during
                          kit collection.
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.selectedPlans && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.selectedPlans}
                  </p>
                )}

                {selectedPlans.length > 0 && (
                  <div className="mt-5 p-4 sm:p-5 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-bold mb-3 text-gray-800">
                      Selected Plans:
                    </h4>
                    <div className="space-y-2">
                      {selectedPlans.map((plan) => (
                        <div
                          key={plan._id}
                          className="flex justify-between text-sm"
                        >
                          <span>{plan.name}</span>
                          <span className="font-semibold">
                            {formatCurrency(plan.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 8. ADVANCE REGISTRATION AMOUNT */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2">
                  8. Advance Registration Amount
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {typeof membershipAmount === "number"
                      ? formatCurrency(membershipAmount)
                      : "—"}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    (non-refundable)
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Amount auto-filled from selected kit
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-auto px-8 sm:px-10 py-4 text-white font-bold rounded-xl shadow-md transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      SUBMITTING...
                    </span>
                  ) : (
                    "SUBMIT APPLICATION →"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* FOOTER */}
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} All India Trade and Industries Forum.
            All rights reserved.
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 text-center animate-fadeIn">
            {/* ICON */}
            <div className="text-green-600 text-5xl mb-3">🎉</div>

            {/* TITLE */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Registration Successful!
            </h2>

            {/* UNIQUE ID */}
            <p className="text-sm text-gray-600 mb-2">Your Registration ID</p>

            <div className="bg-gray-100 border rounded-lg px-4 py-3 font-bold text-lg text-blue-700 tracking-wide">
              {generatedId}
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs text-gray-500 mt-3">
              Please save or share this ID for lucky draw participation
            </p>

            {/* BUTTONS */}
            <div className="mt-5 flex flex-col gap-3">
              {/* COPY */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedId);
                  toast.success("Copied to clipboard!");
                }}
                className="w-full py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm font-semibold"
              >
                Copy ID
              </button>

              {/* WHATSAPP */}
              <button
                onClick={() => {
                  const message = `Hello, I have registered for May Day Event.\nMy Registration ID: ${generatedId}`;
                  const url = `https://wa.me/917013911624?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
                className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                Share on WhatsApp
              </button>

              {/* CLOSE */}
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  resetForm();
                  navigate("/may-day-celebration", { replace: true });
                }}
                className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MayDayCampaign;
