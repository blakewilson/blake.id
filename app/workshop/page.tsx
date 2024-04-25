import FormatDate from "../../components/format-date";
import Header from "../../components/header";
import { getAllPosts } from "../../lib/api";

export const metadata = {
  title: "Workshop | Blake Wilson - Software Engineer and Creator",
};

export default async function Home() {
  const workshopPosts = getAllPosts([
    "slug",
    "title",
    "date",
    "workshop",
    "content",
    "categories",
  ]).filter((post) => post?.workshop);

  return (
    <>
      <Header />

      <div className="container max-w-6xl mx-auto p-4">
        <div className="prose prose-lg md:prose-2xl dark:prose-invert mx-auto">
          <h2>Workshop</h2>
          <p>
            This is a isolated section of my site to share and talk about
            projects I do at home like automotive work, lawn maintenance, tools,
            DIY, etc.{" "}
          </p>
          {workshopPosts.map((post) => (
            <article className="mb-4" key={post?.slug}>
              {/* Using <a> tags until this bug is addressed: https://github.com/vercel/next.js/issues/65009 */}
              <a href={`/${post?.slug}/`}>{post?.title}</a>
              <div>
                <FormatDate date={post?.date ?? ""} />
              </div>

              {post?.excerpt && <div>{post?.excerpt}</div>}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
