// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-400 border-t border-cyan-800 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} Abdul Rauf. All rights reserved.
                </p>

                <div className="flex gap-6 text-xl justify-center md:justify-end">
                    <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:abdulraufsiddique10@gmail.com"
                        className="hover:text-white transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}
