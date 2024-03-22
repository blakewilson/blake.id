import { FaExternalLinkAlt } from "react-icons/fa";

export type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
};
export function ProjectCard(props: ProjectCardProps) {
  const { imageUrl, title, description, projectUrl } = props;

  return (
    <article className="mb-16">
      <div className="mb-4">
        <a href={projectUrl} target="_blank">
          <img
            src={imageUrl}
            alt={title}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100"
          />
        </a>
      </div>

      <div className="mb-4">
        <a href={projectUrl} target="_blank">
          <h2 className="text-2xl flex items-center font-semibold leading-tight tracking-tight text-gray-900">
            {title} <FaExternalLinkAlt className="ml-2" size={16} />
          </h2>
        </a>
      </div>

      <p className="text-lg text-slate-700">{description}</p>
    </article>
  );
}
