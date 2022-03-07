import { Params } from "next/dist/server/router";
import Head from "next/head";
import FormatDate from "../components/format-date";
import Header from "../components/header";
import PostContent from "../components/postContent";
import SEO from "../components/seo";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

export type Author = {
  name: string;
  picture: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  updated: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  content: string;
};

type Props = {
  post: PostType;
  morePosts: PostType[];
};

export default function Post({ post, morePosts }: Props) {
  return (
    <>
      <SEO
        title={`${post.title} | Blake Wilson - Software Engineer and Creator`}
        description={post.content}
        imageUrl={post?.coverImage}
      />
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
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContent>
      </main>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
