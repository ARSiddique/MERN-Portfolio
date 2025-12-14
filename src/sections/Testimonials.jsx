import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

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

    return { hasOverflow, atStart, atEnd };
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

export default function Testimonials() {
  const testimonials = [
    {
      name: "Umer Khan",
      role: "Team Lead at Game Pixel Studio",
      text:
        "Abdul Rauf is a highly skilled and dependable developer. He delivers quality work, communicates well, and always meets deadlines.",
      rating: 5,
    },
    {
      name: "Sana Yousaf",
      role: "MERN Stack Instructor at Ideoversity",
      text:
        "Rauf’s portfolio and project execution skills are excellent. He quickly picks up new concepts and applies them with confidence.",
      rating: 5,
    },
    {
      name: "Ali Haider",
      role: "Product Designer",
      text:
        "Clean UI, good spacing, and strong attention to detail. The overall experience feels premium and consistent.",
      rating: 5,
    },
    {
      name: "Hassan Raza",
      role: "Frontend Engineer",
      text:
        "Great component structure and smooth animations. The codebase is easy to extend and maintain.",
      rating: 5,
    },
    {
      name: "Ayesha Noor",
      role: "Project Manager",
      text:
        "Very cooperative, responsive, and professional. Tasks were delivered on time with clear communication.",
      rating: 5,
    },
  ];

  const { dir, show, onSwiper, onArrowClick } = usePingPongSwiperNav();

  return (
    <section id="testimonials" className="relative min-h-screen py-20 px-6">
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
            Testimonials
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            What People{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Say
            </span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feedback from professionals I’ve worked with.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* ✅ Bottom-right arrow (no overlap on mobile) */}
          {show ? (
            <button
              type="button"
              onClick={onArrowClick}
              aria-label={dir === "next" ? "Next testimonials" : "Previous testimonials"}
              className={cx(
                "absolute z-20",
                "right-3 bottom-6 sm:right-6 sm:bottom-7",
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
              1024: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="h-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {t.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {t.role}
                        </p>
                      </div>

                      <div className="text-cyan-600/60 dark:text-cyan-300/60 text-3xl leading-none">
                        “
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                      {t.text}
                    </p>

                    <div className="mt-5 flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-cyan-600 dark:text-cyan-300"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
