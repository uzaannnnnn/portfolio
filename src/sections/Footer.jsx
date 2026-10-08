import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-6 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2 text-xs md:text-sm">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex items-center gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="p-2 rounded-full border border-white/10 hover:border-sand/40 hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-xs md:text-sm">© 2026 Fauzan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
