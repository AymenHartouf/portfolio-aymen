import { FaCss3Alt } from "react-icons/fa";
import { RiHtml5Line, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Technologies = () => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const iconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <div ref={ref} className="border-b border-neutral-800 pb-32">
      <h1 className="my-24 text-center text-4xl font-bold tracking-tight">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[
          { icon: <RiHtml5Line className="text-7xl text-orange-500" />, delay: 0.1 },
          { icon: <FaCss3Alt className="text-7xl text-blue-500" />, delay: 0.2 },
          { icon: <SiJavascript className="text-7xl text-yellow-500" />, delay: 0.3 },
          { icon: <RiTailwindCssFill className="text-7xl text-teal-400" />, delay: 0.4 },
          { icon: <RiReactjsLine className="text-7xl text-cyan-500" />, delay: 0.5 },
          { icon: <SiFramer className="text-7xl text-white-900" />, delay: 0.6 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-6 flex items-center justify-center bg-neutral-900 hover:shadow-lg transform transition duration-500 hover:scale-110"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={iconVariants}
            transition={{ delay: tech.delay }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
