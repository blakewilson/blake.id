export type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};
export function ProjectCard(props: ProjectCardProps) {
  const { imageUrl, title, description } = props;

  return (
    <article>
      <img
        src={imageUrl}
        alt=""
        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
      />

      <h2>{title}</h2>

      <p>{description}</p>
    </article>
  );
}
