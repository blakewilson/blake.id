import Link from "next/link";
import FormatDate from "../../components/format-date";
import Header from "../../components/header";
import { getAllPosts } from "../../lib/api";

export const metadata = {
  title: "All Posts | Blake Wilson - Software Engineer and Creator",
};

export default async function Home() {
  const allPosts = getAllPosts(["slug", "title", "date", "content"]);

  return (
    <>
      <Header />

      <div className="container max-w-6xl mx-auto p-4">
        <div className="prose prose-lg md:prose-2xl dark:prose-invert mx-auto">
          <h2>All Posts</h2>
          {allPosts.map((post) => (
            <article className="mb-4" key={post?.slug}>
              <Link href={`/${post?.slug}/`} prefetch={false}>
                {post?.title}
              </Link>
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
