import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TESTIMONIALS = [
    {
        name: 'Umer Khan',
        role: 'Team Lead at Game Pixel Studio',
        feedback:
            'Abdul Rauf is a highly skilled and dependable developer. He delivers quality work, communicates well, and always meets deadlines.',
        image: '/client1.jpg',
    },
    {
        name: 'Sana Yousaf',
        role: 'MERN Stack Instructor at Ideoversity',
        feedback:
            'Rauf’s portfolio and project execution skills are excellent. He quickly picks up new concepts and applies them with confidence.',
        image: '/client2.jpg',
    },
    {
        name: 'Hamza Khalid',
        role: 'CTO at Pagie Portal',
        feedback:
            'He worked with us on WordPress projects but transitioned beautifully into React. Very impressive and motivated developer.',
        image: '/client3.jpg',
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="min-h-screen py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                    {TESTIMONIALS.map((t, idx) => (
                        <SwiperSlide key={t.name}>
                            <motion.div
                                className="bg-gray-100 dark:bg-slate-800 p-8 rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-500/30 transition cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                tabIndex={0}
                                role="group"
                                aria-label={`Testimonial by ${t.name}`}
                            >
                                <img
                                    src={t.image}
                                    alt={`${t.name} photo`}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-600 dark:border-cyan-400"
                                    loading="lazy"
                                />
                                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                                    {t.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {t.role}
                                </p>
                                <p className="text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
                                    “{t.feedback}”
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
