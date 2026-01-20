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
  Check,
} from "lucide-react";

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
      children: [
        { name: "FTII Council", path: "/team?tab=council" },
        { name: "Office Bearers In States", path: "/team?tab=office_bearers" },
        { name: "State Presidents", path: "/team?tab=state_presidents" },
        { name: "Honorary Consultants", path: "/team?tab=consultants" },
        { name: "FTII Patrons", path: "/team?tab=patrons" },
        { name: "National Vice-Presidents", path: "/team?tab=vice_presidents" },
        { name: "Advisory Committee", path: "/team?tab=advisory" },
        { name: "National Secretary", path: "/team?tab=secretary" },
        { name: "Convener", path: "/team?tab=convener" },
      ],
    },
    {
      name: "International Forum",
      path: "/international",
      children: [
        {
          name: "International Director",
          path: "/team?tab=international_director",
        },
        {
          name: "Chairman Int. Council",
          path: "/team?tab=international_chairman",
        },
      ],
    },
    // { name: "Opinionator", path: "/opinionator" },
    {
      name: "YLF",
      path: "/ylf",
      children: [
        { name: "Odisha", path: "/team?tab=ylf_odisha" },
        { name: "Jammu and Kashmir", path: "/team?tab=ylf_jk" },
      ],
    },
    {
      name: "EWEF",
      path: "/ewef",
      children: [
        { name: "Chair Persons of EWEF", path: "/team?tab=ewef_chairpersons" },
      ],
    },
    {
      name: "Media Room",
      path: "/media",
      children: [
        { name: "Magazine Vyapar Trends", path: "/media?tab=magazine" },
        { name: "Gallery", path: "/media?tab=gallery" },
        { name: "Blog", path: "/media?tab=blog" },
      ],
    },
    // { name: "Products Promotional", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-md py-2 text-navy-900"
      : "bg-white shadow-sm py-4 text-navy-900"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 relative z-50 group"
          >
            <div className="w-12 h-12 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-red-600 animate-spin-slow opacity-20"></div>
              <div className="w-10 h-10 bg-white rounded-full border border-blue-800 flex items-center justify-center text-blue-900 font-serif font-bold text-lg shadow-sm z-10">
                <span className="text-red-600">F</span>TII
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full py-2">
                <Link
                  to={link.path}
                  className={`flex items-center text-sm font-bold tracking-tight transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-700 border-b-2 border-blue-700 pb-0.5"
                      : "text-navy-900 hover:text-blue-700"
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
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 overflow-y-auto pt-24 pb-8 px-4 xl:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex justify-between items-center border-b border-gray-100">
                  <Link
                    to={link.path}
                    onClick={() => !link.children && setIsOpen(false)}
                    className={`block px-3 py-4 text-base font-bold text-navy-900 ${
                      location.pathname === link.path ? "text-blue-700" : ""
                    }`}
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
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-700 font-sans">
              About Us
            </h3>
            <div className="flex flex-col items-start gap-4">
              <div className="w-24 h-24 relative flex-shrink-0">
                <div className="w-full h-full rounded-full border-4 border-blue-600 flex items-center justify-center relative bg-white">
                  <div className="absolute inset-1 border border-dashed border-red-500 rounded-full animate-spin-slow opacity-50"></div>
                  <span className="font-serif font-bold text-3xl text-red-600">
                    FTII
                  </span>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-bold text-justify">
                The Federation of Trade and Industry of India (FTII) is a
                national organization that serves as the voice of India’s Trade
                and Industry.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-700 font-sans">
              Useful Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                // { name: "Opinionator", path: "/opinionator" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="flex items-center group">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <div className="w-4 h-4 rounded-full border-2 border-red-600 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-slate-600 hover:text-blue-700 font-bold text-sm transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-700 font-sans">
              Useful Resources
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Membership", path: "/membership" },
                { name: "International Forum", path: "/international" },
                { name: "YLF", path: "/ylf" },
                { name: "EWEF", path: "/ewef" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="flex items-center group">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <div className="w-4 h-4 rounded-full border-2 border-blue-700 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-slate-600 hover:text-blue-700 font-bold text-sm transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-700 font-sans">
              Connect with Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="mr-3 shrink-0 text-red-500">
                  <Mail size={22} />
                </div>
                <span className="text-slate-900 font-bold text-sm">
                  ftiiassociation@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 shrink-0 text-red-500">
                  <MapPin size={22} />
                </div>
                <span className="text-slate-900 font-bold text-sm leading-relaxed">
                  B- 1/67, Indira Chowk, near Nanital Bank, New Kondli,
                  Delhi-110096.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-4 border-t border-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs opacity-80 font-medium">
            © 2023 FTII | All Rights are Reserved
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Facebook
              size={18}
              className="hover:text-gold-400 cursor-pointer"
            />
            <Twitter size={18} className="hover:text-gold-400 cursor-pointer" />
            <Instagram
              size={18}
              className="hover:text-gold-400 cursor-pointer"
            />
            <Linkedin
              size={18}
              className="hover:text-gold-400 cursor-pointer"
            />
            <Youtube size={18} className="hover:text-gold-400 cursor-pointer" />
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
      <main className="flex-grow pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
