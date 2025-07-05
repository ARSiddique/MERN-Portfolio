// src/components/Navbar.jsx
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

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

    return (
        <nav className="bg-[#0f172a] fixed top-0 left-0 right-0 z-50 shadow-md border-b border-cyan-700">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="text-2xl font-bold text-cyan-400">
                    Abdul Rauf
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    {navItems.map((item, index) => (
                        <ScrollLink
                            key={index}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="cursor-pointer text-white hover:text-cyan-400 transition"
                            activeClass="text-cyan-400 font-semibold"
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden text-white text-2xl">
                    <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#0f172a] px-4 pb-4 flex flex-col gap-3"
                >
                    {navItems.map((item, index) => (
                        <ScrollLink
                            key={index}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer text-white hover:text-cyan-400"
                            activeClass="text-cyan-400 font-semibold"
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
