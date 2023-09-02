import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

import { child, stagger } from '../../animations'

const SKILLS = [
  {
    name: 'HTML5',
    icon: 'simple-icons:html5',
  },
  {
    name: 'CSS3',
    icon: 'simple-icons:css3',
  },
  {
    name: 'JAVASCRIPT + ES6',
    icon: 'simple-icons:javascript',
  },
  {
    name: 'TYPESCRIPT',
    icon: 'simple-icons:typescript',
  },
  {
    name: 'REACT',
    icon: 'simple-icons:react',
  },
  {
    name: 'REACT NATIVE',
    icon: 'simple-icons:react',
  },
  {
    name: 'NEXT JS',
    icon: 'simple-icons:nextdotjs',
  },
  {
    name: 'REDUX',
    icon: 'simple-icons:redux',
  },
  {
    name: 'GIT',
    icon: 'mdi:git',
  },
  {
    name: 'FIREBASE',
    icon: 'simple-icons:firebase',
  },
  {
    name: 'TAILWIND',
    icon: 'simple-icons:tailwindcss',
  },
  {
    name: 'FIGMA',
    icon: 'simple-icons:figma',
  },
  {
    name: 'DOCKER',
    icon: 'simple-icons:docker',
  },
] as const

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-16">
      <h2 className="text-center text-2xl sm:text-4xl">SKILLS</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger(0.2)}
        className="mt-12 grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:mx-16 md:grid-cols-4"
      >
        {SKILLS.slice(0, 12).map((skill) => (
          <motion.div
            key={skill.name}
            variants={child}
            className="flex flex-col items-center gap-2"
          >
            <Icon icon={skill.icon} width={80} height={80} />
            <p className="text-center font-bold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
