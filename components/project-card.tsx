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
        <a href={projectUrl}>
          <img
            src={imageUrl}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100"
          />
        </a>
      </div>

      <div className="mb-4">
        <a href={projectUrl}>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900">
            {title}
          </h2>
        </a>
      </div>

      <p className="text-lg text-slate-700">{description}</p>
    </article>
  );
}
