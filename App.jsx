import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import MembershipRegistration from "./pages/MembershipRegistration";
import International from "./pages/International";
import Opinionator from "./pages/Opinionator";
import YLF from "./pages/YLF";
import EWEF from "./pages/EWEF";
import Media from "./pages/Media";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import MemberLogin from "./pages/Member/MemberLogin";
import MemberNotification from "./pages/Member/MemberNotification";
import MemberBlogs from "./pages/Member/MemberBlogs";
import MemberProfile from "./pages/Member/MemberProfile";
import MemberForgotPassword from "./pages/Member/MemberForgotPassword";
import MemberResetPassword from "./pages/Member/MemberResetPassword";
import Services from "./pages/Services";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          {/* <Route
            path="/membership-registration"
            element={<MembershipRegistration />}
          /> */}
          <Route
            path="/membership-registration/:referrerId?"
            element={<MembershipRegistration />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/international" element={<International />} />
          {/* <Route path="/opinionator" element={<Opinionator />} /> */}
          <Route path="/ylf" element={<YLF />} />
          <Route path="/ewef" element={<EWEF />} />
          <Route path="/media" element={<Media />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/member/forgot-password"
            element={<MemberForgotPassword />}
          />
          <Route
            path="/member/reset-password"
            element={<MemberResetPassword />}
          />

          <Route
            path="/member/login"
            element={
              localStorage.getItem("memberToken") ? (
                <Navigate to="/" />
              ) : (
                <MemberLogin />
              )
            }
          />
          <Route
            path="/member/profile"
            element={
              <ProtectedRoute>
                <MemberProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/notifications"
            element={
              <ProtectedRoute>
                <MemberNotification />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/blogs"
            element={
              <ProtectedRoute>
                <MemberBlogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/forgot-password"
            element={
              <ProtectedRoute>
                <MemberForgotPassword />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
