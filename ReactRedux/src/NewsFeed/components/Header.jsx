import React from "react";
import TeslaNews from "../TeslaNews";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`bg-slate-700 flex px-10 justify-between items-end h-25 fixed top-0 left-0 right-0 z-50 shadow transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1 className="text-2xl font-bold bg-linear-to-tr from-stone-600 to-stone-400 p-3 rounded-tl-3xl rounded-br-3xl mb-5">
          News App
        </h1>
        <nav className=" ">
          <ul className="flex w-full justify-between">
            <li className="text-xl font-semibold flex gap-10">
              <Link
                to="/"
                className="relative group hover:text-white transition-colors py-2 px-4 hover:bg-stone-700/70 "
              >
                Home
                <span className="absolute top-11 bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                to="/tesla"
                className="relative group hover:text-white transition-colors py-2 px-4 hover:bg-stone-700/40 "
              >
                Tesla
                <span className="absolute top-11 bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                to=""
                className="relative group hover:text-white transition-colors py-2 px-4 hover:bg-stone-700/40 "
              >
                Apple
                <span className="absolute top-11 bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                to=""
                className="relative group hover:text-white transition-colors py-2 px-4 hover:bg-stone-700/40 "
              >
                Top business
                <span className="absolute top-11 bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                to=""
                className="relative group hover:text-white transition-colors py-2 px-4 hover:bg-stone-700/40 "
              >
                Top Headlines
                <span className="absolute top-11 bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                to=""
                className="relative group hover:text-white transition-colors py-2 px-4 hover:bg-stone-700/40 "
              >
                Wall Street Journal
                <span className="absolute top-11 bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mb-5 flex gap-10 ">
          <button className="text-xl cursor-pointer font-semibold">
            Login
          </button>
          <button className="text-xl bg-neutral-800 cursor-pointer p-4 font-semibold rounded-xl transition-all duration-200 ease-in-out hover:bg-neutral-700">
            Subscribe
          </button>
        </div>
      </header>
      <div className="pt-32">
        <Routes>
          <Route
            path="/"
            element={<h2 className="text-5xl text-center"></h2>}
          />
          <Route path="/tesla" element={<TeslaNews />} />
        </Routes>
      </div>
    </>
  );
};

export default Header;
