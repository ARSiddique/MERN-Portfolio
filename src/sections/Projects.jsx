// src/sections/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Online Quran Academy',
        description: 'A full-stack role-based LMS with login, dashboard, student-teacher roles, and admin panel using MERN + Tailwind + ShadCN UI.',
        image: '/project1.jpg', // 👈 Replace with your real image path
        link: 'https://your-oqa-live-link.com',
        github: 'https://github.com/yourusername/oqa'
    },
    {
        title: 'Car Rental Web App',
        description: 'A modern car rental web app with secure backend, admin dashboard, and payment flow using MERN & JWT Auth.',
        image: '/project2.jpg',
        link: 'https://your-car-rental.com',
        github: 'https://github.com/yourusername/car-rental'
    },
    {
        title: 'Portfolio Website',
        description: 'My own responsive and animated portfolio using React, Tailwind CSS, Framer Motion, Lottie and GSAP.',
        image: '/project3.jpg',
        link: '#',
        github: 'https://github.com/yourusername/portfolio'
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-600/40 transition transform hover:scale-[1.02]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white hover:underline"
                                    >
                                        🔗 Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white hover:underline"
                                    >
                                        💻 GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
