import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaChevronUp } from 'react-icons/fa';
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

export default function Footer() {
    return (
        <>
            <footer className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 py-6 px-4 transition-colors">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left: Copyright */}
                    <p className="text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Abdul Rauf. All rights reserved.
                    </p>
                    {/* Right: Social Links */}
                    <div className="flex gap-6 text-xl justify-center md:justify-end">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                            aria-label="Visit my GitHub profile"
                        >
                            <FaGithub aria-hidden="true" />
                        </a>
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 dark:hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                            aria-label="Visit my LinkedIn profile"
                        >
                            <FaLinkedin aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Sticky Left: Contact & WhatsApp */}
            <div className="fixed bottom-8 left-6 flex flex-col gap-4 z-50">
                <ScrollLink
                    to="contact"
                    smooth
                    duration={500}
                    offset={-80}
                    aria-label="Go to contact form"
                    className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                >
                    <FaEnvelope size={20} aria-hidden="true" />
                </ScrollLink>
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <FaWhatsapp size={20} aria-hidden="true" />
                </a>
            </div>

            {/* Sticky Right: Back to Top */}
            <div className="fixed bottom-8 right-4 z-10">
                <ScrollLink
                    to="hero"
                    smooth
                    duration={500}
                    offset={-80}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-8 z-50 
             bg-cyan-600 hover:bg-cyan-700 
             dark:bg-cyan-500 dark:hover:bg-cyan-600 
             text-white p-2 rounded-full 
             shadow-2xl transform hover:scale-110 
             transition-colors cursor-pointer 
             focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    <FaChevronUp size={24} aria-hidden="true" />
                </ScrollLink>
            </div>
        </>
    );
}
