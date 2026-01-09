import React, { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
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
          <Route path="/opinionator" element={<Opinionator />} />
          <Route path="/ylf" element={<YLF />} />
          <Route path="/ewef" element={<EWEF />} />
          <Route path="/media" element={<Media />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
