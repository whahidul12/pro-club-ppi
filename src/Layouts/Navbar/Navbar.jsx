import { Link, NavLink } from "react-router";
import logo from "../../assets/Images/logo-img.png";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // main dropdown (services, about, ...)
  const [openByClick, setOpenByClick] = useState(false); // whether main was opened by click
  const [openNested, setOpenNested] = useState(null); // nested submenu name (e.g. 'frontend')
  const [openNestedByClick, setOpenNestedByClick] = useState(false); // nested opened by click
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null); // mobile accordion for main dropdowns
  const [mobileNested, setMobileNested] = useState(null); // mobile nested accordion
  const [canHover, setCanHover] = useState(false);
  const navRef = useRef(null);

  // timers: separate for main and nested close delays
  const mainCloseTimerRef = useRef(null);
  const nestedCloseTimerRef = useRef(null);

  // detect hover capability
  // detect hover capability
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia && window.matchMedia("(hover: hover)");
    const set = () => setCanHover(!!mq && mq.matches);
    set();
    if (mq?.addEventListener) {
      mq.addEventListener("change", set);
    }
    return () => {
      if (mq?.removeEventListener) {
        mq.removeEventListener("change", set);
      }
    };
  }, []);

  // outside click/touch closes everything
  useEffect(() => {
    function onPointerDown(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        clearMainTimer();
        clearNestedTimer();
        setOpenDropdown(null);
        setOpenByClick(false);
        setOpenNested(null);
        setOpenNestedByClick(false);
        setMobileOpen(false);
        setMobileSubmenu(null);
        setMobileNested(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // timer helpers
  const clearMainTimer = () => {
    if (mainCloseTimerRef.current) {
      clearTimeout(mainCloseTimerRef.current);
      mainCloseTimerRef.current = null;
    }
  };
  const startMainTimer = (delay = 200) => {
    clearMainTimer();
    mainCloseTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenByClick(false);
      // also close nested
      setOpenNested(null);
      setOpenNestedByClick(false);
      mainCloseTimerRef.current = null;
    }, delay);
  };

  const clearNestedTimer = () => {
    if (nestedCloseTimerRef.current) {
      clearTimeout(nestedCloseTimerRef.current);
      nestedCloseTimerRef.current = null;
    }
  };
  const startNestedTimer = (delay = 180) => {
    clearNestedTimer();
    nestedCloseTimerRef.current = setTimeout(() => {
      setOpenNested(null);
      setOpenNestedByClick(false);
      nestedCloseTimerRef.current = null;
    }, delay);
  };

  // Main region enter/leave (wraps button + panel)
  const handleRegionEnter = (name) => {
    clearMainTimer();
    if (canHover) {
      setOpenDropdown(name);
      setOpenByClick(false);
    }
  };
  const handleRegionLeave = () => {
    if (canHover && !openByClick) startMainTimer();
  };

  // Nested region enter/leave (wraps nested trigger + nested panel)
  const handleNestedEnter = (name) => {
    clearNestedTimer();
    if (canHover) {
      setOpenNested(name);
      setOpenNestedByClick(false);
    }
  };
  const handleNestedLeave = () => {
    if (canHover && !openNestedByClick) startNestedTimer();
  };

  // Click toggles for main and nested
  const handleToggleClick = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
      setOpenByClick(false);
      // also close nested when closing main
      setOpenNested(null);
      setOpenNestedByClick(false);
    } else {
      clearMainTimer();
      setOpenDropdown(name);
      setOpenByClick(true);
    }
  };
  const handleNestedToggleClick = (name) => {
    if (openNested === name) {
      setOpenNested(null);
      setOpenNestedByClick(false);
    } else {
      clearNestedTimer();
      setOpenNested(name);
      setOpenNestedByClick(true);
    }
  };

  return (
    <nav ref={navRef} className="bg-bg-white sticky top-0 z-50 shadow">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to={"/"}
              className="text-brand flex items-center text-xl font-bold md:text-2xl"
            >
              <img src={logo} alt="logo" className="w-8" />
              Programming Club
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden items-center md:flex">
            {/* Services: wrapper region listens to pointer enter/leave */}
            <NavLink className="text-text-primary hover:text-brand px-2 py-2 font-medium">
              Home
            </NavLink>
            <NavLink className="text-text-primary hover:text-brand px-2 py-2 font-medium">
              Our Story
            </NavLink>

            {/* About: keep same pattern (no nested here but could be added similarly) */}
            <div
              className="relative"
              onPointerEnter={() => handleRegionEnter("about")}
              onPointerLeave={handleRegionLeave}
            >
              <button
                onClick={() => handleToggleClick("about")}
                aria-expanded={openDropdown === "about"}
                aria-controls="about-menu"
                className="hover:text-brand text-text-primary flex items-center px-2 py-2 font-medium"
              >
                Activities
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === "about" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="about-menu"
                className={`absolute left-0 z-20 mt-4 w-48 origin-top transform rounded-md bg-white py-2 shadow-lg transition-all duration-200 ${
                  openDropdown === "about"
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-2 scale-95 opacity-0"
                }`}
              >
                <NavLink
                  to={"/activities"}
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Current Activities
                </NavLink>
                <NavLink
                  to={"/activities"}
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Upcomming Activities
                </NavLink>
                <NavLink
                  to={"/activities"}
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Past Activities
                </NavLink>
              </div>
            </div>
            <div
              className="relative"
              onPointerEnter={() => handleRegionEnter("services")}
              onPointerLeave={handleRegionLeave}
            >
              <NavLink
                onClick={() => handleToggleClick("services")}
                aria-expanded={openDropdown === "services"}
                aria-controls="services-menu"
                className="hover:text-brand text-text-primary flex items-center px-2 py-2 font-medium"
              >
                Members
                <svg
                  className={`mx-0 h-4 w-4 transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </NavLink>

              {/* dropdown panel (MAIN) */}
              <div
                id="services-menu"
                className={`absolute left-0 z-30 mt-4 w-64 origin-top transform rounded-md bg-white py-2 shadow-lg transition-all duration-200 ${
                  openDropdown === "services"
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-2 scale-95 opacity-0"
                }`}
              >
                {/* First item with nested submenu */}
                <div
                  className="relative"
                  onPointerEnter={() =>
                    handleNestedEnter("frontend")
                  } /* nested region enter */
                  onPointerLeave={handleNestedLeave} /* nested region leave */
                >
                  <button
                    onClick={() => handleNestedToggleClick("frontend")}
                    aria-expanded={openNested === "frontend"}
                    aria-controls="frontend-menu"
                    className="hover:text-brand text-text-primary hover:bg-bg-ice flex w-full items-center justify-between rounded-md px-4 py-2 text-left transition-colors duration-150"
                  >
                    <span>Patron Council</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        openNested === "frontend" ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* NESTED submenu (appears to the right of parent item) */}
                  <div
                    id="frontend-menu"
                    className={`absolute top-0 right-full z-40 mr-1 w-56 origin-left transform rounded-md bg-white py-2 shadow-lg transition-all duration-200 ${
                      openNested === "frontend"
                        ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
                        : "pointer-events-none translate-x-2 scale-95 opacity-0"
                    }`}
                  >
                    <a
                      href="#"
                      className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                    >
                      Present (25-26)
                    </a>
                    <a
                      href="#"
                      className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                    >
                      Previous (24-25)
                    </a>
                  </div>
                </div>

                {/* Other items in main dropdown */}
                <a
                  href="#"
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Advisory Council
                </a>
                <a
                  href="#"
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Mentor Council
                </a>
                <a
                  href="#"
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Founding Council
                </a>
                <a
                  href="#"
                  className="hover:text-brand text-text-primary hover:bg-bg-ice block px-4 py-2 transition-colors duration-150"
                >
                  Executive Committee
                </a>
              </div>
            </div>
            <NavLink className="px-2 py-2 font-medium">News</NavLink>
            <NavLink
              href="#"
              className="hover:text-brand text-text-primary px-2 py-2 font-medium"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#2B7FFF]"
            >
              {/* Improved hamburger -> X: centered bars that animate cleanly */}
              <div className="relative h-6 w-6">
                <span
                  className={`absolute top-1/2 left-0 h-0.5 w-6 transform bg-white transition-all duration-300 ${
                    mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 h-0.5 w-6 transform bg-white transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : "translate-y-0 opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 h-0.5 w-6 transform bg-white transition-all duration-300 ${
                    mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="space-y-1 px-4 py-4">
          {/* Services accordion */}
          <div>
            <button
              onClick={() => {
                setMobileSubmenu(
                  mobileSubmenu === "services" ? null : "services",
                );
                // close nested mobile when main closed
                if (mobileSubmenu === "services") setMobileNested(null);
              }}
              className="text-text-primary hover:bg-bg-ice flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium"
            >
              <span>Services</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  mobileSubmenu === "services" ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`mt-2 space-y-1 overflow-hidden pl-4 transition-all duration-300 ${
                mobileSubmenu === "services" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {/* Nested accordion inside mobile Services */}
              <div className="-mb-1">
                <button
                  onClick={() =>
                    setMobileNested(
                      mobileNested === "frontend" ? null : "frontend",
                    )
                  }
                  className="text-text-primary hover:bg-bg-ice flex w-full items-center justify-between rounded-md border-l-2 px-3 py-2 text-left font-medium"
                >
                  <span>Web Development</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      mobileNested === "frontend" ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`mt-1 mb-2 space-y-1 overflow-hidden pl-4 transition-all duration-300 ${
                    mobileNested === "frontend" ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <a
                    href="#"
                    className="text-text-primary hover:bg-bg-ice block rounded-md border-l-2 px-3 py-2"
                  >
                    React
                  </a>
                  <a
                    href="#"
                    className="text-text-primary hover:bg-bg-ice block rounded-md border-l-2 px-3 py-2"
                  >
                    Vue
                  </a>
                  <a
                    href="#"
                    className="text-text-primary hover:bg-bg-ice block rounded-md border-l-2 px-3 py-2"
                  >
                    Svelte
                  </a>
                </div>
              </div>

              <a
                href="#"
                className="text-text-primary hover:bg-bg-ice block rounded-md border-l-2 px-3 py-2 font-medium"
              >
                Mobile Apps
              </a>
              <a
                href="#"
                className="text-text-primary hover:bg-bg-ice block rounded-md border-l-2 px-3 py-2 font-medium"
              >
                UI / UX Design
              </a>
            </div>
          </div>

          {/* About accordion */}
          <div>
            <button
              onClick={() =>
                setMobileSubmenu(mobileSubmenu === "about" ? null : "about")
              }
              className="text-text-primary hover:bg-bg-ice flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium"
            >
              <span>About</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  mobileSubmenu === "about" ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`mt-2 space-y-1 overflow-hidden pl-4 transition-all duration-300 ${
                mobileSubmenu === "about" ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <a
                href="#"
                className="text-text-primary hover:bg-bg-ice block rounded-md px-3 py-2 font-medium"
              >
                Company
              </a>
              <a
                href="#"
                className="text-text-primary hover:bg-bg-ice block rounded-md px-3 py-2 font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-text-primary hover:bg-bg-ice block rounded-md px-3 py-2 font-medium"
              >
                Careers
              </a>
            </div>
          </div>

          <NavLink
            href="#"
            className="text-text-primary hover:bg-bg-ice block rounded-md px-3 py-2 font-medium"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
