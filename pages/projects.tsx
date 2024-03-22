import Header from "../components/header";
import { ProjectCard } from "../components/project-card";
import SEO from "../components/seo";

export default function Projects() {
  return (
    <>
      <SEO title="Projects | Blake Wilson - Software Engineer and Creator" />
      <Header />

      <div className="container max-w-2xl mx-auto p-4">
        <div className="mx-auto">
          <h2>Projects</h2>

          <ProjectCard
            imageUrl="#"
            title="Video Background Pro"
            description="Testing"
          />
        </div>
      </div>
    </>
  );
}
