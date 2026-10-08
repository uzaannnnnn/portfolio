import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  subDescription,
  image,
  tags,
  href,
  github,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-4 right-4 bg-midnight/80 hover:bg-gray-700"
        >
          <img src="/assets/close.svg" className="w-5 h-5" alt="close" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl max-h-72 object-cover" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-white cursor-pointer hover:text-sand hover-animation"
                >
                  View Github <img src="/assets/arrow-up.svg" className="size-4" alt="Open GitHub" />
                </a>
              ) : null}
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-white cursor-pointer hover:text-sand hover-animation"
                >
                  View Project <img src="/assets/arrow-up.svg" className="size-4" alt="Open link" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
