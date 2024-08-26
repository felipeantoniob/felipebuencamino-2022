import { motion } from "framer-motion";

import { child, stagger } from "../../animations";

const HeroSection = () => {
  return (
    <section className="flex h-screen flex-col justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger(0.3)}
        className="mx-8 sm:w-1/2"
      >
        <motion.h2
          variants={child}
          className="text-lg font-medium text-gray-200 sm:text-xl"
        >
          Hi, my name is
        </motion.h2>
        <motion.h1
          variants={child}
          className="mt-4 break-normal text-4xl font-bold text-gray-200 sm:text-6xl"
        >
          Felipe Buencamino.
        </motion.h1>
        <motion.h1
          variants={child}
          className="mt-4 text-2xl font-medium text-gray-200 sm:text-4xl"
        >
          I'm a full stack developer.
        </motion.h1>
        <motion.p
          variants={child}
          className="mt-4 text-lg text-gray-200 sm:text-xl"
        >
          Specializing in designing, developing, and maintaining high-quality
          web and mobile applications.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
