// src/sections/Testimonials.jsx
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Umer Khan",
        role: "Team Lead at Game Pixel Studio",
        feedback:
            "Abdul Rauf is a highly skilled and dependable developer. He delivers quality work, communicates well, and always meets deadlines.",
        image: "/client1.jpg",
    },
    {
        name: "Sana Yousaf",
        role: "MERN Stack Instructor at Ideoversity",
        feedback:
            "Rauf’s portfolio and project execution skills are excellent. He quickly picks up new concepts and applies them with confidence.",
        image: "/client2.jpg",
    },
    {
        name: "Hamza Khalid",
        role: "CTO at Pagie Portal",
        feedback:
            "He worked with us on WordPress projects but transitioned beautifully into React. Very impressive and motivated developer.",
        image: "/client3.jpg",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Testimonials
                </motion.h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    className="max-w-xl mx-auto"
                >
                    {testimonials.map((testi, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="bg-[#1e293b] p-8 rounded-xl shadow hover:shadow-cyan-500/30 transition text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <img
                                    src={testi.image}
                                    alt={testi.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-cyan-400"
                                />
                                <h3 className="text-lg font-semibold text-cyan-300">{testi.name}</h3>
                                <p className="text-sm text-gray-400 mb-3">{testi.role}</p>
                                <p className="text-gray-300 text-sm italic">"{testi.feedback}"</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
