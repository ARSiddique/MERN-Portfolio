import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

// Base URL from environment (Vite)
const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: '', error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: '', error: '' });

        try {
            const res = await fetch(`${API_BASE}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error('Network response was not ok');

            setStatus({ submitting: false, success: 'Your message has been sent!', error: '' });
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus({ submitting: false, success: '', error: 'Something went wrong. Please try again.' });
        }
    };

    // Clear success message after 3s
    useEffect(() => {
        if (status.success) {
            const timer = setTimeout(() => {
                setStatus((s) => ({ ...s, success: '' }));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status.success]);

    // Clear error message after 3s
    useEffect(() => {
        if (status.error) {
            const timer = setTimeout(() => {
                setStatus((s) => ({ ...s, error: '' }));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status.error]);

    return (
        <section
            id="contact"
            className="min-h-screen py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    className="text-base text-gray-700 dark:text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Want to work together or have a question? Drop a message below!
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
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
                            className="w-full bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500 transition"
                        />
                    </div>

                    <div aria-live="polite" className="min-h-[1.5rem] text-center">
                        {status.success && <p className="text-green-600 dark:text-green-400">{status.success}</p>}
                        {status.error && <p className="text-red-600 dark:text-red-400">{status.error}</p>}
                    </div>

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        disabled={status.submitting}
                        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition disabled:opacity-50 cursor-pointer"
                        aria-label="Send Message"
                    >
                        <FaPaperPlane aria-hidden="true" />
                        {status.submitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
