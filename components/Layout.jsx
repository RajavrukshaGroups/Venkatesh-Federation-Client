import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Building,
  Check,
  LinkIcon,
  Target,
  Phone,
} from "lucide-react";
import forumLogo from "../assets/AITIF_new_logo.png";

const Navbar = () => {
  const member = JSON.parse(localStorage.getItem("member"));
  const isMemberLoggedIn = !!member;

  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: "About Us", path: "/about" },
    {
      name: "Membership",
      path: "/membership",
      // children: [
      //   { name: "FTII Council", path: "/team?tab=council" },
      //   { name: "Office Bearers In States", path: "/team?tab=office_bearers" },
      //   { name: "State Presidents", path: "/team?tab=state_presidents" },
      //   { name: "Honorary Consultants", path: "/team?tab=consultants" },
      //   { name: "FTII Patrons", path: "/team?tab=patrons" },
      //   { name: "National Vice-Presidents", path: "/team?tab=vice_presidents" },
      //   { name: "Advisory Committee", path: "/team?tab=advisory" },
      //   { name: "National Secretary", path: "/team?tab=secretary" },
      //   { name: "Convener", path: "/team?tab=convener" },
      // ],
    },
    { name: "Services", path: "/services" },
    {
      name: "International Forum",
      path: "/international",
      // children: [
      //   {
      //     name: "International Director",
      //     path: "/team?tab=international_director",
      //   },
      //   {
      //     name: "Chairman Int. Council",
      //     path: "/team?tab=international_chairman",
      //   },
      // ],
    },
    // { name: "Opinionator", path: "/opinionator" },
    // {
    //   name: "YLF",
    //   path: "/ylf",
    //   children: [
    //     { name: "Odisha", path: "/team?tab=ylf_odisha" },
    //     { name: "Jammu and Kashmir", path: "/team?tab=ylf_jk" },
    //   ],
    // },
    // {
    //   name: "EWEF",
    //   path: "/ewef",
    //   children: [
    //     { name: "Chair Persons of EWEF", path: "/team?tab=ewef_chairpersons" },
    //   ],
    // },
    // {
    //   name: "Media Room",
    //   path: "/media",
    //   children: [
    //     { name: "Magazine Vyapar Trends", path: "/media?tab=magazine" },
    //     { name: "Gallery", path: "/media?tab=gallery" },
    //     { name: "Blog", path: "/media?tab=blog" },
    //   ],
    // },
    // { name: "Products Promotional", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  // const headerClass = `fixed w-full z-50 transition-all duration-300 ${
  //   isScrolled ? "bg-white shadow-md py-1" : "bg-white shadow-sm py-1"
  // }`;
  const headerClass = `fixed w-full z-50 transition-all duration-300 bg-white ${
    isScrolled ? "shadow-md" : "shadow-sm"
  }`;

  const toggleSubmenu = (name) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };

  return (
    <header className={headerClass}>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 relative z-50 group"
          >
            <div className="w-25 h-25 flex items-center justify-center">
              <img
                src={forumLogo}
                alt="AITIF Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </Link>

          <nav className="hidden xl:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full py-2">
                <Link
                  to={link.path}
                  // className={`flex items-center text-base font-semibold tracking-wide transition-colors ${
                  //   location.pathname === link.path
                  //     ? "text-blue-700 border-b-2 border-blue-700 pb-0.5"
                  //     : "text-navy-900 hover:text-blue-700"
                  // }`}
                  className={`flex items-center text-[17px] font-serif font-bold tracking-widest uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-800 border-b-2 border-blue-800 pb-1"
                      : "text-slate-900 hover:text-blue-800"
                  }`}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>

                {link.children && (
                  <div className="absolute left-0 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white shadow-xl border-t-2 border-blue-700 rounded-b-sm py-1 flex flex-col">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="px-5 py-3 text-xs font-semibold text-navy-800 hover:bg-gray-50 hover:text-blue-700 border-b border-gray-100 last:border-0 uppercase tracking-wider transition-colors flex items-center justify-between group/item"
                        >
                          {child.name}
                          <ChevronRight
                            size={12}
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-600"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {!isMemberLoggedIn && (
              <Link
                to="/member/login"
                className="ml-6 px-4 py-2 rounded bg-blue-700 text-white text-sm font-bold hover:bg-blue-800"
              >
                Member Login
              </Link>
            )}

            {isMemberLoggedIn && (
              <div className="flex items-center gap-4 ml-6">
                <Link
                  to="/member/notifications"
                  className="text-sm font-bold text-navy-900 hover:text-blue-700"
                >
                  Notifications
                </Link>

                <Link
                  to="/member/blogs"
                  className="text-sm font-bold text-navy-900 hover:text-blue-700"
                >
                  Blogs
                </Link>

                <Link
                  to="/member/profile"
                  className="text-sm font-bold text-navy-900 hover:text-blue-700"
                >
                  Profile
                </Link>

                <button
                  onClick={() => {
                    localStorage.removeItem("member");
                    localStorage.removeItem("memberToken");
                    window.location.href = "/";
                  }}
                  className="text-sm font-bold text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>

          <div className="xl:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 relative z-50 group"
          >
            {/* Increased Logo Size */}
            {/* <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={forumLogo}
                alt="AITIF Logo"
                className="w-28 h-28 object-contain" // Increased from w-20 h-20 to w-28 h-28
              />
            </div> */}
            <div className="flex items-center justify-center">
              <img
                src={forumLogo}
                alt="AITIF Logo"
                className="
      w-16 h-16
      sm:w-20 sm:h-20
      lg:w-28 lg:h-28
      object-contain
    "
              />
            </div>

            {/* Optional: Add Organization Name next to Logo on larger screens */}
            {/* <div className="hidden lg:block">
              <div className="text-xl font-bold text-blue-900 leading-tight">
                All India Trade & Industries Forum
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Empowering Trade, Strengthening Industry
              </div>
            </div> */}
          </Link>

          <nav className="hidden xl:flex space-x-10 items-center">
            {" "}
            {/* Increased space-x from 8 to 10 */}
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full py-2">
                <Link
                  to={link.path}
                  className={`flex items-center text-[17px] font-serif font-bold tracking-widest uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-800 border-b-2 border-blue-800 pb-1"
                      : "text-slate-900 hover:text-blue-800"
                  }`}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>

                {link.children && (
                  <div className="absolute left-0 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white shadow-xl border-t-2 border-blue-700 rounded-b-sm py-1 flex flex-col">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="px-5 py-3 text-xs font-semibold text-navy-800 hover:bg-gray-50 hover:text-blue-700 border-b border-gray-100 last:border-0 uppercase tracking-wider transition-colors flex items-center justify-between group/item"
                        >
                          {child.name}
                          <ChevronRight
                            size={12}
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-600"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {!isMemberLoggedIn && (
              <Link
                to="/member/login"
                className="ml-6 px-5 py-2.5 rounded-lg bg-blue-700 text-white text-sm font-bold hover:bg-blue-800 shadow-md hover:shadow-lg transition-all"
              >
                Member Login
              </Link>
            )}
            {isMemberLoggedIn && (
              <div className="flex items-center gap-4 ml-6">
                {/* <Link
                  to="/member/notifications"
                  className="text-sm font-bold text-navy-900 hover:text-blue-700 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                >
                  Notifications
                </Link> */}

                {/* <Link
                  to="/member/blogs"
                  className="text-sm font-bold text-navy-900 hover:text-blue-700 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                >
                  Blogs
                </Link> */}

                <Link
                  to="/member/profile"
                  className="text-sm font-bold text-navy-900 hover:text-blue-700 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                >
                  Profile
                </Link>

                <button
                  onClick={() => {
                    localStorage.removeItem("member");
                    localStorage.removeItem("memberToken");
                    window.location.href = "/";
                  }}
                  className="text-sm font-bold text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>

          <div className="xl:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900 p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        // <div className="fixed inset-0 bg-white z-40 overflow-y-auto pt-24 pb-8 px-4 xl:hidden">
        //   <div className="space-y-1">
        <div className="fixed inset-0 bg-white z-40 xl:hidden">
          <div className="pt-20 px-4 pb-6 max-h-screen overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex justify-between items-center border-b border-gray-100">
                  <Link
                    to={link.path}
                    onClick={() => !link.children && setIsOpen(false)}
                    className={`block px-4 py-4
  text-lg font-semibold
  text-slate-900
  active:bg-blue-50 ${location.pathname === link.path ? "text-blue-700" : ""}`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className="p-4 text-gray-500"
                    >
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform ${
                          openSubmenu === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.children && openSubmenu === link.name && (
                  <div className="bg-gray-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 text-xs font-semibold text-gray-600 hover:text-blue-700 uppercase tracking-wide border-b border-gray-100 last:border-0"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {!isMemberLoggedIn && (
              <Link
                to="/member/login"
                className="ml-6 px-4 py-2 rounded bg-blue-700 text-white text-sm font-bold hover:bg-blue-800"
              >
                Member Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const StickySidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-lime-500 hover:bg-lime-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 rounded-l-md"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="mailto:ftiiassociation@gmail.com"
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 rounded-l-md"
        aria-label="Send Email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div className="space-y-6">
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 font-sans">
                About Us
              </h3>
            </div> */}
            <div className="space-y-4">
              <div className="w-36 h-24 flex items-center justify-center">
                <img
                  src={forumLogo}
                  alt="AITIF Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold">
                  All India Trade and Industries Forum
                </span>
                <br></br>
                is the premier national platform representing India's trade and
                industry ecosystem through advocacy, empowerment, and strategic
                partnerships.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <LinkIcon className="w-6 h-6 text-red-700" />
              </div> */}
              <h3 className="text-xl font-bold text-blue-700 font-sans">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Membership", path: "/membership" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Initiatives Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 font-sans">
                Our Initiatives
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "International Forum", path: "/international" },
                // { name: "Youth Leadership Forum (YLF)", path: "/ylf" },
                // { name: "Empowered Women Forum (EWEF)", path: "/ewef" },
                // { name: "Media Room", path: "/media" },
                // { name: "Trade Awareness Programs", path: "/awareness" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-700" />
              </div> */}
              <h3 className="text-xl font-bold text-blue-700 font-sans">
                Contact Info
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    Head Office
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    B- 1/67, Indira Chowk, near Nanital Bank,
                    <br />
                    New Kondli, Delhi-110096, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-red-700" />
                </div>
                <div>
                  <p className="text-slate-800 text-sm font-semibold">
                    +91 98765 43210
                  </p>
                  <p className="text-slate-600 text-xs">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-700" />
                </div>
                <div>
                  <p className="text-slate-800 text-sm font-semibold">
                    info@aitif.org
                  </p>
                  <p className="text-slate-600 text-xs">General Inquiries</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="font-medium text-slate-700 text-sm mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 hover:bg-blue-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/90 text-xs md:text-sm">
                © {new Date().getFullYear()} All India Trade and Industries
                Forum (AITIF)
              </p>
              <p className="text-white/70 text-xs mt-1">
                Empowering Trade • Strengthening Industry • Driving Growth
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-white/80 hover:text-white text-xs md:text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-4 bg-white/40"></div>
              <Link
                to="/terms"
                className="text-white/80 hover:text-white text-xs md:text-sm transition-colors"
              >
                Terms of Use
              </Link>
              <div className="w-px h-4 bg-white/40"></div>
              <Link
                to="/sitemap"
                className="text-white/80 hover:text-white text-xs md:text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Navbar />
      <StickySidebar />
      <main className="flex-grow pt-[96px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
