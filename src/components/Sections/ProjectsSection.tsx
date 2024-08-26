import { Icon } from "@iconify/react";
import type { ImageMetadata } from "astro";
import { motion } from "framer-motion";

import { PROJECTS } from "../../constants";

type Project = (typeof PROJECTS)[number];

const ProjectImage = ({
  image,
  siteUrl,
  projectTitle,
}: {
  image: ImageMetadata;
  siteUrl: string;
  projectTitle: string;
}) => (
  <a
    href={siteUrl}
    aria-label={`Check out ${projectTitle}'s site`}
    className="flex-1 rounded-md border-2 border-slate-700 transition hover:opacity-50 lg:p-0"
  >
    <img
      src={image.src}
      alt={`${projectTitle} screenshot`}
      className="pointer-events-none aspect-video w-full rounded-md object-cover shadow shadow-slate-700"
    />
  </a>
);

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
        className="my-1 me-1 inline-flex rounded-md bg-slate-700 px-2 py-1 transition-all hover:opacity-75"
      >
        {technology.name}
      </a>
    ))}
  </div>
);

const ProjectLinks = ({
  projectTitle,
  siteUrl,
  codeUrl,
  index,
}: {
  projectTitle: Project["title"];
  siteUrl: Project["siteUrl"];
  codeUrl: Project["codeUrl"];
  index: number;
}) => (
  <div
    className={`flex flex-row justify-center ${
      index % 2 ? "lg:justify-start" : "lg:justify-end"
    } mt-8 gap-4`}
  >
    <a
      href={siteUrl}
      aria-label={`Check out ${projectTitle}'s site`}
      className="transition-all hover:opacity-75"
      rel="noreferrer"
      target="_blank"
    >
      <Icon icon="tabler:external-link" width={32} height={32} />
    </a>
    {codeUrl && (
      <a
        href={codeUrl}
        aria-label={`Check out ${projectTitle}'s code`}
        className="transition-all hover:opacity-75"
        rel="noreferrer"
        target="_blank"
      >
        <Icon icon="codicon:github-alt" width={32} height={32} />
      </a>
    )}
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
    className="flex h-full flex-1 flex-col gap-4 rounded-2xl p-4 transition-all hover:bg-slate-800"
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
        <div className="mt-16 grid grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
