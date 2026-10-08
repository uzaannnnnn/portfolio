import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const cvOptions = [
  {
    id: "id",
    lang: "Bahasa Indonesia",
    badge: "ID",
    flag: "🇮🇩",
    filename: "CV_Muhamad_Fauzan_ID.pdf",
    url: "/cv-id.pdf",
    desc: "Format Indonesia (PDF)",
  },
  {
    id: "en",
    lang: "English",
    badge: "EN",
    flag: "🇬🇧",
    filename: "CV_Muhamad_Fauzan_EN.pdf",
    url: "/cv-en.pdf",
    desc: "English Format (PDF)",
  },
];

const CvDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 mt-2 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 cursor-pointer sm:mt-0 font-medium text-sm shadow-[0_0_12px_rgba(74,222,128,0.15)] hover:shadow-[0_0_18px_rgba(74,222,128,0.35)]"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>My CV</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute sm:right-0 left-1/2 -translate-x-1/2 sm:translate-x-0 mt-2 w-72 rounded-xl border border-white/10 bg-midnight/95 backdrop-blur-xl shadow-2xl p-2 z-50 text-left"
          >
            <div className="px-2.5 py-1.5 mb-1.5 border-b border-white/10 text-[11px] font-semibold text-neutral-400 flex items-center justify-between tracking-wide">
              <span>PILIH BAHASA CV</span>
              <span className="text-[10px] text-green-400 uppercase">PDF</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {cvOptions.map((opt) => (
                <div
                  key={opt.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-green-400/30 transition-all duration-150 group"
                >
                  <a
                    href={opt.url}
                    download={opt.filename}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 flex-1 cursor-pointer select-none"
                  >
                    <span className="text-2xl leading-none">{opt.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">
                        {opt.lang}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {opt.desc}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-1 pl-2">
                    <a
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Preview PDF"
                      className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                    <a
                      href={opt.url}
                      download={opt.filename}
                      onClick={() => setIsOpen(false)}
                      title="Download PDF"
                      className="p-1.5 rounded-md text-green-400 hover:bg-green-400/20 hover:text-green-300 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CvDropdown;
