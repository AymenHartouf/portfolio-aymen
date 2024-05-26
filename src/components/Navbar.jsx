import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <motion.nav 
      className="px-6 mt-6 flex justify-between items-center py-6 mb-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Aymen.dev
      </motion.div>
      <div className="space-x-6 flex justify-between text-2xl items-center text-white">
        <motion.a 
          target="_blank" 
          href="https://www.linkedin.com/in/aymen-hartouf-a3634826a/"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedinIn />
        </motion.a> 
        <motion.a 
          target="_blank" 
          href="https://github.com/AymenHartouf" 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub/>
        </motion.a>   
        <motion.a 
          target="_blank" 
          href="https://www.instagram.com/aymenhar_/" 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram/>
        </motion.a>
      </div>
    </motion.nav>
  );
};
