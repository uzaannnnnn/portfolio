import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight border border-white/10 shadow-lg">
                <div className="w-3.5 h-3.5 rounded-full bg-sand shadow-[0_0_8px_rgba(214,153,92,0.6)]" />
              </div>
              <div className="flex-col hidden gap-1.5 md:flex md:pl-16 text-neutral-300">
                <span className="text-sm font-semibold tracking-wider text-sand uppercase">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <h4 className="text-base font-medium text-neutral-400 leading-snug">
                  {item.job}
                </h4>
              </div>
            </div>

            <div className="relative w-full pl-14 pr-4 md:pl-4">
              <div className="block mb-4 text-left text-neutral-300 md:hidden">
                <span className="text-xs font-semibold tracking-wider text-sand uppercase">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-neutral-400">
                  {item.job}
                </h4>
              </div>
              {item.contents.map((content, idx) => (
                <p
                  className="mb-2.5 font-normal text-neutral-400 leading-relaxed text-sm md:text-base"
                  key={idx}
                >
                  {content}
                </p>
              ))}
              {item.skills && (
                <div className="flex flex-wrap gap-2 mt-3 pt-1">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:border-sand/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
