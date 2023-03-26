import { motion } from 'framer-motion'
import { child, stagger } from '../../animations'

const HeroSection = () => {
  return (
    <section className="h-screen  flex flex-col justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger(0.3)}
        className="sm:w-1/2 mx-8"
      >
        <motion.h2 variants={child} className="text-lg sm:text-xl text-gray-200 font-medium">
          Hi, my name is
        </motion.h2>
        <motion.h1
          variants={child}
          className="text-4xl sm:text-6xl text-gray-200 font-bold mt-4 break-normal"
        >
          Felipe Buencamino.
        </motion.h1>
        <motion.h1 variants={child} className="text-2xl sm:text-4xl text-gray-200 font-medium mt-4">
          I'm a front end developer.
        </motion.h1>
        <motion.p variants={child} className="text-lg sm:text-xl text-gray-200 mt-4">
          Focused on designing, developing, and maintaining quality websites and applications using
          React and Typescript.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default HeroSection
