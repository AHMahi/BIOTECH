import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "../pages/home";
import Contact from "../pages/Contact";
import Campaign from "../pages/Campaign";
import About from "../pages/About";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Login from "../Authentication/Login";
import ErrorPage from "../pages/ErrorPage";

const Header = () => {
  const [notScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollingDown = scrollTop > 0;
      setIsScrolling(isScrollingDown);
    };

    //added event listener to window which calls the handle scroll function on detecting scroll which changes the useEffect state to true AKA setIsScrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className={`navbar flex justify-between items-center px-16 ${notScrolling ? 'mt-0 bg-gray-900 transition-all duration-200 ease-out py-4' : 'mt-5 transition-all duration-100 ease-in py-6'}`}>
        <div className="header-container">
          <motion.p className="logo text-4xl space-x-2 text-white">
            {/* <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  className="font-semibold text-whit"
                >
                  B
                </motion.span> */}
            {notScrolling ? (
              <>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="font-semibold text-white ease-in"
                >
                  B
                </motion.span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0, x: -20 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="font-semibold text-white ease-in"
                >
                  I
                </motion.span>
                {/* <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.2, delay: 0.48 }}
                  className="font-semibold text-white"
                >
                  :
                </motion.span> */}
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="font-semibold text-white ease-in"
                >
                  O
                </motion.span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="font-semibold text-white ease-in"
                >
                  T
                </motion.span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="font-semibold text-white ease-in"
                >
                  E
                </motion.span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold text-white ease-in"
                >
                  C
                </motion.span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0 }}
                  className="font-semibold text-white ease-in"
                >
                  H
                </motion.span>
              </>
            ) : (
              <>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold text-white"
                >
                  B
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold text-white"
                >
                  I
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="font-semibold text-white"
                >
                  O
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="font-semibold text-white"
                >
                  T
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="font-semibold text-white"
                >
                  E
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-semibold text-white"
                >
                  C
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="font-semibold text-white"
                >
                  H
                </motion.span>
              </>
            )}
          </motion.p>
        </div>
        <div className="menu flex gap-10 text-xl font-bold">
          <Link to="/" className="menuList text-white link-item">
            Home
          </Link>
          <Link to="/about" className="menuList text-white link-item">
            About
          </Link>
          <Link to="/campaign" className="menuList text-white link-item">
            Campaign
          </Link>
          <Link to="/contact" className="menuList text-white link-item">
            Contact
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          <Link
            to="/login"
            className="menuList text-white font-bold link-item border-2 text-xl"
          >
            Log in
          </Link>
          <Link
            to="/demo"
            className="menuList no-hover text-lg font-semibold text-white px-5 py-3 rounded-xl shadow-md bg-black hover:text-white link-item"
          >
            Get Demo{" "}
            <FontAwesomeIcon className="pl-2" icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Header;
