// src/sections/Projects.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Online Quran Academy',
        description:
            'A full-stack role-based LMS with login, dashboard, student-teacher roles, and admin panel using MERN + Tailwind + ShadCN UI.',
        image: '/project1.jpg',
        link: 'https://your-oqa-live-link.com',
        github: 'https://github.com/yourusername/oqa',
    },
    {
        title: 'Car Rental Web App',
        description:
            'A modern car rental web app with secure backend, admin dashboard, and payment flow using MERN & JWT Auth.',
        image: '/project2.jpg',
        link: 'https://your-car-rental.com',
        github: 'https://github.com/yourusername/car-rental',
    },
    {
        title: 'Portfolio Website',
        description:
            'My own responsive and animated portfolio using React, Tailwind CSS, Framer Motion, Lottie and GSAP.',
        image: '/project3.jpg',
        link: '#',
        github: 'https://github.com/yourusername/portfolio',
    },
    {
        title: 'Diamond Star Printing Works',
        description:
            'A professional print business website built with WordPress, showcasing digital & offset printing services.',
        image: '/project4.jpg',
        link: 'https://diamondstarprintingworks.com/',
        github: '',
    },
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

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="py-6"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-600/40 transition transform hover:scale-[1.02] h-full flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 text-left flex flex-col justify-between flex-grow">
                                    <div>
                                        <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-4">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex gap-4 mt-auto">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-white hover:underline"
                                            >
                                                🔗 Live
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-white hover:underline"
                                            >
                                                💻 GitHub
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
