import Head from "next/head";
import Link from "next/link";
import FormatDate from "../components/format-date";
import Header from "../components/header";
import { getAllPosts } from "../lib/api";
import { PostType } from "./[slug]";

export default function Home({ allPosts }: { allPosts: PostType[] }) {
  return (
    <>
      <Head>
        <title>Posts | Blake Wilson - Software Engineer and Creator</title>
      </Head>
      <Header />

      <div className="container max-w-6xl mx-auto p-4">
        <div className="prose prose-lg md:prose-2xl dark:prose-invert p-0 m-0 w-full max-w-full">
          <h2>All Posts</h2>
          {allPosts.map((post) => (
            <article className="mb-4" key={post.slug}>
              <Link href="/[slug]" as={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
              <div>
                <FormatDate date={post.date} />
              </div>

              {post?.excerpt && <div>{post?.excerpt}</div>}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "content"]);

  return {
    props: {
      allPosts,
    },
  };
}
