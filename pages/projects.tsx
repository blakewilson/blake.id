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
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Projects
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Some of the projects I've been proud to work on throughout my
              career. In no particular order.
            </p>
          </div>

          <ProjectCard
            imageUrl="/projects/insight-analytics.png"
            projectUrl="https://insightanalytics.app"
            title="Insight Analytics"
            description="Insight Analytics seamlessly integrates with leading bookkeeping software platforms such as QuickBooks and Sage, transforming raw data into powerful dashboards for informed decision-making."
          />

          <ProjectCard
            imageUrl="/projects/faustjs.png"
            projectUrl="https://github.com/wpengine/faustjs"
            title="Faust.js"
            description="While at WP Engine, I had the opportunity to help build and lead the development of the Faust.js Headless WordPress framework. Built on top of Next.js, the framework provides helpful features for interacting with a headless WordPress site like support for previews, authentication, sitemaps, template hierarchy system, and more."
          />

          <ProjectCard
            imageUrl="/projects/the-unsent-project.png"
            projectUrl="https://theunsentproject.com"
            title="The Unsent Project"
            description="I had the chance to work with Rora Blue on The Unsent Project to reinvent the publishing experience and overall site architecture. Using cloud services like AWS Lambda, RDS, API Gateway and Next.js/Vercel we were able to create an amazing UI/UX experience for users all while being scalable for large viral traffic events. The site grew from 50k submissions to over 7 million in under a year. The largest traffic spike was over 100m page views in a month."
          />

          <ProjectCard
            imageUrl="/projects/video-background-pro.png"
            projectUrl="https://pushlabs.co"
            title="Video Background Pro"
            description="A premium version of the Video Background plugin with advanced features and integrations like mobile video background playback, Vimeo and YouTube video backgrounds, integrations with WPBakery and SiteOrigin, and more."
          />

          <ProjectCard
            imageUrl="/projects/video-background.png"
            projectUrl="https://wordpress.org/plugins/video-background"
            title="Video Background"
            description="Video Background is a free WordPress plugin that easily allows you to add a video background to any section of your WordPress site by simply specifying a CSS selector."
          />

          <ProjectCard
            imageUrl="/projects/directions-link-generator.png"
            projectUrl="https://directionslinkgenerator.com"
            title="Directions Link Generator"
            description="Directions Link Generator lets you quickly enter a business name or address, then will generate a link for you to get directions from Google Maps to that location."
          />
        </div>
      </div>
    </>
  );
}
