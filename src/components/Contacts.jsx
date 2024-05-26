import { useEffect, useState } from 'react';
import { CONTACT } from "../constants";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Contacts = () => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={ref}
    >
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
      </div>
    </motion.div>
  );
};
