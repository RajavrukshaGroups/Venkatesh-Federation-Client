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
      //   isProfessional: false,
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

  /* =========================
     SUBMIT LOADER
  ========================= */
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

          // ✅ AUTO SELECT "2W TECHNICIAN"
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

          // ✅ ONLY PROMO KIT PLAN
          const promoPlans = plans.filter((p) =>
            p.name?.toLowerCase().includes("promo kit"),
          );

          setMembershipPlans(promoPlans);

          //   if (!promoPlan) {
          //     toast.error("Promo Kit plan not found");
          //     return;
          //   }

          // 🔥 SET ONLY THIS PLAN
          //   setSelectedPlan(promoPlan);
          //   setMembershipAmount(Number(promoPlan.amount));
          //   setSelectedPlanBenefits(promoPlan.benefits || []);
          //   setShowPlanBenefits(true);
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
     BUSINESS TYPE HANDLER
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

      // 🔥 UPDATE TOTAL AMOUNT
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

  console.log("membership plans", membershipPlans);

  /* =========================
     VALIDATION & SUBMIT HANDLER
  ========================= */

  const validateForm = () => {
    const newErrors = {};

    /* =========================
   BUSINESS NATURE VALIDATION
========================= */
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
      return Object.values(newErrors)[0]; // first error message
    }

    return null;
  };

  const resetForm = () => {
    //address
    setPin("");
    setState("");
    setDistrict("");
    setTaluk("");
    setStreet("");

    //company/contact
    setCompanyName("");
    setProprietors("");
    setMobileNumber("");
    setEmail("");
    setGstNumber("");

    //business
    // setBusinessCategory("");
    const defaultCategory = categories.find(
      (cat) => cat.name?.toLowerCase() === "2w technician",
    );

    if (defaultCategory) {
      setBusinessCategory(defaultCategory._id);
    }
    setBusinessType([]);
    setMajorCommodities(["", ""]);

    //reset business nature
    setBusinessNature({
      manufacturer: {
        isManufacturer: false,
        scale: [],
      },
      trader: {
        isTrader: false,
        type: [],
      },
      professional: {
        // isProfessional: false,
        isProfessional: true,
      },
      other: {
        isOther: false,
      },
    });

    //bank
    setBankName("");
    setAccountNumber("");
    setIfscCode("");
    setSkipBankDetails(false);

    //Membership
    setSelectedPlans([]);
    setMembershipAmount(0);
    setSelectedPlanBenefits([]);
    setShowPlanBenefits(false);

    setIsCustomCategory(false);
    setCustomCategoryName("");

    //errors
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

      /* =========================
       REGISTRATION SNAPSHOT
    ========================= */
      const registrationData = {
        companyName,
        proprietors,
        address: {
          street,
          pin,
          state,
          district,
          taluk,
        },
        mobileNumber,
        email,
        // businessCategory,
        businessCategory,
        customBusinessCategory: isCustomCategory
          ? customCategoryName.trim().toUpperCase()
          : null,
        businessType,
        businessNature,
        majorCommodities: majorCommodities.filter(Boolean),
        gstNumber,
        // bankDetails:
        //   bankName || accountNumber || ifscCode
        //     ? { bankName, accountNumber, ifscCode }
        //     : undefined,
        bankDetails:
          !skipBankDetails && (bankName || accountNumber || ifscCode)
            ? { bankName, accountNumber, ifscCode }
            : undefined,
        referral: referrerId
          ? { source: "USER", referredByUserId: referrerId }
          : { source: "ADMIN" },
      };

      /* =========================
       CREATE ORDER
    ========================= */
      const orderRes = await api.post("/admin/payment/mayday/create-order", {
        formData: {
          ...registrationData,
          selectedPlans,
        },
        amount: membershipAmount, // or fixed amount
      });

      if (!orderRes.success) {
        toast.error("Failed to initiate payment");
        return;
      }

      if (orderRes.message) {
        toast.success(orderRes.message);
      }

      /* =========================
       RAZORPAY OPTIONS
    ========================= */
      const options = {
        key: orderRes.key,
        amount: orderRes.amount * 100,
        currency: "INR",
        name: "All India Trade and Industries Forum",
        description: selectedPlans.map((p) => p.name).join(", "),
        order_id: orderRes.orderId,

        handler: function () {
          toast.success("Payment successful .");
          resetForm();
          navigate("/may-day-celebration", { replace: true });
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

  // ----- PROFESSIONAL REDESIGN UI -----
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 font-sans">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-5xl mx-auto">
        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* HEADER SECTION - DARK BLUE PROFESSIONAL */}
          <div className="bg-gradient-to-r from-[#0B5FA5] to-[#0a4a7a] text-white px-8 py-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              All India Trade and Industries Forum
            </h1>
            <div className="h-0.5 w-24 bg-yellow-400 mx-auto my-4"></div>
            <p className="text-lg md:text-xl font-medium text-blue-100">
              Karnataka Two Wheeler Workshop Owner’s & Technicians Association
              (R.)
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold mt-6 uppercase tracking-wide">
              Auto Expo & May Day
            </h2>

            <div className="mt-4 inline-block bg-red-600 px-8 py-2 rounded-md shadow-md transform -rotate-1">
              <span className="text-2xl md:text-4xl font-black tracking-wide">
                Celebration 2026
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-base font-medium text-blue-100">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
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
                  className="w-5 h-5"
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

          {/* HIGHLIGHT BANNER */}
          <div className="bg-amber-50 border-l-4 border-amber-500 py-3 px-6 text-center">
            <p className="text-amber-800 font-semibold text-lg">
              🎉 9 Lucky Winners get a Private Jet Sightseeing!
            </p>
          </div>

          {/* FORM */}
          <div className="px-6 md:px-12 py-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* COMPANY NAME */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  1. COMPANY NAME <span className="text-red-500">*</span>
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

              {/* PROPRIETORS */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
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

              {/* ADDRESS (STREET) */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
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

              {/* MOBILE NUMBER */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
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
                  className={`w-full md:w-1/2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
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

              {/* BUSINESS NATURE */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
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
                        professional: {
                          isProfessional: e.target.checked,
                        },
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

              {/* BUSINESS CATEGORY */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
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

              {/* MEMBERSHIP PLAN SELECTION */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  7. SELECT MEMBERSHIP PLAN{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  {membershipPlans.map((plan) => {
                    const isChecked = selectedPlans.some(
                      (p) => p._id === plan._id,
                    );

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
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handlePlanToggle(plan)}
                              onClick={(e) => e.stopPropagation()} // 🔥 IMPORTANT
                            />
                            <span className="font-semibold">{plan.name}</span>
                          </div>

                          <span className="font-bold text-blue-600">
                            {formatCurrency(plan.amount)}
                          </span>
                        </div>

                        {plan.description && (
                          <p className="text-sm text-gray-600 mt-2">
                            {plan.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {errors.selectedPlans && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.selectedPlans}
                  </p>
                )}

                {/* Selected Plan Benefits Preview */}
                {selectedPlans.length > 0 && (
                  <div className="mt-5 p-5 bg-blue-50 rounded-xl border">
                    <h4 className="font-bold mb-3">Selected Plans:</h4>

                    {selectedPlans.map((plan) => (
                      <div key={plan._id} className="mb-2">
                        <div className="flex justify-between">
                          <span>{plan.name}</span>
                          <span className="font-semibold">
                            {formatCurrency(plan.amount)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MEMBERSHIP AMOUNT (Auto-filled) */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide mb-2">
                  8. MEMBERSHIP AMOUNT
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {typeof membershipAmount === "number"
                      ? formatCurrency(membershipAmount)
                      : "—"}
                  </span>
                  <span className="text-sm text-gray-500">
                    (non-refundable)
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Amount auto-filled from selected plan
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto px-10 py-4 text-white font-bold rounded-xl shadow-md transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
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
    </div>
  );
};

export default MayDayCampaign;
