import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-row items-center justify-center pt-16 sm:h-screen"
    >
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
        <h2 className="text-center text-2xl font-medium sm:text-4xl">
          ABOUT ME
        </h2>
        <div className="mt-8 flex flex-col gap-4 text-lg sm:text-xl">
          <p>
            I find real satisfaction in building websites and applications from
            scratch. There’s something incredibly rewarding about tackling
            challenges and seeing a project come to life.
          </p>
          <p>
            I’m someone who loves working with others, thinking critically about
            problems, and keeping projects organized. I believe these qualities,
            combined with my ongoing learning in the field, help me turn ideas
            into effective and creative web solutions.
          </p>
          <p>
            At the heart of what I do is a desire to create websites and
            applications that not only look great but are also easy for people
            to use.
          </p>
          <p>
            I’m genuinely excited about staying up-to-date with the latest
            trends and technologies, always looking for new ways to improve and
            innovate in my work.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
