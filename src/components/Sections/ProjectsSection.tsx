import { PROJECTS } from '../../constants'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

type Project = typeof PROJECTS[number]

const ProjectImage = ({ imageUrl, siteUrl }: { imageUrl: string; siteUrl: string }) => (
  <a href={siteUrl} className="flex-1 border-2 border-slate-700 rounded-md lg:p-0 hover:opacity-50 transition">
    <img
      src={imageUrl}
      className="w-full rounded-md aspect-video object-cover shadow shadow-slate-700 pointer-events-none"
    />
  </a>
)

const ProjectTechnologies = ({ technologies }: { technologies: Project['technologies'] }) => (
  <div className="font-mono mt-8 text-sm">
    {technologies.map((technology, index) => (
      <a
        key={index}
        href={technology.url}
        rel="noreferrer"
        target="_blank"
        className="transition-all hover:opacity-75"
      >
        {technology.name} &nbsp;
      </a>
    ))}
  </div>
)

const ProjectLinks = ({
  siteUrl,
  codeUrl,
  index,
}: {
  siteUrl: Project['siteUrl']
  codeUrl: Project['codeUrl']
  index: number
}) => (
  <div
    className={`flex flex-row justify-center  ${
      index % 2 ? 'lg:justify-start' : 'lg:justify-end'
    } gap-4 mt-8`}
  >
    <a href={siteUrl} className="transition-all hover:opacity-75" rel="noreferrer" target="_blank">
      <Icon icon="tabler:external-link" width={32} height={32} />
    </a>
    {codeUrl && (
      <a
        href={codeUrl}
        className="transition-all hover:opacity-75"
        rel="noreferrer"
        target="_blank"
      >
        <Icon icon="codicon:github-alt" width={32} height={32} />
      </a>
    )}
  </div>
)

const Project = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.7 }}
    variants={{
      visible: { opacity: 1, scale: 1, y: 0 },
      hidden: { opacity: 0, scale: 1, y: 60 },
    }}
    className={`flex flex-col gap-8 ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
  >
    <ProjectImage imageUrl={project.image} siteUrl={project.siteUrl} />
    <div
      className={`flex-1 text-center flex flex-col justify-center ${
        index % 2 ? 'lg:text-left' : 'lg:text-right'
      }`}
    >
      <h4 className="font-bold text-2xl">{project.title}</h4>
      <p className="mt-8">{project.description}</p>
      <ProjectTechnologies technologies={project.technologies} />
      <ProjectLinks siteUrl={project.siteUrl} codeUrl={project.codeUrl} index={index} />
    </div>
  </motion.div>
)

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-16">
      <div className="mx-8">
        <h2 className="text-2xl sm:text-4xl text-gray-200 font-medium text-center">PROJECTS</h2>
        <div className="mt-16 flex flex-col gap-32">
          {PROJECTS.map((project, index) => (
            <Project project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
