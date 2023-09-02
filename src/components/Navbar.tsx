import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="h-20 w-full">
      <nav className="mx-auto h-full max-w-6xl">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 3 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 1, y: 0 },
          }}
          className="flex h-full flex-row items-center justify-evenly gap-2 px-4 text-base text-white sm:justify-end sm:gap-8 sm:text-xl"
        >
          <li className="transition-all hover:opacity-75">
            <a aria-label="Go to About section" href="#about">
              ABOUT
            </a>
          </li>
          <li className="transition-all hover:opacity-75">
            <a aria-label="Go to Projects section" href="#projects">
              PROJECTS
            </a>
          </li>
          <li className="transition-all hover:opacity-75">
            <a aria-label="Go to Skills section" href="#skills">
              SKILLS
            </a>
          </li>
          <li className="transition-all hover:opacity-75">
            <a aria-label="Go to Contact section" href="#contact">
              CONTACT
            </a>
          </li>
        </motion.ul>
      </nav>
    </div>
  )
}

export default Navbar
