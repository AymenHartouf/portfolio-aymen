import { HERO_CONTENT } from "../constants";
import profile from "../assets/pfp.jpg";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-32 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start pl-6">
            <motion.h1
              className="pb-16 text-6xl md:text-7xl font-thin tracking-tight lg:mt-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              Aymen Hartouf
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            >
              Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              className="h-96 w-96 ring-4 ring-green-500 dark:ring-violet-700"
              style={{ borderRadius: "31% 69% 23% 77% / 66% 18% 82% 34%" }}
              animate={{
                borderRadius: [
                  "31% 69% 23% 77% / 66% 18% 82% 34%",
                  "39% 61% 30% 70% / 54% 26% 74% 46%",
                  "31% 69% 23% 77% / 66% 18% 82% 34%",
                ],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
            >
              <img
                className="h-full w-full object-cover"
                src={profile}
                alt="Aymen Hartouf"
                style={{ borderRadius: "inherit" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};