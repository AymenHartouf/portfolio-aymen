import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="flex flex-col items-center border-b border-neutral-900 pb-20">
      <motion.h1
        className="my-10 text-4xl"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-col justify-center mt-10 md:flex-row md:space-x-6">
        <motion.div
          className="px-4 flex items-center justify-center w-full md:w-1/2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        >
          <img className="rounded-lg" src={about} alt="about" />
        </motion.div>
        <motion.div
          className="flex justify-center max-w-xl p-4 md:w-1/2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
        >
          <p className="my-2 py-4">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};
