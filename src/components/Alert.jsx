import { motion, AnimatePresence } from "motion/react";
const Alert = ({ type, text }) => {
  const alertVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };
  const isDanger = type === "danger";
  const isInfo = type === "info";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5 max-w-sm"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVarients}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`p-4 items-center text-indigo-100 leading-normal rounded-xl flex shadow-xl border border-white/10 ${
            isDanger ? "bg-red-900/95" : isInfo ? "bg-blue-900/95" : "bg-royal/95"
          }`}
        >
          <p
            className={`flex rounded-full uppercase px-2.5 py-1 text-xs font-bold mr-3 ${
              isDanger ? "bg-red-500 text-white" : isInfo ? "bg-blue-500 text-white" : "bg-lavender text-white"
            }`}
          >
            {isDanger ? "Failed" : isInfo ? "Info" : "Success"}
          </p>
          <p className="text-sm text-left">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
