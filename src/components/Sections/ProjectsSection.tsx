import { motion } from "framer-motion";

import { PROJECTS } from "../../constants";

type Project = (typeof PROJECTS)[number];

const ProjectTechnologies = ({
  technologies,
}: {
  technologies: Project["technologies"];
}) => (
  <div className="text-start font-mono text-sm">
    {technologies.map((technology, index) => (
      <a
        aria-label={`Go to the ${technology.name} website`}
        key={index}
        href={technology.url}
        rel="noreferrer"
        target="_blank"
        className="my-1 me-2 inline-flex rounded-full bg-slate-700 px-2 py-1 transition-all hover:opacity-75"
      >
        {technology.name}
      </a>
    ))}
  </div>
);

const Project = ({ project }: { project: Project }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.7 }}
    variants={{
      visible: { opacity: 1, scale: 1, y: 0 },
      hidden: { opacity: 0, scale: 1, y: 60 },
    }}
    className="flex h-full flex-1 flex-col gap-4 rounded-lg p-4 transition-all hover:bg-slate-800"
  >
    <h3 className="text-xl font-bold text-white">{project.title}</h3>
    <p className="text-start text-base text-slate-300">{project.description}</p>
    <ProjectTechnologies technologies={project.technologies} />
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-16">
      <div className="mx-8">
        <h2 className="text-center text-2xl font-medium text-gray-200 sm:text-4xl">
          PROJECTS
        </h2>
        <div className="mt-16 grid gap-4 grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
