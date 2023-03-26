import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="pt-16 sm:h-screen flex flex-row items-center justify-center">
      <motion.div
        className="mx-8 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0 },
          hidden: { opacity: 0, scale: 1, x: 0 },
        }}
      >
        <h2 className="text-2xl sm:text-4xl font-medium text-center">ABOUT ME</h2>
        <div className="text-lg sm:text-xl flex flex-col gap-4 mt-8">
          <p>
            Having the knowledge and skills to create websites and applications from the ground up
            satisfies a part of me that truly enjoys problem-solving and the production process.
          </p>
          <p>
            I am an effective communicator, collaborator, critical thinker, and project organizer,
            and I hope these skills along with my continued education in the field will bolster my
            capability as a web developer and aid me in helping others bring their ideas to life on
            the web efficiently and creatively.
          </p>
          <p>
            At the end of the day, my ultimate goal as a front end developer is to create websites
            and applications that not only look great but are also intuitive and easy to use.
          </p>
          <p>
            I am passionate about staying up-to-date with the latest technologies and trends in the
            industry and am always looking for new and innovative ways to improve my craft.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
