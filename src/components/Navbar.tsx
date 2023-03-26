import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="h-20 w-full">
      <nav className="max-w-6xl h-full mx-auto">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 3 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 1, y: 0 },
          }}
          className="flex flex-row gap-2 text-white sm:gap-8 h-full items-center justify-evenly sm:justify-end px-4 text-base sm:text-xl"
        >
          <li className="hover:opacity-75 transition-all">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:opacity-75 transition-all">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="hover:opacity-75 transition-all">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="hover:opacity-75 transition-all">
            <a href="#contact">CONTACT</a>
          </li>
        </motion.ul>
      </nav>
    </div>
  )
}

export default Navbar
