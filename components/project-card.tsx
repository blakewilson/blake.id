import { FaExternalLinkAlt } from "react-icons/fa";
import Image, { StaticImageData } from 'next/image'

export type ProjectCardProps = {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  projectUrl: string;
};
export function ProjectCard(props: ProjectCardProps) {
  const { imageSrc, title, description, projectUrl } = props;

  return (
    <article className="mb-16">
      <div className="mb-4">
        <a href={projectUrl} target="_blank" className="block">
          <Image
            src={imageSrc}
            alt={title}
            placeholder="blur"
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100"
          />
        </a>
      </div>

      <div className="mb-4">
        <a href={projectUrl} target="_blank">
          <h2 className="text-2xl flex items-center font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
            {title} <FaExternalLinkAlt className="ml-2" size={16} />
          </h2>
        </a>
      </div>

      <p className="text-lg text-slate-700 dark:text-slate-300">{description}</p>
    </article>
  );
}
