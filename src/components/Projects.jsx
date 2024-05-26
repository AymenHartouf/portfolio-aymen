import { motion } from 'framer-motion';

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="border-b border-neutral-800 pb-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="my-24 text-center text-4xl">Projects</h1>
      <p className="text-center text-2xl md:text-4xl">PROJECTS ARE COMING SOON 😊 </p>
    </motion.div>
  );
};
