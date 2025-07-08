// src/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 📨 TODO: connect to backend or service like EmailJS / Nodemailer
        console.log('Form Data:', formData);
        alert('Message Sent! (Functionality coming soon)');
    };

    return (
        <section
            id="contact"
            className="min-h-screen py-20 px-6 bg-[#0f172a] text-white"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-400 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    className="text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Want to work together or have a question? Drop a message below!
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm text-gray-300">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-[#1e293b] border border-gray-600 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#1e293b] border border-gray-600 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1 text-sm text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-[#1e293b] border border-gray-600 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold transition"
                    >
                        <FaPaperPlane />
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
