import { notFound } from "next/navigation";
import FormatDate from "../../components/format-date";
import Header from "../../components/header";
import PostContent from "../../components/postContent";
import { getPostBySlug, getPostSlugs } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug, ["title"]);

  return {
    title: `${
      post?.title ?? ""
    } | Blake Wilson - Software Engineer and Creator" `,
  };
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => {
    const realSlug = slug.replace(/\.md$/, "");

    return {
      slug: realSlug,
    };
  });
}

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Header />

      <main className="container max-w-6xl mx-auto p-4">
        <PostContent>
          <h1>{post.title}</h1>

          <div className="pb-6">
            {post.date && (
              <>
                Created on <FormatDate date={post.date} />
              </>
            )}

            {post.updated && (
              <>
                Updated on <FormatDate date={post.updated} />
              </>
            )}
          </div>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </PostContent>
      </main>
    </>
  );
}
