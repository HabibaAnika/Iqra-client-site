import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../providers/LanguageProvider";

import Dropdown from "./smallDevice/Dropdown";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const { language, switchLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  
  
    useEffect(() => {
      const handleScroll = () => {
        const threshold = window.innerWidth < 640 ? 10 : 50; // Lower threshold for smaller screens
        setIsScrolled(window.scrollY > threshold);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      
    }; }, []);
  const navItems = [
    { link: "/", label: language === "en" ? "Home" : "হোম" },
    {
      label: language === "en" ? "About" : "সম্পর্কে",
      items: [
        {
          link: "/teachers",
          label: language === "en" ? "Our Teachers" : "আমাদের শিক্ষকমণ্ডলী",
        },
        { link: "/rules", label: language === "en" ? "Our Rules" : "নীতিমালা" },
      ],
    },
    {
      label: language === "en" ? "All Courses" : "সকল কোর্স",
      items: [
        {
          link: "/basic",
          label:
            language === "en"
              ? "Basic Learning Quran"
              : "প্রাথমিক কোরআন শিক্ষা",
        },
        {
          link: "/nazera",
          label: language === "en" ? "Advance Quran Course" : "নাযেরা কোর্স",
        },
        {
          link: "/ampara",
          label:
            language === "en"
              ? "30th Part Memorizing Course"
              : "আমপারা হিফয কোর্স",
        },
        {
          link: "/hifz",
          label:
            language === "en"
              ? "Memorizing All Quran Course"
              : "সম্পূর্ণ কোরআন হিফয কোর্স",
        },
        {
          link: "/revise",
          label: language === "en" ? "Hifz Revise Course" : "হিফয সংশোধন কোর্স",
        },
        {
          link: "/special",
          label:
            language === "en"
              ? "Special Surahs Memorize Course"
              : "ফযিলতের সূরা হিফয কোর্স",
        },
        {
          link: "/alim",
          label: language === "en" ? "Alim Course" : "আলিম কোর্স",
        },
        {
          link: "/need",
          label: language === "en" ? "Need For Ummah Course" : "ফরজে আইন কোর্স",
        },
        {
          link: "/quran",
          label:
            language === "en"
              ? "Quran Translation Course"
              : "কোরআন তরজমা কোর্স",
        },
        {
          link: "/bio",
          label:
            language === "en"
              ? "Biography Of Prophet's Course"
              : "নবীদের সিরাত কোর্স",
        },
        {
          link: "/law",
          label:
            language === "en"
              ? "Inheritance law Course"
              : "উত্তরাধিকার আইন কোর্স",
        },
        {
          link: "/prayer",
          label:
            language === "en"
              ? "Prayer and Masael Education Course"
              : "নামাজ ও মাসায়েল শিক্ষা কোর্স",
        },
      ],
    },
    { link: "/blog", label: language === "en" ? "Blog" : "ব্লগ" },
  ];
  
  const navbarVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to a search results page or handle search logic here
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <motion.div
      className="z-50 xl:w-full w-screen fixed top-[52px] transition-all duration-300"
      style={isScrolled ? navbarVariants.scrolled : {}}
    >
      <div className="max-w-[80%] mx-auto py-1">
        <motion.div
          className="navbar"
          initial="initial"
          animate="animate"
          variants={navbarVariants}
        >
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <motion.button
                tabIndex={0}
                className="btn btn-ghost xl:hidden"
                aria-label="Open Menu"
               
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </motion.button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow overflow-y-auto"
              >
                {navItems.map((item, index) =>
                  item.items ? (
                    <Dropdown
                      key={index}
                      label={item.label}
                      items={item.items}
                    />
                  ) : (
                    <motion.li
                      key={index}
                      className="mb-1"
                     
                    >
                      <NavLink to={item.link}>{item.label}</NavLink>
                    </motion.li>
                  )
                )}
                <form className="max-w-md mx-auto mt-2" onSubmit={handleSearch}>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pl-3">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="mobile-search"
                      className="block w-full pl-10 text-sm border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
                      placeholder={
                        language === "en" ? "Search..." : "অনুসন্ধান করুন..."
                      }
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </ul>
            </div>

            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-12 lg:w-16"
                src="https://i.ibb.co/YbLDnmN/Artboard-4-4x.png"
                alt="IQRA Logo"
              />
              <div className="hidden lg:flex flex-col items-start">
                <Link to="/" className="font-black text-xl tracking-widest">
                  {language === "en" ? "IQRA" : "ইক্বরা"}
                </Link>
                <Link to="/" className="font-thin text-xs tracking-wide">
                  {language === "en" ? "QAWMI INSTITUTE" : "কওমি ইনস্টিটিউট"}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden xl:flex">
            <ul className="menu menu-horizontal">
              {navItems.map((item, index) =>
                item.items ? (
                  <Dropdown key={index} label={item.label} items={item.items} />
                ) : (
                  <motion.li
                    key={index}
                    
                  >
                    <NavLink to={item.link}>{item.label}</NavLink>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Navbar End */}
          <motion.div className="navbar-end xl:mr-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {language === "bn" ? "বাংলা" : "English"}
                </span>
                <motion.input
                  type="checkbox"
                  className="toggle"
                  onChange={(e) =>
                    switchLanguage(e.target.checked ? "en" : "bn")
                  }
                  checked={language === "en"}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
