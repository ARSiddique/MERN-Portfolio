import { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Experience", id: "experience" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  // Sync theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefersDark;

    setDarkMode(initial);
    document.documentElement.classList.toggle("dark", initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // ScrollSpy
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 140;
    let current = "hero";

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el && el.offsetTop <= scrollY) current = item.id;
    });

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Glass bar */}
      <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-black/5 dark:border-white/10">
        {/* subtle gradient line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <ScrollLink
            to="hero"
            smooth
            offset={-90}
            duration={500}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Abdul Rauf Logo"
                className="h-9 w-9 rounded-full ring-2 ring-cyan-400/40 shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
            </div>

            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  Abdul Rauf
                </span>
                <span className="hidden sm:inline-flex text-[11px] px-2 py-0.5 rounded-full border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 bg-cyan-400/10">
                  MERN Dev
                </span>
              </div>
              <span className="hidden sm:block text-xs text-slate-600 dark:text-slate-300">
                Full-Stack • UI/UX • APIs
              </span>
            </div>
          </ScrollLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy
                  smooth
                  offset={-90}
                  duration={500}
                  className={[
                    "cursor-pointer px-3 py-2 text-sm font-medium rounded-full transition",
                    active
                      ? "text-cyan-700 dark:text-cyan-200 bg-cyan-400/15 border border-cyan-400/25 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                      : "text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/5",
                  ].join(" ")}
                >
                  {item.label}
                </ScrollLink>
              );
            })}

            {/* Theme toggle (pill switch) */}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="ml-2 group flex items-center gap-2 px-3 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition"
            >
              <span className="text-base text-slate-800 dark:text-slate-100">
                {darkMode ? <HiSun /> : <HiMoon />}
              </span>
              <span className="hidden lg:inline text-xs text-slate-600 dark:text-slate-300">
                {darkMode ? "Light" : "Dark"}
              </span>
            </button>
          </div>

          {/* Mobile button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 transition text-slate-900 dark:text-white"
          >
            {menuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
            />

            {/* panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden fixed top-[64px] left-0 right-0 mx-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item) => {
                    const active = activeSection === item.id;
                    return (
                      <ScrollLink
                        key={item.id}
                        to={item.id}
                        spy
                        smooth
                        offset={-85}
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                        className={[
                          "cursor-pointer px-3 py-2 rounded-xl text-sm font-medium transition text-center",
                          active
                            ? "text-cyan-700 dark:text-cyan-200 bg-cyan-400/15 border border-cyan-400/25"
                            : "text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5",
                        ].join(" ")}
                      >
                        {item.label}
                      </ScrollLink>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 transition text-slate-900 dark:text-white"
                  >
                    <span className="text-lg">{darkMode ? <HiSun /> : <HiMoon />}</span>
                    <span className="text-sm font-medium">
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </span>
                  </button>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
