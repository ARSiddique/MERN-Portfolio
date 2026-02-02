import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const PHONE_DISPLAY = "+92 316 4532412";
const PHONE_TEL = "+923164532412";
const EMAIL = "abdulraufsiddique10@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/abdul-rauf-37a525216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left */}
          <p className="text-sm text-slate-700 dark:text-slate-300 text-center sm:text-left">
            © {new Date().getFullYear()} Abdul Rauf. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-sm">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
              aria-label="Call"
            >
              <FaPhoneAlt className="text-base" />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
              aria-label="Email"
              title={EMAIL}
            >
              <FaEnvelope className="text-base" />
              <span className="max-w-[240px] truncate">{EMAIL}</span>
            </a>

           <a
  href={LINKEDIN_URL}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
  aria-label="LinkedIn"
>
  <FaLinkedinIn className="text-base" />
  <span>Abdul Rauf</span>
</a>

          </div>
        </div>
      </div>
    </footer>
  );
}
