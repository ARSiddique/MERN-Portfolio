import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function usePingPongSwiperNav() {
  const swiperRef = useRef(null);
  const [dir, setDir] = useState("next");
  const [show, setShow] = useState(true);

  const getStats = (sw) => {
    const total = sw?.slides?.length ?? 0;
    const spvRaw =
      typeof sw?.slidesPerViewDynamic === "function"
        ? sw.slidesPerViewDynamic()
        : Number(sw?.params?.slidesPerView) || 1;

    const spv = Math.max(1, Math.ceil(spvRaw));
    const hasOverflow = total > spv;

    const atStart = (sw?.activeIndex ?? 0) <= 0;
    const atEnd = (sw?.activeIndex ?? 0) >= total - spv;

    return { total, spv, hasOverflow, atStart, atEnd };
  };

  const sync = useCallback((sw) => {
    if (!sw) return;
    const { hasOverflow, atStart, atEnd } = getStats(sw);

    setShow(hasOverflow);

    setDir((prev) => {
      if (!hasOverflow) return "next";
      if (prev === "next" && atEnd) return "prev";
      if (prev === "prev" && atStart) return "next";
      return prev;
    });
  }, []);

  const onSwiper = useCallback(
    (sw) => {
      swiperRef.current = sw;
      sync(sw);

      sw.on("slideChange", () => sync(sw));
      sw.on("resize", () => sync(sw));
      sw.on("breakpoint", () => sync(sw));
      sw.on("slidesLengthChange", () => sync(sw));
    },
    [sync]
  );

  const onArrowClick = useCallback(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (dir === "next") sw.slideNext();
    else sw.slidePrev();
  }, [dir]);

  return { dir, show, onSwiper, onArrowClick };
}

function ProjectThumb({ src, alt }) {
  const [ok, setOk] = useState(true);

  return (
    <div className="relative rounded-2xl h-40 overflow-hidden border border-black/5 dark:border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-blue-500/10">
      {/* soft glow layers */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.30),transparent_55%)]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.30),transparent_55%)]" />

      <div className="relative h-full w-full flex items-center justify-center p-6">
        {src && ok ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setOk(false)}
            className="max-h-full max-w-full object-contain"
            style={{ imageRendering: "auto" }}
          />
        ) : (
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Preview Image
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Supreme IT Experts",
      desc:
        "Managed IT services & cybersecurity website with modern UI, fast performance, and conversion-focused layout.",
      tags: ["Next.js", "Tailwind", "SEO"],
      liveUrl: "https://supremeitexperts.com/",
      logo: "/projects/supreme.webp",
    },
    {
      title: "Diamond Star Printing Works",
      desc:
        "Printing business website showcasing offset & digital services with clear service structure and lead-friendly content.",
      tags: ["WordPress", "Business Site", "Services"],
      liveUrl: "#",
      logo: "/projects/diamond.png",
    },
    {
      title: "The Lost Tribe",
      desc:
        "High-end 3D styled restaurant concept site with cinematic visuals and premium section transitions.",
      tags: ["Next.js", "3D Style", "Premium UI"],
      liveUrl: "#",
      logo: "/projects/lost-tribe.png",
    },
    {
      title: "MERN Portfolio",
      desc:
        "Portfolio with smooth sections, modern animations, and scalable component structure.",
      tags: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      logo: "/projects/mern.png",
    },
  ];

  const { dir, show, onSwiper, onArrowClick } = usePingPongSwiperNav();

  return (
    <section id="projects" className="relative min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-white/70 dark:bg-white/5 backdrop-blur text-cyan-700 dark:text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            <HiSparkles className="text-sm" />
            Projects
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Work
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Some of my recent projects — clean UI, smooth UX, scalable structure,
            and production-ready layouts.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Arrow button moved OUT of card overlap area */}
          {show ? (
            <button
              type="button"
              onClick={onArrowClick}
              aria-label={dir === "next" ? "Next projects" : "Previous projects"}
              className={cx(
                "absolute z-20",
                "right-3 bottom-0 sm:right-6",
                "translate-y-1/2",
                "h-12 w-12 rounded-full",
                "border border-black/10 dark:border-white/10",
                "bg-white/80 dark:bg-white/5 backdrop-blur",
                "shadow-lg",
                "flex items-center justify-center",
                "focus:outline-none focus:ring-2 focus:ring-cyan-500"
              )}
            >
              <motion.span
                className="inline-flex"
                animate={{ x: dir === "next" ? [0, 6, 0] : [0, -6, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiArrowRight
                  className={cx(
                    "text-2xl text-cyan-700 dark:text-cyan-200",
                    dir === "prev" ? "rotate-180" : ""
                  )}
                />
              </motion.span>
            </button>
          ) : null}

          <Swiper
            modules={[Pagination, A11y]}
            onSwiper={onSwiper}
            grabCursor
            touchAngle={70}
            threshold={10}
            resistanceRatio={0.65}
            touchStartPreventDefault={false}
            pagination={{ clickable: true }}
            spaceBetween={18}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {projects.map((p) => {
              const hasLive = p.liveUrl && p.liveUrl !== "#";

              return (
                <SwiperSlide key={p.title} className="h-auto">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="h-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <ProjectThumb src={p.logo} alt={`${p.title} logo`} />

                      <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5">
                        {hasLive ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_12px_30px_rgba(8,145,178,0.22)] transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          >
                            Live <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-slate-400/20 text-slate-200 cursor-not-allowed border border-white/10"
                          >
                            Live Soon
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
