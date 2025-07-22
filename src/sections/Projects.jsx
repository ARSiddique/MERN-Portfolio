import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
    {
        title: 'Online Quran Academy',
        description:
            'A full-stack role-based LMS with login, dashboard, student-teacher roles, and admin panel using MERN, Tailwind & ShadCN UI.',
        image: '/project1.jpg',
        link: 'https://your-oqa-live-link.com',
        github: 'https://github.com/yourusername/oqa',
    },
    {
        title: 'Car Rental Web App',
        description:
            'A modern car rental app with secure backend, admin dashboard, and payment flow using MERN & JWT Auth.',
        image: '/project2.jpg',
        link: 'https://your-car-rental.com',
        github: 'https://github.com/yourusername/car-rental',
    },
    {
        title: 'Portfolio Website',
        description:
            'My own responsive portfolio with animations using React, Tailwind, Framer Motion, Lottie & GSAP.',
        image: '/project3.jpg',
        link: null,
        github: 'https://github.com/yourusername/portfolio',
    },
    {
        title: 'Diamond Star Printing Works',
        description:
            'Print business website on WordPress, showcasing digital & offset printing services.',
        image: '/project4.jpg',
        link: 'https://diamondstarprintingworks.com/',
        github: '',
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    className="py-6"
                >
                    {PROJECTS.map((project, idx) => (
                        <SwiperSlide key={project.title}>
                            <motion.div
                                className="bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all flex flex-col h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-base text-gray-700 dark:text-gray-300 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex justify-center gap-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 border border-cyan-600 text-cyan-600 dark:text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                                aria-label={`View live demo of ${project.title}`}
                                            >
                                                Live <FiExternalLink className="inline" aria-hidden="true" />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 border border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                                aria-label={`View GitHub repo of ${project.title}`}
                                            >
                                                Code <FaGithub className="inline" aria-hidden="true" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
