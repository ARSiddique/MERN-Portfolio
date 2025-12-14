import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "Supreme IT Experts",
    description:
      "Managed IT Services & Cybersecurity website built with a premium, conversion-focused layout and modern UI.",
    image: "/project-supreme.jpg", // ✅ add this image in /public or change path
    link: "https://supremeitexperts.com/",
    github: "",
    tags: ["IT Services", "SEO Ready", "Modern UI"],
  },
  {
    title: "Diamond Star Printing Works",
    description:
      "Printing business website showcasing offset & digital printing services with clear service structure.",
    image: "/project-diamond.jpg", // ✅ add this image in /public or change path
    link: "https://diamondstarprintingworks.com/",
    github: "",
    tags: ["WordPress", "Business Site", "Services"],
  },
  {
    title: "The Lost Tribe",
    description:
      "High-end 3D styled restaurant concept site with cinematic visuals and modern section transitions.",
    image: "/project-lost-tribe.jpg", // ✅ add this image in /public or change path
    link: "https://the-lost-tribe.vercel.app/",
    github: "",
    tags: ["Next.js", "3D Style", "Premium UI"],
  },

  // ✅ Existing sample projects (keep or remove)
  {
    title: "Online Quran Academy",
    description:
      "A full-stack role-based LMS with login, dashboards, student-teacher roles, and admin panel using MERN + Tailwind.",
    image: "/project1.jpg",
    link: "https://your-oqa-live-link.com",
    github: "https://github.com/yourusername/oqa",
    tags: ["MERN", "Auth", "Dashboard"],
  },
  {
    title: "Car Rental Web App",
    description:
      "Modern car rental app with secure backend, admin dashboard and JWT auth flow using MERN.",
    image: "/project2.jpg",
    link: "https://your-car-rental.com",
    github: "https://github.com/yourusername/car-rental",
    tags: ["MERN", "JWT", "Admin Panel"],
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio with animations using React, Tailwind, Framer Motion, Lottie and smooth section navigation.",
    image: "/project3.jpg",
    link: null,
    github: "https://github.com/yourusername/portfolio",
    tags: ["React", "Animations", "UI/UX"],
  },
];

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            🚀 Projects
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Work
            </span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Some of my recent projects — clean UI, smooth UX, scalable structure, and production-ready layouts.
          </p>
        </motion.div>

        {/* Swiper */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="projects-swiper pb-10"
          >
            {PROJECTS.map((project, idx) => {
              const hasGithub = Boolean(project.github && project.github.trim().length > 0);
              const hasLive = Boolean(project.link && project.link.trim().length > 0);

              return (
                <SwiperSlide key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: Math.min(idx * 0.06, 0.25), duration: 0.55, ease: "easeOut" }}
                    className="group h-full"
                  >
                    {/* gradient border wrapper */}
                    <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/30 via-transparent to-blue-500/30">
                      {/* glass card */}
                      <div className="relative h-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg transition group-hover:-translate-y-1 group-hover:shadow-[0_22px_70px_rgba(8,145,178,0.18)]">
                        {/* image */}
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* content */}
                        <div className="p-6 flex flex-col h-full">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {project.title}
                          </h3>

                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-grow leading-relaxed">
                            {project.description}
                          </p>

                          {/* tags */}
                          {project.tags?.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tags.map((t) => (
                                <span
                                  key={t}
                                  className="px-3 py-1 rounded-full text-[11px] font-medium border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          ) : null}

                          {/* buttons */}
                          <div className="mt-5 flex items-center justify-center gap-3">
                            {hasLive && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm bg-cyan-600 text-white hover:bg-cyan-700 transition shadow-[0_10px_30px_rgba(8,145,178,0.22)]"
                                aria-label={`View live demo of ${project.title}`}
                              >
                                Live <FiExternalLink aria-hidden="true" />
                              </a>
                            )}

                            {hasGithub && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white/10 transition"
                                aria-label={`View GitHub repo of ${project.title}`}
                              >
                                Code <FaGithub aria-hidden="true" />
                              </a>
                            )}
                          </div>

                          {/* hover glow */}
                          <div className="pointer-events-none absolute -inset-8 opacity-0 blur-2xl transition group-hover:opacity-100 bg-cyan-400/10 dark:bg-cyan-400/10" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Swiper styling (scoped via class) */}
      <style>
        {`
          .projects-swiper :global(.swiper-button-prev),
          .projects-swiper :global(.swiper-button-next){
            width: 42px;
            height: 42px;
            border-radius: 999px;
            backdrop-filter: blur(10px);
            background: rgba(255,255,255,0.6);
            border: 1px solid rgba(0,0,0,0.08);
            box-shadow: 0 14px 40px rgba(0,0,0,0.12);
          }
          .projects-swiper :global(.swiper-button-prev:after),
          .projects-swiper :global(.swiper-button-next:after){
            font-size: 16px;
            font-weight: 800;
            color: #0f172a;
          }
          :global(.dark) .projects-swiper :global(.swiper-button-prev),
          :global(.dark) .projects-swiper :global(.swiper-button-next){
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.10);
          }
          :global(.dark) .projects-swiper :global(.swiper-button-prev:after),
          :global(.dark) .projects-swiper :global(.swiper-button-next:after){
            color: rgba(255,255,255,0.9);
          }

          .projects-swiper :global(.swiper-pagination-bullet){
            width: 9px;
            height: 9px;
            background: rgba(15, 23, 42, 0.25);
            opacity: 1;
          }
          .projects-swiper :global(.swiper-pagination-bullet-active){
            background: rgba(8,145,178,0.9);
          }
          :global(.dark) .projects-swiper :global(.swiper-pagination-bullet){
            background: rgba(255,255,255,0.18);
          }
          :global(.dark) .projects-swiper :global(.swiper-pagination-bullet-active){
            background: rgba(34,211,238,0.85);
          }
        `}
      </style>
    </section>
  );
}
