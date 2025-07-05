// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';

const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Experience', to: 'experience' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');

    // ScrollSpy logic
    useEffect(() => {
        Events.scrollEvent.register('begin', () => { });
        Events.scrollEvent.register('end', () => { });
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const offsets = navItems.map((item) => {
                const el = document.getElementById(item.to);
                return { id: item.to, offsetTop: el?.offsetTop || 0 };
            });
            const current = offsets
                .reverse()
                .find((section) => scrollPos >= section.offsetTop - 100);
            setActiveSection(current?.id || 'hero');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dark mode toggle
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-[#0f172a]/80 border-b border-cyan-700 shadow-md transition">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png" // make sure logo.png is in public/
                        alt="Logo"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-bold text-xl text-cyan-500">Abdul Rauf</span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className={`cursor-pointer text-sm font-medium transition-all ${activeSection === item.to
                                    ? 'text-cyan-500 font-semibold'
                                    : 'text-gray-800 dark:text-white hover:text-cyan-400'
                                }`}
                        >
                            {item.name}
                        </ScrollLink>
                    ))}

                    {/* Dark/Light Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 text-xl text-gray-800 dark:text-white hover:text-cyan-500 transition"
                    >
                        {darkMode ? <HiSun /> : <HiMoon />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-2xl text-gray-800 dark:text-white">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-[#0f172a] px-4 pb-4 flex flex-col gap-3"
                    >
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                                className={`cursor-pointer text-base font-medium ${activeSection === item.to
                                        ? 'text-cyan-500'
                                        : 'text-gray-800 dark:text-white hover:text-cyan-400'
                                    }`}
                            >
                                {item.name}
                            </ScrollLink>
                        ))}

                        {/* Mobile Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="mt-3 text-xl text-left text-gray-800 dark:text-white hover:text-cyan-500 transition"
                        >
                            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
