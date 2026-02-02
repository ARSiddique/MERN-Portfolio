import { Link as ScrollLink } from "react-scroll";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaChevronUp } from "react-icons/fa";

const EMAIL = "abdulraufsiddique10@gmail.com";
const PHONE_DISPLAY = "+92 316 4532412";
const PHONE_TEL = "+923164532412";

// wa.me needs digits only (no +, spaces)
const WHATSAPP_WA = "923164532412";

export default function FloatingActions() {
  return (
    <>
      {/* Left: Contact actions */}
      <div className="fixed bottom-8 left-5 sm:left-6 flex flex-col gap-3 z-50">
        {/* Scroll to contact (better UX) */}
        <ScrollLink
          to="contact"
          smooth
          duration={500}
          offset={-90}
          aria-label="Go to Contact section"
          className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600
                     text-white w-11 h-11 rounded-full shadow-lg grid place-items-center
                     transition-transform hover:scale-110 cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <FaEnvelope />
        </ScrollLink>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_WA}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="bg-green-500 hover:bg-green-600 text-white w-11 h-11 rounded-full shadow-lg
                     grid place-items-center transition-transform hover:scale-110
                     focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FaWhatsapp />
        </a>

        {/* Call */}
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={`Call ${PHONE_DISPLAY}`}
          className="bg-slate-900/80 hover:bg-slate-900 text-white w-11 h-11 rounded-full shadow-lg
                     grid place-items-center transition-transform hover:scale-110
                     dark:bg-white/15 dark:hover:bg-white/20
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <FaPhoneAlt />
        </a>
      </div>

      {/* Right: Back to top */}
      <div className="fixed bottom-8 right-5 sm:right-8 z-50">
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-90}
          aria-label="Back to top"
          className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600
                     text-white w-12 h-12 rounded-full shadow-2xl grid place-items-center
                     transition-transform hover:scale-110 cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <FaChevronUp />
        </ScrollLink>
      </div>
    </>
  );
}
