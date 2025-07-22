import { useState, useEffect, useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';

const NAV_ITEMS = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Experience', id: 'experience' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mounted, setMounted] = useState(false);

    // Sync theme on mount to avoid SSR mismatch
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = saved ? saved === 'dark' : prefersDark;
        setDarkMode(initial);
        document.documentElement.classList.toggle('dark', initial);
        setMounted(true);
    }, []);

    // Toggle theme by toggling the .dark class on <html>
    const toggleTheme = () => {
        setDarkMode(prev => {
            const next = !prev;
            document.documentElement.classList.toggle('dark', next);
            localStorage.setItem('theme', next ? 'dark' : 'light');
            return next;
        });
    };

    // ScrollSpy
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY + 120;
        let current = 'hero';
        NAV_ITEMS.forEach(item => {
            const el = document.getElementById(item.id);
            if (el && el.offsetTop <= scrollY) current = item.id;
        });
        setActiveSection(current);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Prevent background scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    if (!mounted) return null; // avoid hydration mismatch

    return (
        <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-cyan-700 shadow transition-colors">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <ScrollLink to="hero" smooth offset={-80} duration={500} className="flex items-center gap-2 cursor-pointer">
                    <img src="/logo.png" alt="Abdul Rauf Logo" className="h-8 w-8 rounded-full" />
                    <span className="text-xl font-bold text-cyan-500">Abdul Rauf</span>
                </ScrollLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_ITEMS.map(item => (
                        <ScrollLink
                            key={item.id}
                            to={item.id}
                            spy smooth offset={-80} duration={500}
                            className={`cursor-pointer text-sm font-medium transition ${activeSection === item.id
                                    ? 'text-cyan-500'
                                    : 'text-gray-800 dark:text-gray-200 hover:text-cyan-400'
                                }`}
                        >
                            {item.label}
                        </ScrollLink>
                    ))}

                    <button
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                        className="ml-4 cursor-pointer text-xl text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition"
                    >
                        {darkMode ? <HiSun /> : <HiMoon />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(open => !open)}
                    className="md:hidden cursor-pointer text-2xl text-gray-800 dark:text-gray-200"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-cyan-700"
                    >
                        <div className="flex flex-col gap-4 p-4">
                            {NAV_ITEMS.map(item => (
                                <ScrollLink
                                    key={item.id}
                                    to={item.id}
                                    spy smooth offset={-70} duration={500}
                                    onClick={() => setMenuOpen(false)}
                                    className={`cursor-pointer text-base font-medium transition ${activeSection === item.id
                                            ? 'text-cyan-500'
                                            : 'text-gray-800 dark:text-gray-200 hover:text-cyan-400'
                                        }`}
                                >
                                    {item.label}
                                </ScrollLink>
                            ))}

                            <button
                                aria-label="Toggle theme"
                                onClick={toggleTheme}
                                className="mt-2 cursor-pointer text-left text-xl text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition"
                            >
                                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}