import { DiReact, DiHtml5, DiCss3, DiGit, DiJsBadge, DiSass } from 'react-icons/di'
import {
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiFigma,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
} from 'react-icons/si'

const SKILLS = [
  {
    name: 'HTML5',
    icon: <DiHtml5 size="80px" />,
  },
  {
    name: 'CSS3',
    icon: <DiCss3 size="80px" />,
  },
  {
    name: 'JAVASCRIPT + ES6',
    icon: <DiJsBadge size="80px" />,
  },
  {
    name: 'TYPESCRIPT',
    icon: <SiTypescript size="80px" />,
  },
  {
    name: 'REACT',
    icon: <DiReact size="80px" />,
  },
  {
    name: 'REACT NATIVE',
    icon: <DiReact size="80px" />,
  },
  {
    name: 'NEXT JS',
    icon: <SiNextdotjs size="80px" />,
  },
  {
    name: 'REDUX',
    icon: <SiRedux size="80px" />,
  },
  {
    name: 'GIT',
    icon: <DiGit size="80px" />,
  },
  {
    name: 'FIREBASE',
    icon: <SiFirebase size="80px" />,
  },
  {
    name: 'TAILWIND',
    icon: <SiTailwindcss size="80px" />,
  },
  {
    name: 'FIGMA',
    icon: <SiFigma size="80px" />,
  },
  {
    name: 'DOCKER',
    icon: <SiDocker size="80px" />,
  },
  {
    name: 'SASS',
    icon: <DiSass size="80px" />,
  },
] as const

const SkillsSection = () => {
  return (
    <section id="skills" className="mt-16">
      <h2 className="text-center text-2xl sm:text-4xl">SKILLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:mx-16 mt-12 place-items-center gap-8">
        {SKILLS.slice(0, 12).map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            {skill.icon}
            <p className="text-center font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
